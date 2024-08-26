import React from 'react';
import { FaBox, FaSearch, FaFileAlt, FaTag, FaTruck, FaShippingFast, FaDollarSign, FaHandsHelping } from 'react-icons/fa';

const ExportProcess = () => {
    const steps = [
        {
            title: 'انتخاب کالا',
            description: 'تحقیق بازار، ارزیابی رقابت و انتخاب کالای مناسب برای صادرات.',
            icon: <FaBox />,
        },
        {
            title: 'یافتن بازار هدف',
            description: 'تحلیل بازارهای خارجی و ارتباط با مشتریان بالقوه.',
            icon: <FaSearch />,
        },
        {
            title: 'آماده‌سازی مدارک و مستندات',
            description: 'تهیه پروفرما اینویس، تنظیم قرارداد فروش و اخذ مجوزهای لازم.',
            icon: <FaFileAlt />,
        },
        {
            title: 'بسته‌بندی و برچسب‌گذاری',
            description: 'بسته‌بندی مناسب کالا و درج اطلاعات مورد نیاز روی بسته‌بندی.',
            icon: <FaTag />,
        },
        {
            title: 'انجام تشریفات گمرکی',
            description: 'تکمیل اظهارنامه گمرکی، بازرسی کالا و پرداخت عوارض.',
            icon: <FaTruck />,
        },
        {
            title: 'انتخاب روش حمل‌ونقل',
            description: 'انتخاب روش حمل‌ونقل مناسب و بیمه کالا.',
            icon: <FaShippingFast />,
        },
        {
            title: 'دریافت و انتقال وجوه',
            description: 'توافق بر روش پرداخت و دریافت وجوه پس از ارسال کالا.',
            icon: <FaDollarSign />,
        },
        {
            title: 'پیگیری و خدمات پس از فروش',
            description: 'پیگیری تحویل کالا و ارائه خدمات پس از فروش در صورت نیاز.',
            icon: <FaHandsHelping />,
        },
    ];

    return (
        <div dir="rtl" className="text-text2 px-[10%] w-full">
            <h2 className="mb-10 text-text1">مراحل صادرات کالا</h2>
            <ul className="flex flex-wrap justify-center gap-5">
                {steps.map((step, index) => (
                    <li key={index} className="w-68  p-4 border rounded-lg shadow-md">
                        <div className="flex items-center mb-2">
                            <span className="text-3xl ml-2">{step.icon}</span>
                            <span className="text-2xl text-primary">{index + 1}.</span>
                            <h3 className="text-text1 text-lg font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-text2 w-64">{step.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExportProcess;
