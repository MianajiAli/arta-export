"use client"

import { useState, useEffect } from "react";

export default function NotificationBar() {
    const [textIndex, setTextIndex] = useState(0);
    const texts = [
        "صادرات کالا به کشورهای همسایه",
        "آرتا اکسپورت"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000); // تغییر متن هر 3 ثانیه

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-primary text-white text-center py-2 text-xs sm:text-sm md:text-base lg:text-lg w-full">
            <div className="flex justify-center items-center w-full">
                <span>{texts[textIndex]}</span>
            </div>
        </div>
    );
}
