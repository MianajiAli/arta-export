// app/contact/page.js
"use client";
import React from 'react';
import ContactForm from '@/components/ContactForm'; // مسیر کامپوننت ContactForm

export default function ContactPage() {
  return (
    <div className="bg-gray-200 min-h-screen py-12 px-4 rtl">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-3xl overflow-hidden">
        <div className="lg:flex lg:gap-8">
          {/* اطلاعات تماس */}
          <div className="lg:w-1/3 p-8 bg-gradient-to-r from-primary to-primary text-white lg:rounded-bl-none rounded-b-3xl lg:rounded-tr-3xl">
            <h2 className="text-3xl font-extrabold mb-6 text-right">تماس با ما</h2>
            <p className="mb-6 text-right">برای تماس با تیم ما، لطفاً از طریق اطلاعات زیر اقدام کنید:</p>
            <div className="mb-6 text-right">
              <h3 className="text-lg font-semibold border-b-2 border-white pb-1">آدرس</h3>
              <p>خیابان نمونه، ساختمان نمونه، شهر نمونه، کشور نمونه</p>
            </div>
            <div className="mb-6 text-right">
              <h3 className="text-lg font-semibold border-b-2 border-white pb-1">تلفن</h3>
              <p>(+123) 456-7890</p>
            </div>
            <div className="mb-6 text-right">
              <h3 className="text-lg font-semibold border-b-2 border-white pb-1">ایمیل</h3>
              <p>info@example.com</p>
            </div>
            <div className="text-right">
              <h3 className="text-lg font-semibold border-b-2 border-white pb-1">ساعت کار</h3>
              <p>شنبه تا چهارشنبه: 9:00 AM - 6:00 PM</p>
              <p>پنج‌شنبه: 9:00 AM - 3:00 PM</p>
              <p>جمعه: تعطیل</p>
            </div>
          </div>

          {/* فرم تماس */}
          <div className="lg:w-2/3 p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
