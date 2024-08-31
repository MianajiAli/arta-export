// app/contact/page.js
"use client";
import React from 'react';
import ContactForm from '@/components/ContactForm'; // مسیر کامپوننت ContactForm

export default function ContactPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 rtl">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="lg:flex lg:gap-8">
          {/* اطلاعات تماس */}
          <div className="lg:w-1/3 p-6 bg-blue-500 text-white rtl lg:ml-auto">
            <h2 className="text-2xl font-bold mb-4 text-right">تماس با ما</h2>
            <p className="mb-4 text-right">برای تماس با تیم ما، از طریق اطلاعات زیر اقدام کنید:</p>
            <div className="mb-4 text-right">
              <h3 className="text-lg font-semibold">آدرس</h3>
              <p>خیابان نمونه، ساختمان نمونه، شهر نمونه، کشور نمونه</p>
            </div>
            <div className="mb-4 text-right">
              <h3 className="text-lg font-semibold">تلفن</h3>
              <p>(+123) 456-7890</p>
            </div>
            <div className="mb-4 text-right">
              <h3 className="text-lg font-semibold">ایمیل</h3>
              <p>info@example.com</p>
            </div>
            <div className="mb-4 text-right">
              <h3 className="text-lg font-semibold">ساعت کار</h3>
              <p>شنبه تا چهارشنبه: 9:00 AM - 6:00 PM</p>
              <p>پنج‌شنبه: 9:00 AM - 3:00 PM</p>
              <p>جمعه: تعطیل</p>
            </div>
          </div>

          {/* فرم تماس */}
          <div className="lg:w-2/3 p-6 rtl">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
