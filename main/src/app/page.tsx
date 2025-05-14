import { Ripple } from "@/components/magicui/ripple";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Globe } from "@/components/magicui/globe";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Ripple Background */}
      <Ripple className="z-0" mainCircleSize={320} numCircles={7} />
      {/* Globe visual (optional, can be commented out if too busy) */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none max-w-[500px] w-full">
        <Globe />
      </div>
      {/* Main Content */}
      <main className="relative z-20 flex flex-col items-center justify-center gap-4 px-4 py-24 sm:py-32">
        <AnimatedShinyText
          shimmerWidth={120}
          className="text-base sm:text-lg font-semibold text-center mb-2 text-neutral-500 dark:text-neutral-400"
        >
          Built with Metamask DTK and GAIA agents.
        </AnimatedShinyText>
        <AnimatedShinyText
          shimmerWidth={180}
          className="text-4xl sm:text-6xl font-extrabold text-center drop-shadow-lg"
        >
          shanlearn.
        </AnimatedShinyText>
        <TypingAnimation
          className="mt-2 text-lg sm:text-2xl max-w-2xl text-center text-neutral-700 dark:text-neutral-300 font-medium"
          duration={30}
        >
          Empowering global science education through wallet-based access, delegated authority, and AI mentorship—onchain and unstoppable
        </TypingAnimation>
        <div className="mt-8 flex gap-4">
          <a
            href="#explore"
            className="rounded-full bg-black px-8 py-3 text-lg font-semibold text-white shadow-lg hover:scale-105 transition-transform duration-200 border border-black dark:bg-white dark:text-black dark:border-white"
          >
            Get Started
          </a>
        </div>
      </main>
      {/* Subtle overlay for effect */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-black/30 dark:from-black/60 dark:to-white/10 z-10" />
    </div>
  );
}
