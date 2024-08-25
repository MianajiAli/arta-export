"use client"
import React, { useState } from 'react';

export default function Page() {
    const [phoneNumber, setPhoneNumber] = useState('09');

    const handleInputChange = (e) => {
        let value = e.target.value;

        // Ensure the input always starts with '09'
        if (!value.startsWith('09')) {
            value = '09' + value.replace(/^0+/, '').slice(0, 9); // Remove any leading zeros and limit length
        } else {
            value = value.slice(0, 11); // Limit to 11 digits (09XXXXXXXXX)
        }

        setPhoneNumber(value);
    };

    return (
        <div className="w-full justify-center items-center flex flex-col gap-5">
            <p dir='rtl'>برای دریافت اطلاعات بیشتر و مشاوره، شماره موبایل خود را وارد کنید.</p>
            <input
                type="text"
                className="w-8/12 md:w-2/6 py-2 px-5 border-solid border-[1px] border-text1 rounded-lg bg-white text-text1 text-2xl"
                value={phoneNumber}
                onChange={handleInputChange}
            />
            <button>ثبت</button>
        </div>
    );
}
