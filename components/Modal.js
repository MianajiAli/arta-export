// components/Modal.js
import React, { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, product }) => {
    const modalRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isOpen, onClose]);

    if (!isOpen || !product) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div
                ref={modalRef}
                className="bg-white p-4 rounded-lg max-w-lg w-full relative"
                role="dialog"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <button
                    className="absolute top-2 right-2 text-xl"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    &times;
                </button>
                <h2 id="modal-title" className="text-xl font-bold">{product.name}</h2>
                <img src={product.mainImage} alt={product.name} className="w-full h-auto mt-2" />
                <div className="mt-4" id="modal-description">
                    <p>{product.description}</p>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">Additional Images:</h3>
                        <div className="flex gap-2 mt-2">
                            {product.images.map((img, idx) => (
                                <img key={idx} src={img} alt={`Additional ${idx}`} className="w-20 h-20 object-cover" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
