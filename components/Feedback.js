import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa'; // Import an icon for quotes

// Define user data statically with default images
const users = [
    {
        name: "احمد احمدی",
        phoneNumber: "09123456789",
        feedback: "این یک بازخورد نمونه است که برای نمایش بهتر UI و تجربه کاربری استفاده شده است.",
        imageUrl: "https://via.placeholder.com/150" // Default image 1
    },
    {
        name: "فاطمه محمدی",
        phoneNumber: "09234567890",
        feedback: "این بازخورد دیگری از یک کاربر متفاوت است. امیدوارم که از این طراحی لذت ببرید.",
        imageUrl: "https://via.placeholder.com/150" // Default image 2
    },
    {
        name: "علی رضایی",
        phoneNumber: "09345678901",
        feedback: "این بازخورد سوم است که از یک کاربر دیگر دریافت شده. طراحی این بخش زیباست.",
        imageUrl: "https://via.placeholder.com/150" // Default image 3
    }
];

const Feedback = () => {
    return (
        <div className=" from-blue-50 to-blue-100 py-12 px-6">
            <div className="mx-auto p-6 max-w-screen-lg">
                <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">نظرات کاربران</h2>
                <div className="flex flex-col xl:flex-row items-center gap-10">
                    {users.map((user, index) => (
                        <div key={index} dir="rtl" className="w-full xl:w-80 bg-white text-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transform transition-transform hover:scale-105">
                            <div className="flex items-center mb-6">
                                <div className="relative w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                                    {user.imageUrl && (
                                        <img
                                            src={user.imageUrl}
                                            alt={user.name}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 rounded-full"></div>
                                </div>
                                <div className="mr-4">
                                    <p className="text-lg font-bold">{user.name}</p>
                                    <p className="text-sm text-gray-500">{user.phoneNumber}</p>
                                </div>
                            </div>
                            <div className="relative bg-gray-50 rounded-2xl p-6">
                                <FaQuoteLeft className="text-primary text-3xl absolute -top-6 -right-6 text-blue-500 opacity-70" />
                                <p className="text-sm text-gray-700 italic">
                                    {user.feedback}
                                </p>
                                <div className="absolute -bottom-6 left-0 w-full flex justify-center">
                                    <div className="bg-gradient-to-r from-blue-500 to-blue-700 w-24 h-1 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Feedback;
