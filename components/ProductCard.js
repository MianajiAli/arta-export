"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const ProductCard = ({ product, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageError, setImageError] = useState(false);

    // Fallback image URL
    const defaultImage = "/images/default.png";

    return (
        <div
            className="w-full md:w-60 min-h-80 text-text2 rounded-xl cursor-pointer shadow-lg p-3 border border-text1/10 mx-auto "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onClick(product)}
        >
            <div className="w-full opacity-90 aspect-square p-3 bg-white rounded-lg relative shadow-sm">
                <Image
                    // Check if product images exist, if not use the default image
                    src={imageError ? defaultImage : (isHovered && product.images?.[1]) || product.images?.[0] || defaultImage}
                    alt={`Image of ${product.name}`}
                    layout='fill'
                    className="w-full h-full rounded-lg object-cover flex justify-center items-center"
                    priority={true}

                    // Add onError handler to fallback to the default image
                    onError={() => setImageError(true)}
                />
            </div>
            <div className="text-text1/90 py-3" dir="rtl">
                <span className="text-xl font-bold">{product.name}</span>
                <p className="text-sm mt-1 text-text2">{product.description}</p>
            </div>
        </div>
    );
};

export default ProductCard;
