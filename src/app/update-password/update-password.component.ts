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
