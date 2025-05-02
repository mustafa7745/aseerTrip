import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-guide-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guide-info.component.html',
  styleUrl: './guide-info.component.css',
})
export class GuideInfoComponent {
  constructor(private supabase: SupabaseService) {}
  user: any;

  async ngOnInit(): Promise<void> {
    if (typeof window !== 'undefined') {
      this.travelGuider = JSON.parse(localStorage.getItem('user')!!);
      this.travelGuideInfo = this.travelGuideList.find(
        (data) => data.travelGuiderId == this.travelGuider.id
      )!!;
    }
    this.user = this.supabase.user;
  }
  travelGuideList = [
    {
      travelGuiderId: 1,
      title: 'مرشد سياحي معتمد في عسير',
      description:
        'مرشد سياحي متخصص في تقديم تجارب سياحية فريدة في عسير، عضو في منصة "سعف" منذ مايو 2023.',
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
      contact: {
        phone: '+966 55 123 4567',
        email: 'mohanned.guide@example.com',
        instagram: 'https://instagram.com/ahmad_guide',
        whatsapp: 'https://wa.me/966551234567',
      },
    },
    {
      travelGuiderId: 2,
      title: 'مرشد سياحية محترف في عسير',
      description:
        'خبير في السياحة الجبلية والثقافية في منطقة عسير، تقدم تجارب غنية تستعرض التنوع البيئي والتراثي للمنطقة.',
      tasks: [
        'قيادة جولات إلى قرى عسير القديمة مثل رجال ألمع وقرية المفتاحة',
        'تنظيم رحلات مشي جبلية في السودة والشعف',
        'تعريف الزوار بالعادات والتقاليد الجنوبية الأصيلة',
        'تنسيق الفعاليات المحلية وورش الطبخ الجنوبي التقليدي',
      ],
      mission:
        'تقديم تجربة سياحية متكاملة تظهر جمال عسير الطبيعي والإنساني، وتعزز التواصل بين الزوار والمجتمع المحلي.',
      experience:
        'خبرة تزيد عن 7 سنوات في السياحة الداخلية، ومشاركة فعالة في فعاليات موسم عسير والمهرجانات المحلية.',
      contact: {
        phone: '+966 54 321 7890',
        email: 'saad.aseerguide@example.com',
        instagram: 'https://instagram.com/saad_aseer_guide',
        whatsapp: 'https://wa.me/966543217890',
      },
    },
    {
      travelGuiderId: 3,
      title: 'خبير تراث وفنون في عسير',
      description:
        'مرشد يهتم بالفنون الشعبية والعمارة التقليدية في عسير، يقدم جولات غنية بالمعلومات والأنشطة التفاعلية.',
      tasks: [
        'شرح تاريخ الفن العسيري (فن القط)',
        'تنظيم زيارات للمتاحف والمراكز الثقافية',
        'تنسيق ورش للرسم والفنون المحلية للزوار',
        'إعداد مسارات سياحية ثقافية داخل أبها وخارجها',
      ],
      mission:
        'ربط الزائر بثقافة عسير الفريدة وإبراز الفن المحلي كجزء من الهوية السعودية.',
      experience:
        'خبرة في العمل مع الجمعيات الثقافية والمراكز الفنية، إضافةً إلى مشاركات دولية في معارض تراثية.',
      contact: {
        phone: '+966 53 876 5432',
        email: 'fahad.artguide@example.com',
        instagram: 'https://instagram.com/mohammed_qatt_aseer',
        whatsapp: 'https://wa.me/966538765432',
      },
    },

    {
      travelGuiderId: 4,
      title: 'مرشد سياحي متخصص في تقديم تجربة إعلامية وسياحية متميزة',
      description:
        'مرشد سياحي متخصص في تقديم تجربة إعلامية وسياحية متميزة. لدي خبرة في التقنيات الإعلامية، وأنا شغوف باستخدام الإعلام الرقمي لتعزيز التجربة السياحية. رقم الترخيص: 40001447. ' +
        'لماذا تختارني كمرشدك السياحي؟ أدمج الإعلام الرقمي في تقديم الجولات السياحية باستخدام التقنيات الحديثة، مما يجعل تجربتك أكثر تفاعلية وإبداعية. رسالتي لك كسائح هي تقديم تجربة سياحية مبتكرة تجمع بين التقنية والإعلام لجعلها تجربة لا تنسى. كما أنني أستخدم أدوات إعلامية وتقنيات حديثة لتقديم محتوى يضيف قيمة إلى رحلاتك ويعزز التفاعل مع البيئة السياحية.',
      tasks: [
        'دمج الإعلام الرقمي في تقديم جولات سياحية مبتكرة',
        'استخدام التقنيات الحديثة لتعزيز التجارب السياحية',
        'تقديم محتوى إعلامي يتماشى مع المواضيع السياحية المختلفة',
        'التنسيق مع وسائل الإعلام المحلية لتسليط الضوء على المواقع السياحية',
      ],
      mission:
        'تهدف جولاتي إلى تقديم تجربة سياحية مبتكرة تجمع بين التقنية والإعلام لجعلها تجربة لا تنسى.',
      experience:
        'خبرة كبيرة في مجال الإعلام الرقمي والتقنيات السياحية الحديثة، مع تركيز على دمج التقنيات في تقديم الجولات السياحية.',
      contact: {
        phone: '+966 54 321 7890',
        email: 'saad.aseerguide@example.com',
        instagram: 'https://instagram.com/saad_aseer_guide',
        whatsapp: 'https://wa.me/966543217890',
      },
    },
  ];

  travelGuideInfo = {
    travelGuiderId: 1,
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
    contact: {
      phone: '+966 55 123 4567',
      email: 'ahmad.guide@example.com',
      instagram: 'https://instagram.com/ahmad_guide',
      whatsapp: 'https://wa.me/966551234567',
    },
  };

  // بيانات أحمد السلمي
  travelGuider: any = {
    name: 'أحمد السلمي',
    avatar:
      'https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg',
    languages: ['العربية', 'الإنجليزية'],
    rating: 4.8,
  };

  book() {
    if (!this.user) {
      alert('يرجى تسجيل الدخول أولاً!');
      return;
    }
    alert(`تم حجز: ${this.travelGuider.name}`);
  }
}
