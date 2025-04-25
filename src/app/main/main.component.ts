import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  user: any;
  constructor(private supabase: SupabaseService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    const a =await this.supabase.getSession()
    if (a) {
      this.user = a.data.session?.user.email?.split('@')[0];
    }
    console.log(a);
    
    // .then(({ data:an }) => !!data.session?.user)
    // .catch(() => false);
    // this.supabase.getSession().subscribe(session => {
    //   if (session) {
    //     this.user = session.user;
    //     console.log(this.user);
    //   } else {
    //     console.log('No session available');
    //     this.user = null;  // or handle the case when no session exists
    //   }
    // });
  }

  //  constructor(private supabase: SupabaseService, private router: Router) {}
  goToLogin() {
    this.router.navigate(['/login']);
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  menuOpen = false;
  featuredTours = [
    {
      title: 'رحلة إلى جبل السودة',
      image: 'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/tours/mahael.jpeg',
      price: 250,
      duration: 'يوم كامل',
      location: 'أبها',
    },
    {
      title: 'جولة في قرية رجال ألمع التراثية',
      image: 'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/tours/men.webp',
      price: 180,
      duration: 'نصف يوم',
      location: 'رجال ألمع',
    },
    {
      title: 'مغامرة في متنزه السحاب',
      image: 'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/tours/cloud.webp',
      price: 320,
      duration: 'يوم كامل',
      location: 'أبها',
    },
  ];

  upcomingEvents = [
    {
      title: 'مهرجان الصيف في عسير',
      date: new Date('2023-07-15'),
      description: 'احتفالية سنوية تضم عروضاً تراثية وفنية',
      location: 'منتزه السودة',
    },
    {
      title: 'سوق عسير للتمور',
      date: new Date('2023-08-20'),
      description: 'أجود أنواع التمور والعسل الجبلي',
      location: 'أبها',
    },
  ];

  topAttractions = [
    {
      name: 'قرية المفتاحة',
      image: 'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/attractions/13_NXYauRO.jpg',
      reviews: 124,
    },
    {
      name: 'منتزه دلغان',
      image: 'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/attractions/Dalagan-Park-Asir.png',
      reviews: 89,
    },
    {
      name: 'قصر شدا الأثري',
      image: 'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/attractions/shada.jpg',
      reviews: 76,
    },
  ];

  featuredGuides = [
    {
      name: 'أحمد السلمي',
      avatar: 'https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg',
      languages: ['العربية', 'الإنجليزية'],
      rating: 4.8,
    },
    {
      name: 'محمد القحطاني',
      avatar: 'https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg',
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
