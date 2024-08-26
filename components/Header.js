"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa"; 
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // آیکون‌های منوی همبرگری

const links = [
    { label: "خانه", url: "/" },
    { label: "محصولات", url: "/products" },
    { label: "مقالات", url: "/articles" }, 
    { label: "درباره ما", url: "/about-us" },
    { label: "تماس با ما", url: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const isActive = (url) => (pathname === url ? 'text-primary font-bold' : 'text-gray-800');

    const renderLinks = () => {
        return links.map((link, index) => (
            <Link key={index} href={link.url}>
                <span className={`block px-4 py-2 ${isActive(link.url)} hover:text-primary cursor-pointer`}>
                    {link.label}
                </span>
            </Link>
        ));
    };

    return (
        <header className="w-full bg-gray-100 shadow-md z-10">
            {/* نوار اطلاع‌رسانی بالا */}
            <div className="bg-primary text-white text-center py-2 text-xs sm:text-sm md:text-base lg:text-lg">
                صادرات کالا به کشورهای همسایه
            </div>

            {/* نوار ناوبری اصلی */}
            <nav className="container mx-auto px-3  lg:px-10 h-16 md:h-20 flex justify-between items-center" dir="rtl">
                {/* برندینگ و منوی همبرگری */}
                <div className="flex items-center justify-between w-full md:w-auto">
                    {/* نام شرکت */}
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary">آرتا اکسپورت</span>
                    {/* دکمه منوی همبرگری برای موبایل و تبلت */}
                    <div className="lg:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-gray-800">
                            {menuOpen ? <HiX /> : <HiMenu />} {/* نمایش منوی همبرگری یا ایکس */}
                        </button>
                    </div>
                </div>

                {/* منوی لینک‌ها و دکمه خرید */}
                <div className={`mt-4 md:mt-0 flex-col md:flex-row flex items-center gap-5 ${menuOpen ? 'block' : 'hidden'} w-full md:w-auto md:flex md:items-center`}>
                    {renderLinks()}
                    <Link href="/buy" className="bg-green-500 text-white  rounded-lg flex items-center hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl">
                        <FaShoppingCart className="ml-2" />
                        خرید محصول
                    </Link>
                </div>
            </nav>
        </header>
    );
}
