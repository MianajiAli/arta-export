// components/Navbar.js

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import HeaderModal from "./HeaderModal"; // Import the HeaderModal component

const links = [
    { label: "خانه", url: "/" },
    { label: "محصولات", url: "/products" },
    { label: "مقالات", url: "/blog" },
    { label: "تماس با ما", url: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    const texts = [
        "صادرات کالا به کشورهای همسایه",
        "همکار ما باش"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000); // تغییر متن هر 3 ثانیه

        return () => clearInterval(interval);
    }, []);

    const isActive = (url) => (pathname === url ? 'underline !text-text1' : '');

    return (
        <header className="bg-gray-100 shadow-md fixed w-full z-20">
            {/* NotificationBar directly integrated */}
            <div className="bg-primary text-white text-center py-2 text-xs sm:text-sm md:text-base lg:text-lg w-full">
                <div className="flex justify-center items-center w-full">
                    {texts[textIndex] === "همکار ما باش" && (
                        <Link href="/contact">
                            <button className="mr-4 bg-secondary text-white px-2 py-0 rounded-lg text-xs sm:text-sm md:text-base">
                                کلیک کن
                            </button>
                        </Link>
                    )}
                    <span>{texts[textIndex]}</span>
                </div>
            </div>
            <nav className="w-10/12 mx-auto flex justify-between items-center p-4" dir="rtl">
                <span className="text-4xl font-bold text-primary">آرتا اکسپورت</span>

                {/* دکمه منوی همبرگری */}
                <button onClick={() => setMenuOpen(true)} className="text-2xl text-text1 lg:hidden">
                    <HiMenu />
                </button>

                {/* منوی لینک‌ها برای دسکتاپ */}
                <div className={`hidden lg:flex items-center`}>
                    {links.map((link, index) => (
                        <Link key={index} href={link.url}>
                            <span className={`block p-2 ${isActive(link.url)} text-text2 hover:text-text1`}>
                                {link.label}
                            </span>
                        </Link>
                    ))}
                </div>

                <Link href="/buy" className="hidden lg:flex items-center bg-green-200 text-green-600 p-2 rounded-lg">
                    <FaShoppingCart className="ml-2" />
                    صادرات کالا
                </Link>
            </nav>

            {/* HeaderModal component for mobile menu */}
            <HeaderModal isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
                {links.map((link, index) => (
                    <Link key={index} href={link.url}>
                        <span className={`block p-2 ${isActive(link.url)} text-text2 hover:text-text1`}>
                            {link.label}
                        </span>
                    </Link>
                ))}
                <Link href="/buy" className="flex items-center bg-green-200 text-green-600 p-2 rounded-lg mt-4">
                    <FaShoppingCart className="ml-2" />
                    صادرات کالا
                </Link>
            </HeaderModal>
        </header>
    );
}
