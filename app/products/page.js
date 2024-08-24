"use client"
// app/page.js
import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import Modal from '@/components/Modal';
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
        <div>
            <h1>Product Showcase</h1>
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
    );
}
