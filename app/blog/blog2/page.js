import Image from 'next/image';

export default function ArticlePage() {
    return (
        <div className="bg-gray-100"> {/* پس‌زمینه خاکستری برای کل سایت */}
            {/* Banner Section */}
            <div className="relative h-[250px] overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('/images/group.jpg')` }}></div>
                <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50 p-8">
                    <div className="text-center text-white">
                        <h1 className="text-4xl font-bold mb-4">تجارت، تبادل کالا و خدمات برای سود است</h1>
                        <p className="text-bace">با آرتا اکسپورت همراه باشید</p>
                    </div>
                </div>
            </div>

            {/* Main Article Content */}
            <div className="p-12 bg-white mx-auto max-w-5xl rounded-lg"> {/* پس‌زمینه سفید و وسط‌چین کردن متن */}
                <h1 className="text-xl text-gray-700 font-bold mb-6 text-right">مس: فلزی با اهمیت صنعتی و تاریخی</h1>
                
                <p className="mb-6 text-base text-right text-gray-700">
                    مس یکی از قدیمی‌ترین فلزات شناخته شده توسط انسان است که از هزاران سال پیش در تمدن‌های مختلف مورد استفاده قرار گرفته است. این فلز به دلیل ویژگی‌های خاص خود مانند رسانایی الکتریکی بالا، مقاومت در برابر خوردگی و شکل‌پذیری عالی، نقش مهمی در توسعه صنایع مدرن دارد.
                </p>
                <Image src="/images/08.webp" alt="Copper" width={800} height={600} className="mb-6 w-full h-auto" />

                <h2 className="text-xl font-bold mb-4 text-right text-gray-700">ویژگی‌های مس</h2>
                
                <p className="mb-6 text-base text-right text-gray-700">
                    مس به عنوان یک فلز قرمز-نارنجی دارای ویژگی‌هایی است که آن را در بسیاری از صنایع، به ویژه در الکترونیک و مخابرات، بی‌همتا می‌سازد. این فلز رسانای بسیار خوبی برای الکتریسیته است و به همین دلیل به طور گسترده در ساخت سیم‌ها و قطعات الکترونیکی استفاده می‌شود.
                </p>
                <Image src="/images/03.webp" alt="Copper Features" width={800} height={600} className="mb-6 w-full h-auto" />

                <h2 className="text-xl font-bold mb-4 text-right text-gray-700">کاربردهای مس</h2>
                
                <p className="mb-6 text-base text-right text-gray-700">
                    مس علاوه بر الکترونیک، در صنایع مختلف دیگری نیز کاربرد دارد. این فلز در لوله‌کشی، ساخت قطعات خودرو، تولید آلیاژهای فلزی مانند برنز و حتی در هنرهای تزئینی و ساخت مجسمه‌ها به کار گرفته می‌شود. استفاده از مس به عنوان ماده اولیه برای تولید سکه‌ها نیز در طول تاریخ رایج بوده است.
                </p>
                <Image src="/images/copper_3.jpg" alt="Copper Uses" width={800} height={600} className="mb-6 w-full h-auto" />

                <h2 className="text-xl font-bold mb-4 text-right text-gray-700">اهمیت زیست‌محیطی</h2>
                
                <p className="mb-6 text-base text-right text-gray-700">
                    مس به دلیل قابلیت بازیافت بالا، از اهمیت زیادی در زمینه حفظ محیط زیست برخوردار است. بیش از ۸۰ درصد مس استخراج شده در جهان قابلیت بازیافت دارد و می‌توان آن را بدون از دست دادن کیفیت بارها و بارها استفاده کرد. این ویژگی باعث شده است که مس به عنوان یکی از مواد دوستدار محیط زیست شناخته شود.
                </p>
                <Image src="/images/copper_4.jpg" alt="Environmental Importance" width={800} height={600} className="mb-6 w-full h-auto" />

                <h2 className="text-xl font-bold mb-4 text-right text-gray-700">نتیجه‌گیری</h2>
                
                <p className="mb-6 text-base text-right text-gray-700">
                    مس یک فلز با ارزش و ضروری برای توسعه فناوری و صنایع مدرن است. از کاربردهای الکتریکی گرفته تا نقش آن در هنر و فرهنگ، این فلز نقش بسیار مهمی در زندگی روزمره انسان‌ها ایفا می‌کند و با توجه به قابلیت بازیافت آن، می‌توان امیدوار بود که در آینده نیز به عنوان یک منبع پایدار و مهم باقی بماند.
                </p>
                <Image src="/images/copper_5.jpg" alt="Conclusion" width={800} height={600} className="mb-6 w-full h-auto" />
            </div>
        </div>
    );
}
