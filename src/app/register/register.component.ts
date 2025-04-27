import { Component } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private supabase: SupabaseService, private router: Router) {}

  async signup() {
    this.loading = true;
    this.errorMessage = '';
  
    try {
      const { email, password } = this; // تأكد من تعريفهما في الـ component
  
      // تأكد من أن البريد وكلمة المرور غير فارغين
      if (!email || !password) {
        this.errorMessage = 'الرجاء إدخال البريد وكلمة المرور.';
        return;
      }
  
      const { data, error } = await this.supabase.supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
      });
  
      if (error) {
        console.error('خطأ في التسجيل:', error.message);
        this.errorMessage = error.message; // عرض الخطأ في الواجهة
        return;
      }
  
      console.log('User registered successfully:', data);
      alert('تم التسجيل بنجاح! يرجى تأكيد البريد الإلكتروني.');
      this.router.navigate(['/login']);
    } catch (err) {
      console.error('خطأ غير متوقع:', err);
      alert(err)
      this.errorMessage = 'حدث خطأ غير متوقع. حاول مرة أخرى.';
    } finally {
      this.loading = false;
    }
  }
  
}
