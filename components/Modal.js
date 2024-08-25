"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Modal = ({ isOpen, onClose, product }) => {
    const modalRef = useRef();
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        // Reset the selected image index to 0 whenever the modal is opened
        if (isOpen) {
            setSelected(0);
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    if (!isOpen || !product) return null;

    return (
        <div dir="rtl" className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div
                ref={modalRef}
                className="bg-white text-text1 p-4 rounded-lg max-w-lg w-full relative"
                role="dialog"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <div className="w-full flex gap-5">
                    <div>
                        <h2 id="modal-title" className="text-2xl mt-10 mb-2 font-bold">{product.name}</h2>
                        <p>{product.description}</p>
                    </div>
                    <div className="w-52 h-auto aspect-square relative bg-gray-100 flex justify-center items-center mt-2">
                        <Image
                            src={product.images[selected]}
                            alt={product.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                            priority={true} // Optional: Use if image needs to be loaded immediately
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex gap-2 mt-2">
                        {product.images.map((img, idx) => (
                            <div key={idx} className="relative w-20 h-20">
                                <Image
                                    src={img}
                                    alt={`Additional ${idx}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className={`cursor-pointer ${selected === idx ? 'border-2 border-blue-500' : ''}`}
                                    onClick={() => setSelected(idx)}
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
