"use client";
import React, { useState } from 'react';
import { FaBox, FaSearch, FaFileAlt, FaTag, FaTruck, FaShippingFast, FaDollarSign, FaHandsHelping } from 'react-icons/fa';

const ExportProcess = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedStep, setSelectedStep] = useState(null);
    const [animationState, setAnimationState] = useState("scale-0 opacity-0"); // برای انیمیشن

    const steps = [
        {
            title: 'انتخاب کالا',
            description: 'تحقیق بازار، ارزیابی رقابت و انتخاب کالای مناسب برای صادرات.',
            icon: <FaBox className="text-primary text-4xl " />,
        },
        {
            title: 'یافتن بازار هدف',
            description: 'تحلیل بازارهای خارجی و ارتباط با مشتریان بالقوه.',
            icon: <FaSearch className="text-primary text-4xl " />,
        },
        {
            title: 'آماده‌سازی مدارک و مستندات',
            description: 'تهیه پروفرما اینویس، تنظیم قرارداد فروش و اخذ مجوزهای لازم.',
            icon: <FaFileAlt className="text-primary text-4xl" />,
        },
        {
            title: 'بسته‌بندی و برچسب‌گذاری',
            description: 'بسته‌بندی مناسب کالا و درج اطلاعات مورد نیاز روی بسته‌بندی.',
            icon: <FaTag className="text-primary text-4xl" />,
        },
        {
            title: 'انجام تشریفات گمرکی',
            description: 'تکمیل اظهارنامه گمرکی، بازرسی کالا و پرداخت عوارض.',
            icon: <FaTruck className="text-primary text-4xl" />,
        },
        {
            title: 'انتخاب روش حمل‌ونقل',
            description: 'انتخاب روش حمل‌ونقل مناسب و بیمه کالا.',
            icon: <FaShippingFast className="text-primary text-4xl" />,
        },
        {
            title: 'دریافت و انتقال وجوه',
            description: 'توافق بر روش پرداخت و دریافت وجوه پس از ارسال کالا.',
            icon: <FaDollarSign className="text-primary text-4xl" />,
        },
        {
            title: 'پیگیری و خدمات پس از فروش',
            description: 'پیگیری تحویل کالا و ارائه خدمات پس از فروش در صورت نیاز.',
            icon: <FaHandsHelping className="text-primary text-4xl" />,
        },
    ];

    const openModal = (step) => {
        setSelectedStep(step);
        setIsOpen(true);
        setTimeout(() => setAnimationState("scale-100 opacity-100"), 50); // فعال کردن انیمیشن ورود
    };

    const closeModal = () => {
        setAnimationState("scale-0 opacity-0"); // فعال کردن انیمیشن خروج
        setTimeout(() => {
            setIsOpen(false);
            setSelectedStep(null);
        }, 300); // بستن modal بعد از اتمام انیمیشن
    };

    return (
        <div dir="rtl" className="text-text2 px-[10%] w-full bg-gradient-to-t from-back via-back to-back/0 z-[6]">
            <h2 className="mb-10 text-text1">مراحل صادرات کالا</h2>
            <ul className="flex flex-wrap justify-center gap-5">
                {steps.map((step, index) => (
                    <li
                        key={index}
                        className="w-68 p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                        onClick={() => openModal(step)}
                    >
                        <div className="flex items-center mb-2">
                            <span className="ml-2">{step.icon}</span>
                            <span className="text-2xl text-primary/70">{index + 1}.</span>
                            <h3 className="text-text1/80 text-lg font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-text2 w-64">{step.description}</p>
                    </li>
                ))}
            </ul>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
                    <div
                        className={`bg-white p-10 rounded-lg shadow-lg max-w-2xl w-full relative transform transition-transform transition-opacity duration-300 ${animationState}`}
                    >
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-4xl font-bold"  // تغییر اندازه ضربدر
                            onClick={closeModal}
                        >
                            ×
                        </button>
                        <div className="flex items-center mb-4">
                            <span className="ml-2">{selectedStep.icon}</span>
                            <h3 className="text-text1/80 text-2xl font-semibold">{selectedStep.title}</h3>
                        </div>
                        <p className="text-text2 text-lg">
                            {selectedStep.title === 'انتخاب کالا'
                                ? 'انتخاب کالا برای صادرات نیازمند بررسی دقیق و تحلیل بازارهای هدف است. ابتدا باید تحقیقاتی درباره تقاضای محصولات در کشورهای مختلف انجام شود و روندهای بازار و نیازهای مصرف‌کنندگان را شناسایی کرد. سپس محصولاتی که مزیت رقابتی دارند، نظیر کیفیت بالا، قیمت مناسب و دسترسی به منابع اولیه، مورد بررسی قرار گیرند. همچنین، رعایت استانداردهای بین‌المللی و قوانین صادراتی آن کشورها از اهمیت بالایی برخوردار است. انتخاب صحیح کالا می‌تواند به موفقیت در بازارهای جهانی و افزایش سودآوری منجر شود.'
                                : selectedStep.title === 'یافتن بازار هدف'
                                    ? 'یافتن بازار هدف برای محصولات صادراتی نیازمند شناخت دقیق مخاطبان و تحلیل نیازهای آن‌هاست. ابتدا باید ویژگی‌های جمعیت‌شناختی و اقتصادی مناطق مختلف بررسی شود و بازارهایی با تقاضای بالا برای محصول شناسایی شوند. سپس، تحلیل رقبا و بررسی مزیت‌های محصول نسبت به کالاهای مشابه می‌تواند به شناسایی بهترین بازارها کمک کند. استفاده از داده‌های آماری و پژوهش‌های بازار نیز در این فرآیند بسیار مهم است. با انتخاب بازار هدف مناسب، شانس موفقیت و افزایش فروش در صادرات به‌طور قابل‌توجهی افزایش می‌یابد.'
                                    : selectedStep.title === 'آماده‌سازی مدارک و مستندات'
                                        ? 'آماده‌سازی مدارک و مستندات برای صادرات یکی از مراحل حیاتی است که باید با دقت انجام شود. این فرآیند شامل تهیه مدارک مانند پروفرما اینویس، گواهی مبدأ، فاکتور تجاری، بارنامه، و گواهی بازرسی می‌شود. همچنین، رعایت مقررات و استانداردهای کشور مقصد از اهمیت بالایی برخوردار است. بررسی دقیق و تکمیل صحیح این مدارک نه تنها روند صادرات را تسهیل می‌کند، بلکه از بروز مشکلات احتمالی در مراحل ترخیص کالا نیز جلوگیری می‌کند.'
                                        : selectedStep.title === 'بسته‌بندی و برچسب‌گذاری'
                                            ? 'بسته‌بندی و برچسب‌گذاری محصولات برای صادرات نقش مهمی در حفظ کیفیت کالا و جلب اعتماد مشتریان دارد. بسته‌بندی باید مناسب نوع کالا و مقاوم در برابر شرایط حمل و نقل باشد. همچنین، برچسب‌گذاری باید شامل اطلاعاتی مانند نام محصول، کشور مبدأ، مشخصات فنی و رعایت استانداردهای بین‌المللی باشد. برچسب‌ها به زبان بازار هدف و با توجه به مقررات محلی طراحی شوند تا فرآیند ورود و پذیرش کالا تسهیل گردد. بسته‌بندی حرفه‌ای و برچسب‌گذاری دقیق می‌تواند مزیت رقابتی محصول را در بازارهای بین‌المللی افزایش دهد.'
                                            : selectedStep.title === 'انجام تشریفات گمرکی'
                                                ? 'انجام تشریفات گمرکی یکی از مراحل ضروری در فرآیند صادرات است. این مرحله شامل تهیه و تکمیل اظهارنامه گمرکی، بازرسی کالا توسط مأمورین گمرک، و پرداخت عوارض و مالیات‌های مربوطه می‌باشد. دقت در ارائه اطلاعات صحیح و رعایت قوانین و مقررات کشور مبدأ و مقصد از اهمیت بالایی برخوردار است. همچنین، در برخی موارد، ممکن است کالاها نیاز به بازرسی‌های ویژه یا اخذ مجوزهای اضافی داشته باشند. انجام صحیح این مراحل باعث تسهیل در روند ترخیص کالا از گمرک و جلوگیری از تأخیرهای احتمالی می‌شود.'
                                                : selectedStep.title === 'انتخاب روش حمل‌ونقل'
                                                    ? 'انتخاب روش حمل‌ونقل مناسب برای صادرات نقش مهمی در کاهش هزینه‌ها و حفظ کیفیت کالا دارد. بسته به نوع محصول، فاصله مقصد و محدودیت‌های زمانی، می‌توان از روش‌های حمل‌ونقل دریایی، هوایی، زمینی یا ریلی استفاده کرد. هر روش مزایا و معایب خاص خود را دارد؛ برای مثال، حمل‌ونقل هوایی سریع‌تر اما هزینه‌برتر است، در حالی که حمل‌ونقل دریایی اقتصادی‌تر اما زمان‌برتر است. بررسی دقیق شرایط محصول و مقصد به انتخاب بهترین روش کمک می‌کند تا کالا به‌موقع و با کیفیت مطلوب به دست مشتری برسد.'
                                                    : selectedStep.title === 'دریافت و انتقال وجوه'
                                                        ? 'دریافت و انتقال وجه در فرآیند صادرات از اهمیت بالایی برخوردار است و نیازمند انتخاب روش‌های امن و مطمئن برای انجام تراکنش‌های مالی است. معمولاً از روش‌هایی مانند اعتبار اسنادی (LC)، پیش‌پرداخت، یا پرداخت پس از تحویل کالا استفاده می‌شود. این روش‌ها به‌منظور کاهش ریسک‌های مالی و اطمینان از دریافت به‌موقع وجه به کار می‌روند. همچنین، توجه به نرخ تبدیل ارز و مقررات مالی کشورها در این مرحله ضروری است. انتخاب روش مناسب برای دریافت و انتقال وجه می‌تواند از بروز مشکلات مالی جلوگیری کرده و روند صادرات را تسهیل کند.'
                                                        : selectedStep.title === 'پیگیری و خدمات پس از فروش'
                                                            ? 'پیگیری و ارائه خدمات پس از فروش در صادرات به حفظ رضایت مشتریان و ایجاد روابط تجاری پایدار کمک می‌کند. این خدمات شامل بررسی وضعیت تحویل کالا، دریافت بازخورد مشتریان، و رسیدگی به مشکلات احتمالی می‌شود. ارائه خدمات پس از فروش نشان‌دهنده تعهد به کیفیت و مسئولیت‌پذیری است که می‌تواند اعتماد مشتریان را جلب کرده و به افزایش وفاداری آنها منجر شود. همچنین، پاسخگویی به نیازهای مشتریان پس از تحویل کالا می‌تواند به بهبود محصول و شناسایی فرصت‌های توسعه بازار کمک کند.'
                                                            : selectedStep.description
                            }

                        </p>


                    </div>
                </div>
            )}
        </div>
    );
};

export default ExportProcess;
