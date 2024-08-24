import Service from '@/components/Service';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero'
export default function Page() {
  return (
    <div className="w-full flex flex-col gap-10">
      <Hero />
      <Service />
      <div className="w-full px-[10%]" dir="rtl">
        <h2 className="text-text1">کار ما</h2>
        <p></p>
      </div>
      <Footer />
    </div>
  );
}