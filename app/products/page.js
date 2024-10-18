"use client"
import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import Modal from '@/components/Modal';
import { fetchProducts } from '@/lib/api';
import FixedBackgroundComponent from '@/components/FixedBg';

export default function Page() {
    const [categories, setCategories] = useState([]);

    const [error, setError] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts();
                setCategories(data.categories); // Adjust based on the actual data structure
            } catch (error) {
                setError(error);
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


    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <FixedBackgroundComponent></FixedBackgroundComponent>

            <div className="flex flex-col-reverse md:flex-row">

                <div className="w-full mx-auto md:mx-0">
                    {categories.length === 0 ? (
                        <div>No categories available</div>
                    ) : (
                        categories.map((category) => (
                            <div key={category.id} className="mb-10">
                                <h2 className="w-full p-5 text-center text-text1">{category.name}</h2>
                                {category.subcategories && category.subcategories.length > 0 ? (
                                    category.subcategories.map((subcategory) => (
                                        <div key={subcategory.id} className="mb-6">
                                            <h3 className="text-right px-[10%] w-full p-5 text-text1">{subcategory.name}</h3>
                                            <div className="mx-auto w-10/12">
                                                {subcategory.products.length === 0 ? (
                                                    <div>No products available</div>
                                                ) : (
                                                    <div className="relative">
                                                        {/* Carousel Wrapper */}
                                                        <div className="flex flex-row-reverse overflow-x-scroll space-x-5 py-4 px-2 ">
                                                            {subcategory.products.map((product) => (
                                                                <div
                                                                    key={product.id}
                                                                    className="snap-end flex-shrink-0 w-72 md:w-64 h-full"
                                                                >
                                                                    <ProductCard product={product} onClick={handleCardClick} />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                        </div>
                                    ))
                                ) : (
                                    <div></div>
                                )}
                            </div>
                        ))
                    )}
                    <Modal
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        product={selectedProduct}
                    />
                </div>

            </div>
        </>
    );
}