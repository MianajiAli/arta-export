// app/page.js
import React from 'react';
import Service from '@/components/Service';
import Hero from '@/components/Hero';
import RandomProductGrid from '@/components/RandomProductGrid';
import PhoneNumber from '@/components/PhoneNumber';
import ExportProcess from '@/components/ExportProcess';

export default function Page() {
  return (
    <div className="w-full flex flex-col gap-10">
      <Hero />
      <Service />
      <ExportProcess></ExportProcess>
      <RandomProductGrid />
      <PhoneNumber />
    </div>
  );
}
