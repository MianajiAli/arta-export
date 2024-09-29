"use client"
import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { fetchProducts } from '@/lib/api';
import Link from 'next/link';

const RandomProductGrid = () => {
    const [randomProducts, setRandomProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts();
                const allProducts = [];

                // Loop through categories and subcategories to gather all products
                data.categories.forEach(category => {
                    category.subcategories?.forEach(subcategory => {
                        subcategory.products?.forEach(product => {
                            allProducts.push(product);
                        });
                    });
                });

                // Shuffle and select 4 random products
                const shuffledProducts = allProducts.sort(() => 0.5 - Math.random());
                const selectedProducts = shuffledProducts.slice(0, 4);

                setRandomProducts(selectedProducts);
                setLoading(false); // Stop loading when products are fetched
            } catch (error) {
                console.error('Failed to fetch products:', error);
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    if (loading) {
        return <p>Loading products...</p>;
    }

    return (
        <div className="px-[10%]" dir="rtl">
            <div className="w-full flex justify-between items-center">
                <h2 className="text-text1">برخی از محصولات صادراتی</h2>
                <Link href="/products">
                    <p className="text-text2">دیدن همه</p>
                </Link>
            </div>
            <p className="py-5 text-text2">
                صادرات محصولات ایرانی از جمله صنایع دستی، لوازم آشپزخانه، آرایشی و بهداشتی، صنایع غذایی، تجهیزات و لوازم برق و الکتونیک و دیگر صنایعی که قابلیت صادرات دارند.
            </p>
            <Link href={`/products/`} >
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mx-auto   ">
                    {randomProducts.map((product) => (
                        <ProductCard key={product.id} product={product} onClick={() => { }} />
                    ))}
                </div>
            </Link>
        </div>
    );
};

export default RandomProductGrid;
