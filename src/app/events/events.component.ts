import { Component } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  event: any;
  user: any;
  eventInfo: any;
  constructor(private supabase: SupabaseService) {}
  async ngOnInit(): Promise<void> {
    if (typeof window !== 'undefined') {
      this.event = JSON.parse(localStorage.getItem('event')!!);
    }
    this.user = this.supabase.user;
  }
  book() {
    if (!this.user) {
      alert('يرجى تسجيل الدخول أولاً!');
      return;
    }
    alert(`تم الحجز`);
  }
}
