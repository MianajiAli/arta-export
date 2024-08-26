"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const ProductCard = ({ product, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="w-60 h-80  text-text2 rounded-xl cursor-pointer shadow-lg p-3 " // پس‌زمینه کارت خاکستری
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onClick(product)}
        >
            <div className="w-full aspect-square p-3 bg-white  rounded-lg relative shadow-sm"> {/* حاشیه کلفت‌تر خاکستری */}
                <Image
                    src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
                    alt={product.name}
                    layout='fill'
                    className="w-full h-full rounded-lg object-cover"
                    priority={true}
                />
            </div>
            <div className=" text-text1 py-3" dir="rtl">
                <span className="text-xl font-bold">{product.name}</span>
                <p className="text-sm mt-1 text-text2">{product.description}</p>
            </div>
        </div>
    );
};

export default ProductCard;
