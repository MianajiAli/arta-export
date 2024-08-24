"use client";
import React, { useState } from 'react';

const ProductCard = ({ product, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="w-60 h-80 bg-back2 rounded-xl cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onClick(product)}
        >
            <div className="w-full aspect-square p-3">
                <img
                    src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
                    alt={product.name}
                    className="w-full h-full rounded-lg"
                />
            </div>
            <div className="px-3 pb-3 text-text1">
                <span className="text-xl font-bold">{product.name}</span>
                <p className="text-sm mt-1">{product.description}</p>
            </div>
        </div>
    );
};

export default ProductCard;
