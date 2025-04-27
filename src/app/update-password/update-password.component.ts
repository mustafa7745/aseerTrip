import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from '../supabase.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./update-password.component.css'],
  templateUrl: './update-password.component.html',
})
export class UpdatePasswordComponent {
  newPassword: string = '';
  loading = false;
  errorMessage = '';
  successMessage = '';

  constructor(private supabase: SupabaseService, private router: Router) {}

  ngOnInit() {
    if (typeof window !== 'undefined') {
      // ✅ جلب التوكن من الرابط
      const hash = window.location.hash;
      const params = new URLSearchParams(hash.replace('#', '?'));
      const access_token = params.get('access_token');
      const refresh_token = params.get('refresh_token');
      console.log(access_token);
      // ✅ تسجيل الدخول مؤقتًا بالتوكن
      if (access_token && refresh_token) {
        this.supabase.supabase.auth
          .setSession({
            access_token,
            refresh_token,
          })
          .then(({ error }) => {
            if (error) {
              this.errorMessage = 'فشل في إنشاء جلسة التحقق.';
            }
          });
      } else {
        this.errorMessage = 'رمز التحقق مفقود من الرابط.';
      }
    }
  }
  async updatePassword() {
    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const { error } = await this.supabase.supabase.auth.updateUser({
      password: this.newPassword,
    });

    if (error) {
      this.errorMessage = error.message;
    } else {
      // alert('تم تحديث كلمة المرور بنجاح!')
      this.successMessage = 'تم تحديث كلمة المرور بنجاح!';
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    }

    this.loading = false;
  }
}
