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
        <div className="w-10/12 mx-auto justify-center items-center flex flex-col gap-5 text-text1 text-center">
            <div className="w-full border-t border-gray-700 mb-8"></div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl" >اگر شما هم میخواهید محصولات خود را به کشور های خارجی صادر کنید</h2>
            <p dir='rtl'>برای دریافت اطلاعات بیشتر و مشاوره، شماره موبایل خود را وارد کنید.</p>
            <div>
                <label for="hs-trailing-button-add-on" class="sr-only">Label</label>
                <div class="flex w-72 rounded-lg ">
                    <input type="text"
                        value={phoneNumber}
                        placeholder="0912 123 1212"
                        onChange={handleInputChange} class="rounded-lg shadow-md  py-2 px-7 text-2xl block w-full border-gray-200  rounded-s-lg  " />
                    <button type="button" class=" shadow-md rounded-lg ml-3 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-xl font-semibold rounded-e-md border border-transparent bg-white text-text1 hover:bg-text1/10">
                        ثبت
                    </button>
                </div>
            </div>

        </div>
    );
}
