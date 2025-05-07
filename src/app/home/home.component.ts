import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // constructor() {}
  user: any;
  async ngOnInit(): Promise<void> {
    this.user = this.supabase.user;
  }
  constructor(private router: Router, private supabase: SupabaseService) {}
  goToGuide(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/guide-info']);
  }
  goToEvents(user: any) {
    localStorage.setItem('event', JSON.stringify(user));
    this.router.navigate(['/event-info']);
  }
  goToTransportation(user: any) {
    localStorage.setItem('transport', JSON.stringify(user));
    this.router.navigate(['/transport-info']);
  }
  topAttractions = [
    {
      name: 'قرية المفتاحة',
      image:
        'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/attractions/13_NXYauRO.jpg',
      reviews: 124,
    },
    {
      name: 'منتزه دلغان',
      image:
        'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/attractions/Dalagan-Park-Asir.png',
      reviews: 89,
    },
    {
      name: 'قصر شدا الأثري',
      image:
        'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/attractions/shada.jpg',
      reviews: 76,
    },
  ];

  featuredGuides = [
    {
      id: 4,
      name: 'ظافر الشهراني',
      avatar:
        'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/guider/thafer.jpeg',
      languages: ['العربية'],
      rating: 5,
    },
    {
      id: 1,
      name: 'مهند سعيد',
      avatar:
        'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/guider/mohaned.png',
      languages: ['العربية', 'الإنجليزية'],
      rating: 4.8,
    },
    {
      id: 2,

      name: 'علي سعد',
      avatar:
        'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/guider/saad.png',
      languages: ['العربية', 'الفرنسية'],
      rating: 4.9,
    },
    {
      id: 3,
      name: 'محمد أبو عجمه',
      avatar:
        'https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg',
      languages: ['العربية', 'الفرنسية'],
      rating: 4.9,
    },
  ];
  travelTips = [
    {
      title: 'أفضل وقت للزيارة',
      icon: 'fa-calendar-alt',
      description: 'من مارس إلى مايو ومن سبتمبر إلى نوفمبر',
    },
    {
      title: 'الملابس المناسبة',
      icon: 'fa-tshirt',
      description: 'ملابس خفيفة مع سترة للأمسيات الباردة',
    },
    {
      title: 'وسائل النقل',
      icon: 'fa-car',
      description: 'تأجير سيارة هو الخيار الأمثل للتنقل',
    },
  ];
  upcomingEvents = [
    {
      id: 1,
      name: 'مهرجان الصيف',
      image:
        'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/events/Summer-Festivals-940x675.webp',
      category: 'فعاليات الصيف',
      description:
        'فعالية صيفية مميزة تتضمن عروضًا موسيقية مباشرة، وألعابًا ترفيهية للأطفال، وأكشاك طعام محلية تقدم نكهات متنوعة من المأكولات الشعبية والعصرية.',
      date: new Date('2023-07-15T13:00:00'),
      price: 99,
    },
    {
      id: 2,
      name: 'ليلة الأفلام المفتوحة',
      image:
        'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/events/night.jpg',
      category: 'فعاليات الصيف',
      description:
        'تجربة سينمائية في الهواء الطلق تعرض أفلامًا مميزة على شاشة عملاقة مع جلسات مريحة، وأجواء عائلية ممتعة تحت النجوم.',
      date: new Date('2023-07-18T20:00:00'),
      price: 150,
    },
    {
      id: 3,
      name: 'سوق عسير للتمور',
      image:
        'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/events/dates.jpg',
      category: 'فعاليات التمور',
      description:
        'سوق موسمي يضم تشكيلة من أجود أنواع التمور من مزارع المنطقة، مع عروض حية لطرق الحفظ والتذوق، وأركان لمنتجات العسل والقهوة.',
      date: new Date('2023-08-01T10:00:00'),
      price: 210,
    },
    {
      id: 4,
      name: 'مهرجان العسل الجبلي',
      image:
        'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/events/dates.jpg',
      description:
        'فعالية تسلط الضوء على إنتاج العسل الجبلي المحلي بمشاركة نخبة من النحالين، وتشمل ورش عمل تفاعلية وتجارب تذوق مباشرة.',
      category: 'فعاليات التمور',
      date: new Date('2023-08-05T09:30:00'),
      price: 99,
    },
    {
      id: 5,
      name: 'ليلة الشعر والأدب',
      image:
        'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/events/adb1.webp',
      category: 'فعاليات ثقافية',
      description:
        'أمسية أدبية تجمع بين الشعر والموسيقى في أجواء راقية، بمشاركة نخبة من الشعراء المحليين ونقاشات ثقافية مفتوحة للحضور.',
      date: new Date('2023-08-10T19:00:00'),
      price: 99,
    },

    {
      id: 6,
      name: 'ندوة الفنون المعاصرة',
      image:
        'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/events/adb2.jfif',
      category: 'فعاليات ثقافية',
      description:
        'أمسية أدبية تجمع بين الشعر والموسيقى في أجواء راقية، بمشاركة نخبة من الشعراء المحليين ونقاشات ثقافية مفتوحة للحضور.',
      date: new Date('2023-08-15T17:00:00'),
      price: 100,
    },
    {
      id: 7,
      name: 'ندوة اللغة العربية',
      image:
        'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/events/adb3.jpg',
      description:
        'أمسية أدبية تجمع بين الشعر والموسيقى في أجواء راقية، بمشاركة نخبة من الشعراء المحليين ونقاشات ثقافية مفتوحة للحضور.',
      category: 'فعاليات ثقافية',
      date: new Date('2023-08-15T17:00:00'),
      price: 101,
    },
  ];

  getUniqueCategories(events: any[]): string[] {
    return [...new Set(events.map((e) => e.category))];
  }
  book() {
    if (!this.user) {
      alert('يرجى تسجيل الدخول أولاً!');
      return;
    }
    alert(`تم الحجز`);
  }
}
