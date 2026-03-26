"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, TrendingUp, ShieldCheck, Zap, Activity } from "lucide-react";

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
            <div className="w-10 h-10 bg-[#00E5FF]/10 rounded-lg flex items-center justify-center border border-[#00E5FF]/30">
              <Activity className="w-6 h-6 text-[#00E5FF]" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">
              Kabi<span className="text-[#94A3B8] font-light">.Company</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#94A3B8]">
            <a href="#signals" className="hover:text-[#00E5FF] transition-colors">Signals</a>
            <a href="#results" className="hover:text-[#00E5FF] transition-colors">Results</a>
            <a href="#vip" className="hover:text-[#00E5FF] transition-colors">VIP Access</a>
          </div>
          <button className="px-6 py-2.5 rounded-md bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors">
            Member Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-48 pb-32 flex items-center justify-center min-h-[90vh]">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/10 text-[#00E5FF] text-xs font-mono font-bold tracking-widest mb-10 shadow-[0_0_20px_rgba(0,229,255,0.1)]">
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
            LIVE FOREX MARKET INSIGHTS
          </div>

          <h1 ref={headlineRef} className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.05]">
            <span className="kabi-gradient-text block">Institutional Grade.</span>
            <span className="text-white block mt-2">Retail Accessibility.</span>
          </h1>

          <p ref={subtitleRef} className="text-xl md:text-2xl text-[#94A3B8] font-light max-w-3xl mx-auto leading-relaxed mb-12">
            We analyze the charts. You execute the trades. Join a community built on transparency, high-probability setups, and consistent market delivery.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3">
              Get Free Signals <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-3">
              Explore VIP Status
            </button>
          </div>
        </div>
      </section>

      {/* Live Stats Ticker (GSAP Animated) */}
      <section ref={statsRef} className="border-y border-[#1E293B] bg-[#0A1220]/50 backdrop-blur-md relative z-10">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#1E293B]">
            {[
              { label: "Win Rate", value: "84", suffix: "%", color: "text-[#00FF88]", glow: "kabi-glow-green" },
              { label: "Pips Captured (2025)", value: "12500", prefix: "+", color: "text-[#00E5FF]", glow: "kabi-glow-cyan" },
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

      {/* The Freemium Pipeline */}
      <section id="signals" className="py-32 container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Built For Traders. Not Gamblers.</h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto text-lg">Stop relying on messy chart noise. We deliver clean, actionable levels directly to your dashboard.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: Zap, title: "Precision Entries", desc: "Exact price points backed by institutional supply/demand zones." },
            { icon: ShieldCheck, title: "Strict Risk Logic", desc: "Every signal includes hard Stop-Loss and Take-Profit ratios." },
            { icon: TrendingUp, title: "Daily Execution", desc: "Coverage across Major Pairs and Gold (XAU/USD) during prime volatility." }
          ].map((feature, i) => (
            <div key={i} className="glass-panel p-8 rounded-2xl group hover:border-[#00E5FF]/50 transition-colors duration-500">
              <div className="w-14 h-14 bg-[#0A1220] border border-[#1E293B] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="w-7 h-7 text-[#00E5FF]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-[#94A3B8] leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
