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
        <div className=" px-[10%]" dir="rtl">
            <div className=" w-full flex justify-between items-center">
                <h2 className="text-text1 "> برخی از محصولات صادراتی</h2>
                <Link href="/products" >
                    <p className="text-text2">دیدن همه</p>
                </Link>
            </div>
            <p className="py-5 text-text2">    صادرات محصولات ایرانی از جمله صنایع دستی، لوازم آشپزخانه، آرایشی و بهداشتی، صنایع غذایی، تجهیزات و لوازم برق و الکتونیک و دیگر صنایعی که قابلیت صادرات دارند.
                نمایشگاه‌های بین‌المللی و نمایشگاه‌های محلی جهت توسعه بازار و ترویج محصولات ایرانی.
                مشاوره در زمینه بازاریابی، برندسازی و استراتژی‌های صادراتی.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mx-auto  my-7">
                {randomProducts.map((product) => (
                    <Link key={product.id} href="/products" className="mx-auto" >
                        <ProductCard product={product} onClick={() => { }} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RandomProductGrid;
