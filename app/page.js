// app/page.js
import React from 'react';
import Service from '@/components/Service';
import Hero from '@/components/Hero';
import RandomProductGrid from '@/components/RandomProductGrid';
import PhoneNumber from '@/components/PhoneNumber';
import ExportProcess from '@/components/ExportProcess';
import GlobalReach from '@/components/GlobalReach';

export default function Page() {
  return (
    <div className="w-full flex flex-col gap-10">
      <Hero />
      <Service />
      <GlobalReach/>
      <ExportProcess></ExportProcess>
      <RandomProductGrid />
      <PhoneNumber />
    </div>
  );
}
