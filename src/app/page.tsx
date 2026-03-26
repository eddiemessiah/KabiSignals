"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, TrendingUp, ShieldCheck, Zap, Activity, Star, Users } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // GSAP Entrance Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Parallax
      gsap.to(".bg-grid-pattern", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Staggered Text Reveal
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.2 } });
      
      tl.fromTo(
        headlineRef.current,
        { y: 50, opacity: 0, clipPath: "inset(100% 0 0 0)" },
        { y: 0, opacity: 1, clipPath: "inset(0% 0 0 0)" }
      )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.8"
      )
      .fromTo(
        ctaRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, ease: "back.out(1.5)" },
        "-=0.6"
      );

      // Number Counting Animation for Stats
      const statElements = gsap.utils.toArray<HTMLElement>(".stat-number");
      statElements.forEach((el) => {
        const targetValue = parseFloat(el.getAttribute("data-value") || "0");
        const suffix = el.getAttribute("data-suffix") || "";
        const prefix = el.getAttribute("data-prefix") || "";
        
        gsap.to(el, {
          innerHTML: targetValue,
          duration: 2.5,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          },
          onUpdate: function () {
            el.innerHTML = `${prefix}${Math.floor(this.targets()[0].innerHTML)}${suffix}`;
          },
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative overflow-hidden font-sans">
      {/* Immersive Terminal Background */}
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none -z-10" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00E5FF]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Navigation */}
      <nav className="fixed w-full z-50 border-b border-[#1E293B] bg-[#050B14]/80 backdrop-blur-lg">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-32 h-10 md:w-40 md:h-12 flex items-center">
              <img src="/kabi-logo.jpg" alt="Kabi Company" className="w-full h-full object-contain rounded-md" />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#94A3B8]">
            <Link href="#signals" className="hover:text-[#00E5FF] transition-colors">Signals</Link>
            <Link href="#results" className="hover:text-[#00E5FF] transition-colors">Results</Link>
            <Link href="/vip" className="hover:text-[#00E5FF] transition-colors">VIP Access</Link>
          </div>
          <Link href="/dashboard" className="px-6 py-2.5 rounded-md bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors inline-block text-center">
            Dashboard
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-48 pb-32 flex items-center justify-center min-h-[90vh]">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/10 text-[#00E5FF] text-xs font-mono font-bold tracking-widest mb-10 shadow-[0_0_20px_rgba(0,229,255,0.1)]">
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
            LIVE FOREX MARKET INSIGHTS
          </div>

          <h1 ref={headlineRef} className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.05]">
            <span className="kabi-gradient-text block">Institutional Grade.</span>
            <span className="text-white block mt-2">Retail Accessibility.</span>
          </h1>

          <p ref={subtitleRef} className="text-lg md:text-xl lg:text-2xl text-[#94A3B8] font-light max-w-3xl mx-auto leading-relaxed mb-12">
            We analyze the charts. You execute the trades. Join a community built on transparency, high-probability setups, and consistent market delivery.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/dashboard" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3">
              Get Free Signals <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/vip" className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-3">
              Explore VIP Status
            </Link>
          </div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <div className="w-full overflow-hidden bg-[#0A1220]/80 border-y border-[#1E293B] py-4 relative z-10 flex">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 font-mono text-sm tracking-widest text-[#00E5FF]">
          <span>EUR/USD +45 PIPS</span>
          <span className="text-[#94A3B8]">•</span>
          <span>GBP/USD +30 PIPS</span>
          <span className="text-[#94A3B8]">•</span>
          <span>XAU/USD +120 PIPS</span>
          <span className="text-[#94A3B8]">•</span>
          <span>USD/JPY -15 PIPS</span>
          <span className="text-[#94A3B8]">•</span>
          <span>EUR/USD +45 PIPS</span>
          <span className="text-[#94A3B8]">•</span>
          <span>GBP/USD +30 PIPS</span>
          <span className="text-[#94A3B8]">•</span>
          <span>XAU/USD +120 PIPS</span>
          <span className="text-[#94A3B8]">•</span>
          <span>USD/JPY -15 PIPS</span>
          <span className="text-[#94A3B8]">•</span>
          <span>EUR/USD +45 PIPS</span>
          <span className="text-[#94A3B8]">•</span>
          <span>GBP/USD +30 PIPS</span>
          <span className="text-[#94A3B8]">•</span>
          <span>XAU/USD +120 PIPS</span>
          <span className="text-[#94A3B8]">•</span>
          <span>USD/JPY -15 PIPS</span>
        </div>
      </div>

      {/* Live Stats Ticker (GSAP Animated) */}
      <section ref={statsRef} className="bg-[#050B14] relative z-10">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#1E293B]">
            {[
              { label: "Win Rate", value: "84", suffix: "%", color: "text-[#00FF88]", glow: "kabi-glow-green" },
              { label: "Pips Captured", value: "12500", prefix: "+", color: "text-[#00E5FF]", glow: "kabi-glow-cyan" },
              { label: "Active Members", value: "5420", prefix: "", color: "text-white", glow: "" },
              { label: "Daily Setups", value: "5", suffix: "+", color: "text-white", glow: "" }
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <p className="text-xs uppercase tracking-widest text-[#94A3B8] font-mono mb-2">{stat.label}</p>
                <h3 className={`text-4xl md:text-5xl font-black font-mono tracking-tight ${stat.color} ${stat.glow}`}>
                  <span className="stat-number" data-value={stat.value} data-prefix={stat.prefix} data-suffix={stat.suffix}>0</span>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Freemium Pipeline - Asymmetrical Bento Box */}
      <section id="signals" className="py-24 container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">Built For Traders. Not Gamblers.</h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto text-lg md:text-xl">Stop relying on messy chart noise. We deliver clean, actionable levels directly to your dashboard.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Large Main Box */}
          <div className="glass-panel p-8 md:p-12 rounded-3xl md:col-span-2 lg:col-span-2 group hover:border-[#00E5FF]/50 transition-colors duration-500 relative overflow-hidden flex flex-col justify-end min-h-[400px]">
            <div className="absolute top-8 right-8 w-16 h-16 bg-[#00E5FF]/10 rounded-2xl flex items-center justify-center border border-[#00E5FF]/30 backdrop-blur-md">
              <Zap className="w-8 h-8 text-[#00E5FF]" />
            </div>
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/10 text-[#00E5FF] text-xs font-mono font-bold tracking-widest mb-4">
                THE FOUNDATION
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-4 text-white">Freemium Model</h3>
              <p className="text-[#94A3B8] text-lg leading-relaxed max-w-lg">
                We believe in proving our value first. Start with our free tier to experience institutional-grade analysis without the commitment.
              </p>
            </div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-[80px]" />
          </div>

          {/* Vertical Box */}
          <div className="glass-panel p-8 rounded-3xl md:col-span-1 lg:col-span-1 group hover:border-[#00FF88]/50 transition-colors duration-500 flex flex-col min-h-[400px]">
            <div className="w-14 h-14 bg-[#0A1220] border border-[#1E293B] rounded-xl flex items-center justify-center mb-auto group-hover:scale-110 transition-transform duration-500">
              <Users className="w-7 h-7 text-[#00FF88]" />
            </div>
            <div className="mt-8">
              <div className="inline-block px-3 py-1 rounded-full border border-[#00FF88]/30 bg-[#00FF88]/10 text-[#00FF88] text-xs font-mono font-bold tracking-widest mb-4">
                STEP ONE
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Free Access</h3>
              <p className="text-[#94A3B8] leading-relaxed">
                (Lead Generation). Get access to daily market updates, educational content, and a limited number of high-probability setups to test our edge.
              </p>
            </div>
          </div>

          {/* Horizontal Box */}
          <div className="glass-panel p-8 rounded-3xl md:col-span-2 lg:col-span-3 group hover:border-[#FF3366]/50 transition-colors duration-500 flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 shrink-0 bg-[#0A1220] border border-[#1E293B] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Star className="w-8 h-8 text-[#FF3366]" />
            </div>
            <div>
              <div className="inline-block px-3 py-1 rounded-full border border-[#FF3366]/30 bg-[#FF3366]/10 text-[#FF3366] text-xs font-mono font-bold tracking-widest mb-4">
                THE ACCELERATOR
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">VIP Membership</h3>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                (Revenue Layer). Unlock our complete trading arsenal. Full access to all daily signals, deep market breakdowns, premium community access, and 1-on-1 mentorship opportunities.
              </p>
            </div>
            <div className="ml-auto mt-6 md:mt-0 shrink-0">
              <Link href="/vip" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors">
                Explore VIP
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
