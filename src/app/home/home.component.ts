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
      description: `مهرجان الصيف هو فعالية سنوية تُقام في الهواء الطلق، تهدف إلى إدخال البهجة على الزوار من جميع الأعمار.
تتضمن الفعالية عروضًا موسيقية مباشرة من فرق محلية وعالمية، كما تشمل عروض رقص فولكلوري تعكس ثقافة المنطقة.
بالإضافة إلى ذلك، يتضمن المهرجان منطقة ألعاب ترفيهية مخصصة للأطفال تضم أنشطة تعليمية وتفاعلية.
تتواجد أكشاك طعام متنوعة تقدم المأكولات الشعبية والعصرية من مختلف المطابخ.
كما يمكن للزوار الاستمتاع بركن الفنون والحرف اليدوية الذي يضم منتجات محلية فريدة.
الفعالية مجهزة بجلسات عائلية مريحة تحت المظلات، مع مناطق مخصصة للراحة.
الهدف من هذا الحدث هو تعزيز السياحة المحلية ودعم أصحاب المشاريع الصغيرة والمتوسطة.

`,
      date: new Date('2023-07-15T13:00:00'),
      price: 99,
    },
    {
      id: 2,
      name: 'ليلة الأفلام المفتوحة',
      image:
        'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/events/night.jpg',
      category: 'فعاليات الصيف',
      description: `تُقام ليلة الأفلام المفتوحة في ساحة مخصصة تُجهز بشاشة عملاقة ونظام صوتي عالي الجودة،
وتتيح للجمهور مشاهدة أفلام مختارة بعناية تشمل أفلام كلاسيكية وأخرى حديثة ذات طابع عائلي.
تُوفر الفعالية جلسات مريحة على الأرض، مع وسائد وبطانيات لإضفاء جو من الراحة.
تُتاح أكشاك لبيع الفشار والمشروبات الخفيفة، وتوجد منطقة للأطفال مزودة بأنشطة مرحة.
كما يتم تهيئة المكان بإضاءة خافتة تضمن تجربة بصرية ممتعة وآمنة.
الفعالية تروج لفكرة السينما المجتمعية وتوفر منصة للقاء العائلات والأصدقاء في جو من الترفيه.
تسعى الفعالية لجعل الفن السابع أكثر قرباً وسهولة للجميع في بيئة مفتوحة ومبهجة.

`,
      date: new Date('2023-07-18T20:00:00'),
      price: 150,
    },
    {
      id: 3,
      name: 'سوق عسير للتمور',
      image:
        'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/events/dates.jpg',
      category: 'فعاليات التمور',
      description: `سوق عسير للتمور هو فعالية موسمية تجمع بين التجار والمزارعين لعرض منتجات التمور المحلية الفاخرة.
يشمل السوق عروضاً حية لكيفية حفظ وتغليف التمور، بالإضافة إلى جلسات تذوق متنوعة.
يضم السوق أركانًا خاصة لمنتجات العسل الجبلي والقهوة العربية، ما يعزز تجربة الزائر الثقافية.
تُقام أيضاً ورش عمل يومية عن أهمية التمور وفوائدها الصحية بإشراف مختصين.
تم تهيئة الموقع ليستوعب العائلات مع توفير مناطق استراحة مريحة وأكشاك تسويقية.
الفعالية تهدف إلى دعم المنتجات الوطنية وربط المزارعين بالمستهلك مباشرة.
كما تحتوي على فعاليات ثقافية مرافقة مثل العروض الشعبية والمعارض التراثية.

`,
      date: new Date('2023-08-01T10:00:00'),
      price: 210,
    },
    {
      id: 4,
      name: 'مهرجان العسل الجبلي',
      image:
        'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/events/dates.jpg',
      description: `يقام مهرجان العسل الجبلي في قلب منطقة زراعية جبلية، ويستعرض تنوع وجودة العسل المنتج محلياً.
يشارك في المهرجان عدد كبير من النحالين الحرفيين لعرض أصناف العسل وتقديم تجارب تذوق فريدة.
يُقام على هامش المهرجان ورش عمل تعليمية حول تربية النحل واستخراج العسل وطرق التحقق من جودته.
الفعالية تحتوي على ركن للأطفال لتعليمهم عن النحل ودوره البيئي من خلال ألعاب تعليمية.
تشمل الفعالية أيضاً معارض للمنتجات المرتبطة بالنحل كالشمع والبروبوليس.
وتتوفر أكشاك بيع مباشرة لدعم النحالين المحليين وتعزيز الاقتصاد الريفي.
الحدث يهدف إلى توعية المجتمع بأهمية النحل والعسل كغذاء ودواء معاً.`,
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
      description: `ليلة الشعر والأدب هي مناسبة ثقافية راقية تجمع نخبة من الشعراء والأدباء في أمسية أدبية مميزة.
تبدأ الأمسية بقراءات شعرية متنوعة تُلقى على المسرح وسط حضور مثقف.
وتشمل الفعالية فقرات موسيقية تضفي جواً فنياً متناغماً مع النصوص الملقاة.
يتخلل الأمسية نقاشات ثقافية حرة يديرها خبراء في الأدب العربي.
توفر الفعالية منصة مفتوحة للمواهب الشابة لعرض أعمالهم.
كما تتيح للجمهور التفاعل المباشر مع الشعراء في جلسات حوارية حرة.
الهدف من الفعالية هو تعزيز الحركة الأدبية ونشر الثقافة الشعرية في المجتمع.`,
      date: new Date('2023-08-10T19:00:00'),
      price: 99,
    },

    {
      id: 6,
      name: 'ندوة الفنون المعاصرة',
      image:
        'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/events/adb2.jfif',
      category: 'فعاليات ثقافية',
      description: `ندوة الفنون المعاصرة تُقام بمشاركة فنانين ونقاد لمناقشة آخر تطورات الفن الحديث.
تشمل جلسات الندوة عروضًا تقديمية لأعمال فنية معاصرة وتحليلها من قبل مختصين.
تُعرض خلال الندوة لوحات ومنحوتات لفنانين شباب، مع إتاحة الفرصة لاقتناء الأعمال الفنية.
كما تُقام ورش عمل حول تقنيات الرسم والوسائط الجديدة.
تسلط الندوة الضوء على دور الفن في التعبير عن قضايا المجتمع والهوية الثقافية.
الحدث يوفر بيئة خصبة للتواصل بين الفنانين والجمهور والمهتمين بالشأن الفني.
يُعد الحدث منصة حوارية تفاعلية تُشجع على الإبداع والتفكير النقدي.`,
      date: new Date('2023-08-15T17:00:00'),
      price: 100,
    },
    {
      id: 7,
      name: 'ندوة اللغة العربية',
      image:
        'https://bypzmbcssqynwcwglaan.supabase.co/storage/v1/object/public/tours/events/adb3.jpg',
      description: `تهدف ندوة اللغة العربية إلى تعزيز مكانة اللغة العربية والاحتفاء بتاريخها وتطورها.
يشارك في الندوة أساتذة جامعيون ولغويون متخصصون يقدمون أوراقاً بحثية متنوعة.
تناقش الندوة قضايا التحديات التي تواجه اللغة العربية في العصر الرقمي ووسائل الإعلام.
تُعرض نماذج من الأدب العربي الكلاسيكي والحديث في جلسات مخصصة للقراءة والنقد.
الفعالية تشمل أيضًا مسابقة في الإملاء والخط العربي للأطفال والناشئة.
تُقام ورش عمل حول التحرير اللغوي وأساليب الترجمة الأدبية.
يهدف الحدث إلى خلق بيئة تعليمية تفاعلية تعزز حب اللغة لدى الأجيال الجديدة.`,
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
