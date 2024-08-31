import React from 'react';

// Define user data statically
const users = [
    {
        name: "احمد احمدی",
        phoneNumber: "09123456789",
        feedback: "متن بازخورد در اینجا قرار می‌گیرد. این بخش برای نمایش نظرات کاربران است.",
        imageUrl: "https://example.com/user-image1.jpg" // Replace with actual image URLs
    },
    {
        name: "فاطمه محمدی",
        phoneNumber: "09234567890",
        feedback: "بازخورد دوم از کاربر دیگری است. این متن برای مثال است.",
        imageUrl: "https://example.com/user-image2.jpg"
    },
    {
        name: "علی رضایی",
        phoneNumber: "09345678901",
        feedback: "بازخورد سوم از یک کاربر دیگر. لطفاً این متن را مشاهده کنید.",
        imageUrl: "https://example.com/user-image3.jpg"
    }
];

const Feedback = () => {
    return (
        <div className=" mx-auto flex flex-col xl:flex-row items-center gap-4">
            {users.map((user, index) => (
                <div key={index} dir="rtl" className="w-80 bg-back3 text-text1 rounded-xl p-4 shadow-lg">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-full ml-3">
                            {user.imageUrl && (
                                <img
                                    src={user.imageUrl}
                                    alt="User"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            )}
                        </div>
                        <div>
                            <p className="text-lg font-semibold">{user.name}</p>
                            <p className="text-sm text-gray-500">{user.phoneNumber}</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm">
                            {user.feedback}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Feedback;
