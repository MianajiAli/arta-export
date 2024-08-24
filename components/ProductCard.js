import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="w-60 h-80 bg-back2 rounded-xl ">
            <div className="w-full aspect-square   p-3">

                <img src={product.image} alt={product.name} className="w-full h-full rounded-lg" />
            </div>
            <div className="px-3 pb-3 text-text1">

                <span className="text-xl">{product.name}</span>
                <p className="product-price">${product.price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default ProductCard;
