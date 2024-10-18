"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Modal = ({ isOpen, onClose, product }) => {
    const modalRef = useRef();
    const [selected, setSelected] = useState(0);
    const [imageErrors, setImageErrors] = useState([]);
    const [animationState, setAnimationState] = useState("scale-0 opacity-0"); // Initial animation state

    // Fallback image URL
    const defaultImage = "/images/default.png";

    useEffect(() => {
        if (isOpen) {
            setSelected(0);
            document.addEventListener('mousedown', handleClickOutside);
            // Reset the error state when the modal opens
            setImageErrors(Array(product?.images.length).fill(false));
            // Set animation state for opening
            setAnimationState("scale-100 opacity-100");
        } else {
            setAnimationState("scale-0 opacity-0"); // Set animation for closing
            setTimeout(() => {
                document.removeEventListener('mousedown', handleClickOutside);
            }, 300); // Delay to allow the animation to finish before removing listener
        }

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, product?.images.length]);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    const handleImageError = (index) => {
        const newImageErrors = [...imageErrors];
        newImageErrors[index] = true;
        setImageErrors(newImageErrors);
    };

    if (!isOpen || !product) return null;

    return (
        <div dir="rtl" className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div
                ref={modalRef}
                className={`bg-white text-text1 p-4 rounded-lg max-w-lg w-full relative transform transition-transform duration-300 ${animationState}`}
                role="dialog"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-3xl font-bold p-1" // Increased font size to text-3xl and added padding
                    aria-label="Close modal"
                >
                    ×
                </button>

                <div className="w-full flex gap-5">
                    <div>
                        <h2 id="modal-title" className="text-2xl mt-10 mb-2 font-bold">{product.name}</h2>
                        <p>{product.description}</p>
                    </div>
                    <div className="w-52 h-auto aspect-square relative bg-gray-100 flex justify-center items-center mt-2">
                        <Image
                            src={imageErrors[selected] ? defaultImage : product.images[selected]}
                            alt={product.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                            onError={() => handleImageError(selected)}
                            priority={true}
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex gap-2 mt-2">
                        {product.images.map((img, idx) => (
                            <div key={idx} className="relative w-20 h-20">
                                <Image
                                    src={imageErrors[idx] ? defaultImage : img}
                                    alt={`Additional ${idx}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className={`cursor-pointer ${selected === idx ? 'border-2 border-blue-500' : ''}`}
                                    onClick={() => setSelected(idx)}
                                    onError={() => handleImageError(idx)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
