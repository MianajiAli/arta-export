"use client"
// app/page.js
import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import Modal from '@/components/Modal';
import SideBar from '@/components/SideBar';
import { fetchProducts } from '@/lib/api';

export default function Page() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const productData = await fetchProducts();
                setProducts(productData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <h1 className="w-full p-10 text-center text-text1">محصولات صادراتی آرتا اکسپورت</h1>
            <div className="flex flex-col-reverse md:flex-row  ">

                <div className="w-10/12 mx-auto md:mx-0">
                    <h2 className="w-full p-5 text-center text-text1">ظروف مسی</h2>
                    <div className="mx-auto w-10/12 flex flex-wrap justify-center gap-5 items-start">
                        {products.length === 0 ? (
                            <div>No products available</div>
                        ) : (
                            products.map((product) => (
                                <ProductCard key={product.id} product={product} onClick={handleCardClick} />
                            ))
                        )}
                    </div>
                    <Modal
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        product={selectedProduct}
                    />
                </div>
                <div className="w-10/12 mx-auto md:mx-0 md:w-2/12  my-10 px-20 md:px-5">
                    <SideBar></SideBar>
                </div>
            </div>
        </>
    );
}
