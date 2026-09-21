import profileImg from "../assets/IMG_4554.jpeg";

export const profile = {
  name: "مبین محسنی",
  latinName: "Mobin Mohseni",
  age: 23,
  location: "تهران",
  title: "Computer Engineering | Network",
  bio: "دانشجوی کارشناسی ارشد مهندسی کامپیوتر، گرایش شبکه، با تمرکز بر زیرساخت شبکه، مانیتورینگ و توسعه نرم‌افزار.",
  email: "Mohseni.182002@gmail.com",
  github: "https://github.com/Mobinmohseni",
  linkedin: "https://www.linkedin.com/in/mobin-mohseni-0a7113241/",
  profileImage: profileImg
};

export const education = [
  {
    degree: "کارشناسی مهندسی کامپیوتر",
    university: "دانشگاه رازی",
    period: "۱۴۰۰ — ۱۴۰۴",
    description: "تحصیل در رشته مهندسی کامپیوتر."
  },
  {
    degree: "کارشناسی ارشد مهندسی کامپیوتر — گرایش شبکه",
    university: "دانشگاه آزاد اسلامی تهران جنوب",
    period: "از ۱۴۰۴",
    description: "تمرکز تحصیلی بر شبکه و زیرساخت و برنامه نویسی شبکه."
  }
];

export const skills = [
  { name: "Python", level: 88, icon: "python" },
  { name: "Django", level: 84, icon: "code" },
  { name: "Cisco", level: 80, icon: "network" },
  { name: "Network Monitoring", level: 80, icon: "monitor" },
  { name: "Networking", level: 84, icon: "network" },
  { name: "Socket programming", level: 80, icon: "network" },
  { name: "Linux server", level: 80, icon: "network" },
  { name: "Windows Server", level: 80, icon: "network" },
  { name: "Security", level: 50, icon: "network" },
];

export const certificates = [
  { title: "Network+", issuer: "Certification / Course Placeholder", year: "۲۰۲۵" },
  { title: "CCNA", issuer: "Certification / Course Placeholder", year: "۲۰۲۵" }
];

export const projects = [
  {
    title: "سیستم مدیریت و مانیتورینگ شبکه",
    description: "یک سیستم نمونه برای مدیریت تجهیزات و مشاهده وضعیت سرویس‌های شبکه.",
    technologies: ["Python", "Django", "Cisco", "Monitoring"],
    link: "#"
  },
  {
    title: "وب‌سایت رزومه شخصی",
    description: "وب‌سایت شخصی مدرن، سریع و ریسپانسیو برای معرفی سوابق و مهارت‌ها.",
    technologies: ["React", "Vite", "CSS"],
    link: "#"
  },
  {
    title: "سیستم مدیریت منوی دیجیتال رستوران",
    description: "پلتفرمی برای مدیریت و نمایش منوی دیجیتال رستوران و کافه.",
    technologies: ["React", "Django", "REST API"],
    link: "#"
  },
  {
    title: "پلتفرم فریلنسری",
    description: "نمونه‌ای از پلتفرم ثبت پروژه، پیشنهاد فریلنسر و مدیریت سفارش.",
    technologies: ["React", "Django", "FastAPI"],
    link: "#"
  },
  {
    title: "سیستم مانیتورینگ سرورها با Zabbix",
    description: "نمونه آزمایشگاهی برای پایش منابع و وضعیت سرورها.",
    technologies: ["Zabbix", "Linux", "Networking"],
    link: "#"
  },
  {
    title: "برنامه مانیتورینگ پورت های سیستم",
    description: "برنامه ای که کمک میکنه برای شناسایی پورت های باز سیستم و اینکه هر پورت اختصاص داده شده برای چه کاری هست.",
    technologies: ["python", "Networking"],
    link: "#"
  },
  {
    title: "وبسایت تعیین زمانبندی قطعی برق ",
    description: "وبسایت هوشمندی که برنامه قطعی برق روزانه رو نمایش میده و میتوان طوری تنظیم کرد که زمان قطعی برق و وصل شدن رو هشدار بده.",
    technologies: ["Django", "React"],
    link: "#"
  }
];

export const experience = [
  {
    role: "کارآموز واحد دیسپاچینگ",
    company: "برق منطقه‌ای",
    period: "کارآموزی",
    description: "کارآموز واحد دیسپاچینگ برق منطقه ای در قسمت مدیریت سرور و scada"
  }
];

export const categories = ["همه", "شبکه", "برنامه‌نویسی", "مهندسی کامپیوتر"];

export const articles = [

];