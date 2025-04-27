import { inject, Injectable } from '@angular/core';
import {
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
} from '@supabase/supabase-js';
import { environment } from '../environments/environment';
import { BehaviorSubject, catchError, map, of } from 'rxjs';
import { Router } from 'express';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.apiUrl, environment.apiKey, {
      auth: {
        // 👇 Disable locks
        autoRefreshToken: false,
        persistSession: true,
        detectSessionInUrl: false,
      },
    });
  }
  private sessionSubject = new BehaviorSubject<AuthSession | null>(null);

  async signIn(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({
      email,
      password,
    });
  }

  async getDatesFromTable(table: string) {
    const { data, error } = await this.supabase.from(table).select('*'); // selects all columns

    if (error) {
      console.error('Error fetching data:', error);
      return [];
    }

    return data;
  }

  async logout() {
    const { error } = await this.supabase.auth.signOut();
    if (error) {
      console.error('Logout error:', error.message);
      return false;
    } else {
      console.log('Logged out successfully');
      return true;
    }
  }

  async register() {
    return this.supabase.auth;
  }
  async resetPassword(email: string) {
    return this.supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'https://aseer-trip.vercel.app/update-password',
      // redirectTo: 'http://localhost:4200/update-password',
    });
  }
  getSession() {
    return this.supabase.auth.getSession();
  }

  hasSession(): Promise<boolean> {
    return this.supabase.auth
      .getSession()
      .then(({ data }) => !!data.session?.user)
      .catch(() => false);
  }
}
