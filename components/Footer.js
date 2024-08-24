import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-back text-gray-300 py-8" dir="rtl">
            {/* خط جداکننده */}
            <div className="w-full border-t border-gray-700 mb-8"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 text-center md:text-right">
                <div className="flex flex-col space-y-4">
                    <h1 className="text-xl font-semibold text-gray-700">آرتا اکسپورت</h1>
                    <p className="text-sm text-gray-500">
                        ارائه‌دهنده خدمات حمل و نقل و لجستیک با کیفیت بالا و سریع به سراسر جهان.
                    </p>
                </div>
                <div className="flex flex-col space-y-4">
                    <h1 className="text-lg font-semibold text-gray-700">دسترسی سریع</h1>
                    <ul className="space-y-2">
                        <li><a href="#home" className="hover:text-gray-300 text-gray-500">خانه</a></li>
                        <li><a href="#services" className="hover:text-gray-300 text-gray-500">خدمات</a></li>
                        <li><a href="#about" className="hover:text-gray-300 text-gray-500">درباره ما</a></li>
                        <li><a href="#contact" className="hover:text-gray-300 text-gray-500">تماس با ما</a></li>
                    </ul>
                </div>
                <div className="flex flex-col space-y-4">
                    <h1 className="text-lg font-semibold text-gray-700">خدمات مشتریان</h1>
                    <ul className="space-y-2">
                        <li><a href="#faq" className="hover:text-gray-300 text-gray-500">سوالات متداول</a></li>
                        <li><a href="#shipping" className="hover:text-gray-300 text-gray-500">روش‌های ارسال</a></li>
                        <li><a href="#return" className="hover:text-gray-300 text-gray-500">بازگشت کالا</a></li>
                        <li><a href="#support" className="hover:text-gray-300 text-gray-500">پشتیبانی</a></li>
                    </ul>
                </div>
                <div className="flex flex-col space-y-4">
                    <h1 className="text-lg font-semibold text-gray-700">ما را دنبال کنید</h1>
                    <div className="flex justify-center md:justify-start space-x-4 space-x-reverse">
                        <a href="https://www.facebook.com" className="text-gray-500 hover:text-gray-300">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://www.twitter.com" className="text-gray-500 hover:text-gray-300">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://www.linkedin.com" className="text-gray-500 hover:text-gray-300">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://www.instagram.com" className="text-gray-500 hover:text-white">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                        با ما در شبکه‌های اجتماعی همراه باشید و از جدیدترین اخبار و خدمات باخبر شوید.
                    </p>
                </div>
            </div>
            <div className="bg-primary text-text1 py-4 text-center mt-8">
                <p>&copy; 2024 T-Express. کلیه حقوق محفوظ است.</p>
            </div>
        </footer>
    );
};

export default Footer;
