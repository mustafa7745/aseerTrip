import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SupabaseService } from './supabase.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  email: string = '';
  password: string = '';
  loading: boolean = false;
  errorMessage: string = '';
  showHeader: boolean = true;

  constructor(private supabase: SupabaseService, private router: Router) {
    // Listen to route changes
    this.router.events.subscribe(() => {
      this.showHeader = this.router.url !== '/login';
    });
  }

  async ngOnInit(): Promise<void> {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      const params = new URLSearchParams(hash.replace('#', '?'));
      const access_token = params.get('access_token');
      const refresh_token = params.get('refresh_token');
      const type = params.get('type'); // 👈 نحدد نوع العملية من الرابط

      console.log({ access_token, refresh_token, type });

      if (type === 'recovery' && access_token && refresh_token) {
        // ✅ حالة استرجاع كلمة المرور
        // سجل الدخول مؤقتًا
        await this.supabase.supabase.auth.setSession({
          access_token,
          refresh_token,
        });
        this.router.navigate(['/update-password']);
      } else if (type === 'signup') {
        // ✅ حالة تأكيد الإيميل بعد التسجيل
        // يمكن توجيه المستخدم إلى صفحة تسجيل الدخول أو إظهار رسالة
        alert('✅ تم تأكيد بريدك الإلكتروني، يمكنك الآن تسجيل الدخول.');
        this.router.navigate(['/login']);
      } else {
        // ❌ حالة غير معروفة
        this.router.navigate(['/home']);
      }
    }
  }
}
