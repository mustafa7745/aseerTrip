import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}
  goToGuide(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/guide-info']);
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
}
