import Image from 'next/image'
import HeroSection from "./compenents/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#0A133D]">
      <div className="container mx-auto py-4 px-12">
        <HeroSection />
      </div>
    </main>
  );
}
