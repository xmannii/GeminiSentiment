# 🎯 تحلیل احساسات متن با هوش مصنوعی

<div dir="rtl">

## 👋 معرفی
این پروژه یک اپلیکیشن تحت وب باحال برای تحلیل احساسات متن‌های فارسی با استفاده از هوش مصنوعی است. کاربران می‌تونن متن خودشون رو وارد کنن و نتایج تحلیل احساسات (مثبت 😊، منفی ☹️ یا خنثی 😐) رو به همراه عبارات کلیدی و توضیحات دریافت کنن.

## ✨ ویژگی‌ها
- 🔍 تحلیل احساسات متن‌های فارسی
- 📊 نمایش میزان اطمینان تحلیل
- 🎯 استخراج عبارات کلیدی از متن
- 💅 رابط کاربری مدرن با کمک ShadcnUi
- 🎮 پشتیبانی از نمونه‌های آماده برای تست سریع

## 🛠️ تکنولوژی‌های استفاده شده
- **Next.js** ⚡: فریم‌ورک React برای توسعه وب
- **Vercel AI SDK** 🤖: برای ارتباط با مدل‌های هوش مصنوعی
- **Google Gemini 2.0 Flash** 🧠: مدل هوش مصنوعی مولد برای تحلیل متن
- **Structured Output** 📝: خروجی ساختاریافته برای پردازش دقیق نتایج
- **Tailwind CSS** 🎨: برای طراحی رابط کاربری
- **TypeScript** 

## 🚀 نحوه راه‌اندازی

### 📋 پیش‌نیازها
- Node.js نسخه 18 یا بالاتر
- یک کلید API از [Google AI Studio](https://aistudio.google.com/)

### 📥 مراحل نصب

1. کلون کردن ریپو:
```bash
git clone https://github.com/xmannii/GeminiSentiment
cd sentiment-analysis-app
```

2. نصب وابستگی‌ها:
```bash
npm install
# یا
yarn install
# یا
pnpm install
```

3. ایجاد فایل `.env.local` و اضافه کردن کلید API:
```
GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
```

4. اجرای پروژه در محیط توسعه:
```bash
npm run dev
# یا
yarn dev
# یا
pnpm dev
```

5. مرورگر را باز کرده و به آدرس `http://localhost:3000` بروید.

## نحوه دریافت کلید API

برای استفاده از این اپلیکیشن، نیاز به یک کلید API از Google AI Studio دارید:

1. به [Google AI Studio](https://aistudio.google.com/) بروید
2. یک حساب کاربری ایجاد کنید یا وارد شوید
3. به بخش API Keys بروید و یک کلید جدید ایجاد کنید
4. کلید را در فایل `.env.local` خود قرار دهید

## نکته مهم درباره فونت‌ها

فونت یکان استفاده شده در این پروژه دارای لایسنس تجاری است و در ریپو گیت قرار داده نشده است. برای استفاده از این پروژه می‌توانید:

1. فونت یکان را از [فونت ایران](https://fontiran.com) خریداری کنید
2. یا از فونت‌های رایگان فارسی دیگر مانند وزیر استفاده کنید



## نحوه کارکرد

1. کاربر متن خود را در کادر ورودی وارد می‌کند (حداکثر ۲۰۰۰ کاراکتر)
2. با کلیک بر روی دکمه "تحلیل احساسات متن"، درخواست به API ارسال می‌شود
3. API با استفاده از Vercel AI SDK و مدل Google Gemini 2.0 Flash، متن را تحلیل می‌کند
4. نتایج به صورت ساختاریافته (JSON) برگردانده می‌شوند
5. نتایج تحلیل شامل احساس کلی، میزان اطمینان، توضیحات و عبارات کلیدی به کاربر نمایش داده می‌شوند

## لایسنس

این پروژه تحت لایسنس MIT منتشر شده است.

</div>
