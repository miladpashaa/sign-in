# 🔐 صفحه ورود (Sign-In) — Next.js

اپلیکیشن Next.js با یک **فرم ورود مدرن** ساخته‌شده با React 19، TypeScript، Tailwind CSS و
کامپوننت‌های shadcn/ui — پروژه آموزشی/قالب برای صفحات احراز هویت.

---

## ✨ امکانات

| بخش | توضیح |
|---|---|
| 🎨 فرم ورود | فرم آماده `sign-in-form.tsx` با فیلد ایمیل/رمز، چک‌باکس «مرا به خاطر بسپار» و دکمه‌های شبکه‌های اجتماعی |
| 🧩 shadcn/ui | کامپوننت‌های استاندارد در `components/ui` (Button, Card, Input, Label, Checkbox) |
| ⚡ Next.js 15 | ساختار App Router + تایپ‌اسکریپت |
| 🎭 صفحه دمو | مسیر `app/demo` برای نمایش فرم |

---

## 🚀 راه‌اندازی

```bash
npm install
npm run dev
```

سپس در مرورگر: [http://localhost:3000](http://localhost:3000)

برای نسخه نهایی:

```bash
npm run build && npm start
```

---

## 📁 ساختار پوشه‌ها

```
app/                 صفحات (layout, page, demo)
components/ui/       کامپوننت‌های shadcn/ui
lib/utils.ts         توابع کمکی (cn)
prd.md               شرح محصول و نیازمندی‌ها
```

---

## 🔗 افزودن احراز هویت واقعی

این پروژه فقط **رابط کاربری** ورود را دارد. برای اتصال به بک‌اند واقعی می‌توانید از
NextAuth/Auth.js، Clerk یا Supabase استفاده کنید — هندلر فرم در
`components/ui/sign-in-form.tsx` آماده اتصال است.

> فایل‌های `.env*` هرگز به گیت منتشر نمی‌شوند (در `.gitignore` هستند) — کلیدهای هر سرویس
> احراز هویت فقط همین‌جا نگه داشته شوند.
