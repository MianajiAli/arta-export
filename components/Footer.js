import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import './Footer.css'; // Import the CSS file
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full bg-back text-gray-300 pt-8" dir="rtl">
            {/* خط جداکننده */}
            <div className="w-full border-t border-gray-700 mb-8"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 text-center md:text-right text-text2">
                <div className="flex flex-col space-y-4">
                    <h1 className="text-xl font-semibold text-text1">آرتا اکسپورت</h1>
                    <p className="text-sm">
                        ارائه‌دهنده خدمات حمل و نقل و لجستیک با کیفیت بالا و سریع به سراسر جهان.
                    </p>
                </div>
                <div className="flex flex-col space-y-4">
                    <h1 className="text-lg font-semibold text-text1">دسترسی سریع</h1>
                    <ul className="space-y-2">
                        <li><a href="#home" className="footer-link">خانه</a></li>
                        <li><a href="#services" className="footer-link">خدمات</a></li>
                        <li><a href="#about" className="footer-link">درباره ما</a></li>
                        <li><a href="#contact" className="footer-link">تماس با ما</a></li>
                    </ul>
                </div>
                <div className="flex flex-col space-y-4">
                    <h1 className="text-lg font-semibold text-text1">خدمات مشتریان</h1>
                    <ul className="space-y-2">
                        <li><a href="#faq" className="footer-link">سوالات متداول</a></li>
                        <li><a href="#shipping" className="footer-link">روش‌های ارسال</a></li>
                        <li><a href="#return" className="footer-link">بازگشت کالا</a></li>
                        <li><a href="#support" className="footer-link">پشتیبانی</a></li>
                    </ul>
                </div>
                <div className="flex flex-col space-y-4">
                    <h1 className="text-lg font-semibold text-text1">ما را دنبال کنید</h1>
                    <div className="flex justify-center md:justify-start gap-3 text-text2 ">
                        <a href="https://www.facebook.com" className="hover:text-text1">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://www.twitter.com" className="hover:text-text1">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://www.linkedin.com" className="hover:text-text1">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://www.instagram.com" className="hover:text-text1">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                    <p className="text-sm mt-4">
                        با ما در شبکه‌های اجتماعی همراه باشید و از جدیدترین اخبار و خدمات باخبر شوید.
                    </p>
                </div>
            </div>

            <div className="bg-primary text-white py-4 text-center mt-8">
                <p dir='ltr' >&copy; 2024 Arta-export کلیه حقوق محفوظ است.</p>
            </div>
            <div className="bg-text1/90 text-white/70 py-1 text-center ">
                <p >طراحی شده توسط
                    <Link href="https://github.com/aidinkahali"> Aydin Kahali </Link>
                    و
                    <Link href="https://alimianaji.ir"> Ali Mianaji </Link>

                </p>
            </div>
        </footer>
    );
};

export default Footer;
