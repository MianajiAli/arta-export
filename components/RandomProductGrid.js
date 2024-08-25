"use client"
// components/RandomProductGrid.js
import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { fetchProducts } from '@/lib/api';
import Link from 'next/link';

const RandomProductGrid = () => {
    const [randomProducts, setRandomProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const products = await fetchProducts();

                // Select 4 random products
                const shuffledProducts = products.sort(() => 0.5 - Math.random());
                const selectedProducts = shuffledProducts.slice(0, 4);

                setRandomProducts(selectedProducts);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        loadProducts();
    }, []);

    return (
        <div className="w-full px-[10%]" dir="rtl">
            <div className="flex justify-between items-center">
                <h2 className="text-text1 "> برخی از محصولات صادراتی</h2>
                <Link href="/products" >
                    <p className="text-text2">دیدن همه</p>
                </Link>
            </div>
            <div className="w-full flex gap-5 justify-center items-center flex-wrap  my-7">
                {randomProducts.map((product) => (
                    <Link key={product.id} href="/products" >
                        <ProductCard product={product} onClick={() => { }} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RandomProductGrid;
