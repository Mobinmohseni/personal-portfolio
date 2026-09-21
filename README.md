# Mobin Mohseni — Personal Portfolio

وب‌سایت شخصی مدرن و ریسپانسیو برای مبین محسنی، ساخته‌شده با React + Vite.

## اجرا

نیازمندی:
- Node.js 18 یا بالاتر
- npm

در پوشه پروژه:

```bash
npm install
npm run dev
```

سپس آدرس نمایش‌داده‌شده توسط Vite را در مرورگر باز کنید؛ معمولاً:

```text
http://localhost:5173
```

برای ساخت نسخه production:

```bash
npm run build
npm run preview
```

## ویرایش اطلاعات

فایل اصلی اطلاعات:

`src/data/portfolioData.js`

از همین فایل می‌توانید موارد زیر را تغییر دهید:
- نام و معرفی
- ایمیل
- GitHub
- LinkedIn
- تحصیلات
- مهارت‌ها
- مدارک
- پروژه‌ها
- تجربه
- مقالات و دسته‌بندی‌ها

## عکس پروفایل

فایل:

`src/assets/profile-placeholder.svg`

را با عکس واقعی خودتان جایگزین کنید و در `portfolioData.js` مقدار `profileImage` را به مسیر عکس جدید تغییر دهید.

## لینک‌ها

در `portfolioData.js`:

```js
github: "https://github.com/your-username",
linkedin: "https://www.linkedin.com/in/your-username/"
```

را با لینک واقعی خودتان جایگزین کنید.

ایمیل با `mailto:` تنظیم شده و با کلیک روی Email، برنامه ایمیل پیش‌فرض دستگاه باز می‌شود.

## نکته فرم تماس

فرم فعلی بدون Backend و با `mailto:` کار می‌کند؛ بنابراین ارسال واقعی توسط سرویس ایمیل دستگاه/مرورگر انجام می‌شود. برای فرم حرفه‌ای بدون باز شدن برنامه ایمیل، می‌توانید در آینده Formspree، EmailJS یا Backend خودتان را متصل کنید.

## ساختار

- `src/components` — محل مناسب برای کامپوننت‌های آینده
- `src/data` — تمام محتوای قابل ویرایش
- `src/pages` — صفحات مستقل مانند مقاله
- `src/assets` — تصاویر و فایل‌های رسانه‌ای
- `src/styles.css` — طراحی و Responsive
