"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
    { label: "خانه", url: "/" },
    {
        label: "محصولات",
        url: "/products"
    },
    { label: "درباره ما", url: "/about-us" },
];

export default function Page() {
    const [open, setOpen] = useState(null);
    const pathname = usePathname();

    // Helper function to check if a link is active
    const isActive = (url) => pathname === url ? 'bg-primary font-bold ' : 'text-black';

    // Helper function to check if any child link is active
    const isParentActive = (children) => {
        return children.some(child => pathname === child.url) ? 'bg-primary font-bold ' : 'text-black';
    };

    const renderLinks = () => {
        return links.map((link, index) => (
            <div
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className="relative"
            >
                {link.children ? (
                    <>
                        <span
                            className={`cursor-pointer ${isParentActive(link.children)}`}
                        >
                            {link.label}
                        </span>
                        {open === index && (
                            <div className="absolute  right-0 pt-3 rounded-xl bg-white shadow-lg">
                                {link.children.map((child, childIndex) => (
                                    <Link key={childIndex} href={child.url} className={`block rounded-lg min-w-24 py-2 px-2 ${isActive(child.url)} hover:bg-primary hover:text-white`}>
                                        {child.label}

                                    </Link>
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    <Link href={link.url} className={`text-text1  ${isActive(link.url)}`}>
                        {link.label}
                    </Link>
                )}
            </div>
        ));
    };

    const handleMouseEnter = (index) => {
        setOpen(index);
    };

    const handleMouseLeave = () => {
        setOpen(null);
    };

    return (
        <header className="w-full bg-back2 z-10">
            <div className="font-bold w-full h-12 bg-primary text-text1 text-center flex justify-center items-center">
                صادرات کالا به کشور های همسایه
            </div>
            <nav className="w-full h-20 flex justify-between px-[10%] items-center" dir="rtl">
                <div className="flex justify-center items-center gap-10">
                    <span className=" text-2xl md:text-4xl font-bold text-text1">آرتا اکسپورت</span>
                    {renderLinks()}</div>
                <div></div>
            </nav>

        </header>
    );
}
