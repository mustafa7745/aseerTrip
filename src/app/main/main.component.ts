import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  loading: any;
  async logout() {
    // throw new Error('Method not implemented.');

    this.loading = true;
    if (await this.supabase.logout()) {
      this.user = null;
      // this.router.navigate(['/login']);
    }
    this.loading = false;
  }
  user: any = null;
  constructor(private supabase: SupabaseService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    await this.supabase.loadUser();
    this.user = this.supabase.user;
    // if (this.user) {
    //   this.user = this.user.session?.user.email?.split('@')[0];
    // }
    // console.log(this.user);

    // const dates = await this.supabase.getDatesFromTable('guides');
    // console.log(dates);

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

  goToGuide(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/guide-info']);
  }

  goToSignUp() {
    this.router.navigate(['/signup']);
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  menuOpen = false;
  featuredTours = [
    {
      title: 'رحلة إلى جبل السودة',
      image:
        'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/tours/mahael.jpeg',
      price: 250,
      duration: 'يوم كامل',
      location: 'أبها',
    },
    {
      title: 'جولة في قرية رجال ألمع التراثية',
      image:
        'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/tours/men.webp',
      price: 180,
      duration: 'نصف يوم',
      location: 'رجال ألمع',
    },
    {
      title: 'مغامرة في متنزه السحاب',
      image:
        'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/tours/cloud.webp',
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
