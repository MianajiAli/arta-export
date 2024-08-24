import React from 'react';
import ProductCard from '@/components/ProductCard';

const sampleProduct = {
    name: 'Sample Product',
    price: 29.99,
    image: 'https://via.placeholder.com/300' // Use a placeholder image URL or a real image URL
};

export default function Page() {
    return (
        <div>
            <h1>Product Showcase</h1>
            <ProductCard product={sampleProduct} />
        </div>
    );
}
