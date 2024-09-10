"use client";

import { HiX } from "react-icons/hi";

export default function HeaderModal({ isOpen, onClose, children }) {
    return (
        <>
            {isOpen && (
                <div dir='rtl' className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg w-10/12 max-w-lg">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h2 className="text-xl text-text1 font-bold">منو</h2>
                            <button onClick={onClose} className="text-text1 text-2xl">
                                <HiX />
                            </button>
                        </div>
                        <div className="p-4">
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
