"use client";
import Steps from "@/components/Steps";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <main className="space-y-12">
          <Hero />
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <Steps />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
