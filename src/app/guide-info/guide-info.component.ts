import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-guide-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guide-info.component.html',
  styleUrl: './guide-info.component.css',
})
export class GuideInfoComponent {
  async ngOnInit(): Promise<void> {
    if (typeof window !== 'undefined') {
      this.travelGuider = JSON.parse(localStorage.getItem('user')!!);
    }
  }
  travelGuideInfo = {
    title: 'مرشد سياحي معتمد في عسير',
    description:
      'مرشد سياحي متخصص في تقديم تجارب سياحية فريدة في عسير عضو في منصة "سعف" منذ مايو 2023.',
    tasks: [
      'تنظيم جولات سياحية مخصصة في العلا',
      'تقديم معلومات تاريخية وثقافية عن المواقع الأثرية',
      'إعداد برامج سياحية تتناسب مع اهتمامات الزوار',
      'التنسيق مع الجهات المحلية لضمان تجربة سياحية متميزة',
    ],
    mission:
      'نقل الزوار إلى قلب تاريخ العلا، مع تقديم تجربة سياحية غنية بالمعلومات والأنشطة التفاعلية.',
    experience:
      'خبرة واسعة في مجال الإرشاد السياحي، مع سجل حافل في تنظيم رحلات سياحية ناجحة في العلا.',
  };

  // بيانات أحمد السلمي
  travelGuider: any = {
    name: 'أحمد السلمي',
    avatar:
      'https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg',
    languages: ['العربية', 'الإنجليزية'],
    rating: 4.8,
  };
}
