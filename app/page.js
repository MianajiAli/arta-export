// app/page.js
import React from 'react';
import Service from '@/components/Service';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import RandomProductGrid from '@/components/RandomProductGrid';
import PhoneNumber from '@/components/PhoneNumber';

export default function Page() {
  return (
    <div className="w-full flex flex-col gap-10">
      <Hero />
      <Service />
      <RandomProductGrid />
      <PhoneNumber />
      <Footer />
    </div>
  );
}
