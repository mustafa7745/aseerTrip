import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  goToSignUp() {
    this.router.navigate(['/signup']);
  }
  goToMain() {
    this.router.navigate(['/main']);
  }
  email: string = '';
  password: string = '';
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private supabase: SupabaseService, private router: Router) {}
  async ngOnInit(): Promise<void> {
    if (await this.supabase.hasSession()) {
      this.router.navigate(['/main']);
    }
  }

  async login() {
    // this.loading = true;
    // this.errorMessage = '';
    // try {
    //   const { data, error } = await this.supabase.signIn(
    //     this.email,
    //     this.password
    //   );
    //   if (error) {
    //     this.errorMessage = error.message;
    //     return;
    //   }
    //   if (data.user) {
    //     console.log('done', data);
    //     this.router.navigate(['/main']);
    //   }
    // } catch (err) {
    //   this.errorMessage = 'An unexpected error occurred';
    //   console.error(err);
    // } finally {
    //   this.loading = false;
    // }
  }

  async forgotPassword() {
    this.router.navigate(['/update-password']);
    // if (!this.email) {
    //   this.errorMessage = 'Please enter your email first';
    //   return;
    // }

    // this.loading = true;
    // try {
    //   const { error } = await this.supabase.resetPassword(this.email);

    //   if (error) {
    //     this.errorMessage = error.message;
    //     return;
    //   }

    //   alert('Password reset email sent! Check your inbox.');
    // } catch (err) {
    //   this.errorMessage = 'Failed to send reset email';
    //   console.error(err);
    // } finally {
    //   this.loading = false;
    // }
  }
}
