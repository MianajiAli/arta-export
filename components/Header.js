"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
    { label: "Home", url: "/" },
    { label: "Shop", url: "/shop" },
    {
        label: "Products",
        children: [
            { label: "Knife", url: "/products/knife" },
            { label: "Fork", url: "/products/fork" },
        ]
    }
];

export default function Page() {
    const [open, setOpen] = useState(null);
    const pathname = usePathname();

    // Helper function to check if a link is active
    const isActive = (url) => pathname === url ? 'bg-blue-500 text-white' : 'text-black';

    // Helper function to check if any child link is active
    const isParentActive = (children) => {
        return children.some(child => pathname === child.url) ? 'bg-blue-500 text-white' : 'text-black';
    };

    const renderLinks = () => {
        return links.map((link, index) => (
            <div
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className="relative mr-4"
            >
                {link.children ? (
                    <>
                        <span
                            className={`cursor-pointer ${isParentActive(link.children)}`}
                        >
                            {link.label}
                        </span>
                        {open === index && (
                            <div className="absolute top-full left-0 bg-white shadow-lg">
                                {link.children.map((child, childIndex) => (
                                    <Link key={childIndex} href={child.url} className={`block px-4 py-2 ${isActive(child.url)} hover:bg-blue-600`}>
                                        {child.label}

                                    </Link>
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    <Link href={link.url} className={`text-black ${isActive(link.url)}`}>
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
            <div className="font-bold w-full h-12 bg-primary text-black text-center flex justify-center items-center">
                صادرات کالا به کشور های همسایه
            </div>
            <nav className="w-full h-20 flex justify-center items-center sticky">
                {renderLinks()}
            </nav>
        </header>
    );
}
