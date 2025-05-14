"use client";
import Steps from "@/components/Steps";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef]">
      {/* Modern sticky header */}
      <header className="w-full sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm flex items-center justify-between py-4 px-8 mb-8">
        <div className="text-2xl font-extrabold tracking-tight text-indigo-600 flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-tr from-indigo-500 to-green-400 mr-2" />
          Aurorä
        </div>
        <nav className="flex gap-6 text-base font-medium text-gray-700">
          <a href="#" className="hover:text-indigo-600 transition-colors">Home</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Docs</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">GitHub</a>
        </nav>
        <div className="flex items-center gap-4">
          <input className="border border-gray-200 bg-gray-50 rounded-full px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 transition" placeholder="Search..." />
        </div>
      </header>
      <main className="w-full max-w-5xl mx-auto flex flex-col gap-16 items-center px-4 pb-16">
        <Hero />
        <Steps />
      </main>
      <Footer />
    </div>
  );
}
