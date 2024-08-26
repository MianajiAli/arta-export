// components/GlobalReach.js
import React from 'react';
import Image from 'next/image';

const GlobalReach = () => {
    const data = [
        { value: '۵۰+', label: 'کشورهای خدمت‌رسانی شده' },
        { value: '۱۰۰+', label: 'مشتریان در سراسر جهان' },
        { value: '۲۰۰هزار+', label: 'تن صادرات سالانه' }
    ];

    return (
        <div className="py-12">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">دسترسی جهانی ما</h2>
                <p className="text-lg text-gray-700 mb-6">
                    آرتا اکسپورت با افتخار به مشتریان در سراسر جهان خدمت می‌کند، بازارها و فرهنگ‌ها را با محصولات با کیفیت بالای خود متصل می‌کند.
                </p>
                <div className="relative h-96">
                    <Image
                        src="/images/world-map.png"
                        alt="دسترسی جهانی"
                        layout="fill"
                        objectFit="contain"
                        className="opacity-70"
                    />
                    <div className={`absolute inset-0 flex flex-col justify-center items-center text-text1`}>
                        {data.map((item, index) => (
                            <div key={index} className="mb-4">
                                <span className="text-4xl font-semibold">{item.value}</span> {/* اندازه بزرگتر */}
                                <p className="text-lg">{item.label}</p> {/* اندازه بزرگتر */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalReach;
