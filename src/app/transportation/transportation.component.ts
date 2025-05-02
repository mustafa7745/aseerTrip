import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-transportation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transportation.component.html',
  styleUrl: './transportation.component.css',
})
export class TransportationComponent {
  constructor(private supabase: SupabaseService) {}
  type = '';
  user: any;
  data: any;
  async ngOnInit(): Promise<void> {
    if (typeof window !== 'undefined') {
      this.type = JSON.parse(localStorage.getItem('transport')!!);
    }
    this.user = this.supabase.user;
    this.data = this.vehicles.filter(
      (transport: { type: string }) => transport.type === this.type
    );
  }

  vehicles = [
    {
      name: 'تويوتا كورولا',
      image:
        'https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg',
      features: ['مكيف هواء', 'نظام ملاحة', 'بلوتوث'],
      rating: 4.5,
      price: 170,
      type: 'car',
    },
    {
      name: 'هيونداي النترا',
      image:
        'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/transportations/cars/2024-hyundai-elantra.jpg',
      features: ['مثبت سرعة', 'كاميرا خلفية', 'شاشة لمس'],
      rating: 4.7,
      price: 190,
      type: 'car',
    },
    {
      name: 'تويوتا كورولا',
      image:
        'https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg',
      features: ['مكيف هواء', 'نظام ملاحة', 'بلوتوث'],
      rating: 4.5,
      price: 170,
      type: 'rent-car',
    },

    {
      name: 'حافلات سباتكو',
      image:
        'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/transportations/bus/bus1.png',
      features: ['مقاعد جلد', 'تحكم كهربائي', 'USB'],
      rating: 4.6,
      price: 150,
      type: 'bus',
    },
    {
      name: 'الخطوط الجوية السعودية',
      image:
        'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/transportations/plain/plain.webp',
      features: ['مقاعد جلد', 'تحكم كهربائي', 'USB'],
      rating: 4.6,
      price: 150,
      type: 'plain',
    },
  ];

  getTitle(type: string): string {
    switch (type) {
      case 'car':
        return 'السيارات المتوفرة';
      case 'rent-car':
        return 'سيارات الأجرة المتوفرة';
      case 'bus':
        return 'الحافلات المتوفرة';
      case 'plain':
        return 'الطائرات المتوفرة';
      default:
        return 'المركبات';
    }
  }

  getPriceUnit(type: string): string {
    switch (type) {
      case 'plain':
        return 'رحلة';
      case 'bus':
        return 'رحلة';
      default:
        return 'يوم';
    }
  }

  book(name: string) {
    if (!this.user) {
      alert('يرجى تسجيل الدخول أولاً!');
      return;
    }
    alert(`تم حجز: ${name}`);
  }
}
