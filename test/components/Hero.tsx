"use client";

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center text-center py-20 relative hero">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-100/60 via-white/80 to-green-100/60 pointer-events-none -z-10" />
      <div className="text-xs font-semibold text-indigo-500 mb-4 flex items-center gap-2 uppercase tracking-widest">
        <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-tr from-indigo-500 to-green-400" />
        Full service digital agency
      </div>
      <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-tight text-gray-900 mb-6 hero-title">
        We make <span className="hero-gradient-text px-3 py-1 rounded-md">creative</span> <br />
        things, <span className="hero-gradient-text px-3 py-1 rounded-md">everyday.</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 hero-subtitle">
        Integrate delegation into your dapp in minutes with MetaMask's powerful delegation toolkit
      </p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="#steps" className="button shadow-lg">Get Started</a>
        <a href="https://docs.gator.metamask.io/" target="_blank" rel="noopener noreferrer" className="button bg-white text-indigo-600 border border-indigo-100 shadow hover:bg-indigo-50">Read Docs</a>
      </div>
    </section>
  );
}
  