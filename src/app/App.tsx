import React from "react";
import { Hero } from '@/app/components/hero';
import { Gallery } from '@/app/components/gallery';
import { FinancialReports } from '@/app/components/financial-reports';
import { Footer } from '@/app/components/footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Gallery />
      <FinancialReports />
      <Footer />
    </div>
  );
}
