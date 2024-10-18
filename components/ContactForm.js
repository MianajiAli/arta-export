// components/ContactForm.js
"use client";
import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(null);
    setSubmitError(null);

    try {
      // شبیه‌سازی درخواست API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitSuccess('پیام شما با موفقیت ارسال شد.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitError('خطا در ارسال پیام. لطفا دوباره تلاش کنید.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-3xl transform transition-transform hover:scale-105 hover:shadow-2xl">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">تماس با ما</h2>
      {submitSuccess && <div className="mb-4 p-3 bg-green-500 text-white rounded-lg shadow-sm">{submitSuccess}</div>}
      {submitError && <div className="mb-4 p-3 bg-primary text-white rounded-lg shadow-sm">{submitError}</div>}
      <div className="mb-6">
        <label htmlFor="name" className="block text-lg font-medium text-gray-700">نام</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-2 w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-transparent text-gray-800 bg-gray-50 transition-colors duration-300"
          placeholder="نام شما"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-lg font-medium text-gray-700">ایمیل</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-2 w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-transparent text-gray-800 bg-gray-50 transition-colors duration-300"
          placeholder="ایمیل شما"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-lg font-medium text-gray-700">پیام</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="mt-2 w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-transparent text-gray-800 bg-gray-50 transition-colors duration-300"
          placeholder="پیام شما"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full max-w-xs py-3 px-8 bg-gradient-to-r from-primary to-primary text-white font-bold rounded-lg shadow-lg hover:from-purple-600 hover:to-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-transform transform hover:scale-105 duration-300"
        >
          {isSubmitting ? 'در حال ارسال...' : 'ارسال پیام'}
        </button>
      </div>
    </form>
  );
}
