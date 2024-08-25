"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const ProductCard = ({ product, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="w-60 h-80 border-[2px] bg-white border-text2 text-text2 rounded-xl cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onClick(product)}
        >
            <div className="w-full aspect-square p-3">
                <Image
                    src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
                    alt={product.name}
                    width={240} // Replace with your image width
                    height={240} // Replace with your image height
                    className="w-full h-full rounded-lg object-cover"
                    priority={true} // Add this line if the image is above the fold
                />
            </div>
            <div className="px-3 pb-3 text-text1" dir="rtl">
                <span className="text-xl font-bold">{product.name}</span>
                <p className="text-sm mt-1">{product.description}</p>
            </div>
        </div>
    );
};

export default ProductCard;
