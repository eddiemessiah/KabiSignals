"use client";

import { Check, X, Star, Shield, Zap, Activity, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function VipPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".animate-fade-in",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050B14] text-white font-sans overflow-hidden py-24" ref={containerRef}>
      {/* Immersive Terminal Background */}
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none -z-10" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF3366]/10 blur-[200px] rounded-full pointer-events-none -z-10" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-[#1E293B] bg-[#050B14]/80 backdrop-blur-lg">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-32 h-10 md:w-40 md:h-12 flex items-center">
              <img src="/kabi-logo.jpg" alt="Kabi Company" className="w-full h-full object-contain rounded-md" />
            </div>
          </Link>
          <Link href="/dashboard" className="px-6 py-2.5 rounded-md bg-[#1E293B] text-white font-bold text-sm hover:bg-[#2D3748] transition-colors">
            Back to Dashboard
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-6 max-w-5xl pt-12">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF3366]/30 bg-[#FF3366]/10 text-[#FF3366] text-xs font-mono font-bold tracking-widest mb-6 shadow-[0_0_20px_rgba(255,51,102,0.1)]">
            <Star className="w-4 h-4" />
            THE REVENUE LAYER
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-white text-shadow-glow-red">
            Upgrade to <span className="text-[#FF3366] drop-shadow-[0_0_30px_rgba(255,51,102,0.6)]">VIP</span> Status
          </h1>
          <p className="text-[#94A3B8] text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light">
            Stop guessing. Start executing with complete conviction. Get our highest-probability setups, real-time market breakdowns, and direct mentorship.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="glass-panel rounded-3xl overflow-hidden border border-[#1E293B] shadow-[0_0_50px_rgba(255,51,102,0.1)] mb-16 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#1E293B]">
            {/* Free Tier */}
            <div className="p-8 md:p-12 bg-[#0A1220]/50 backdrop-blur-md">
              <h2 className="text-3xl font-bold mb-2">Free Access</h2>
              <p className="text-[#94A3B8] mb-8">Lead generation tier to test our edge.</p>
              
              <div className="text-5xl font-black mb-8 font-mono">
                $0<span className="text-xl text-[#94A3B8] font-sans">/mo</span>
              </div>

              <ul className="space-y-5 mb-10">
                <li className="flex items-center gap-3 text-[#94A3B8]">
                  <Check className="w-5 h-5 text-[#00E5FF]" /> 
                  <span>Limited daily signals (1-2 setups)</span>
                </li>
                <li className="flex items-center gap-3 text-[#94A3B8]">
                  <Check className="w-5 h-5 text-[#00E5FF]" /> 
                  <span>Basic market insights</span>
                </li>
                <li className="flex items-center gap-3 text-[#1E293B]">
                  <X className="w-5 h-5" /> 
                  <span className="line-through">High-accuracy VIP setups</span>
                </li>
                <li className="flex items-center gap-3 text-[#1E293B]">
                  <X className="w-5 h-5" /> 
                  <span className="line-through">Real-time chart breakdowns</span>
                </li>
                <li className="flex items-center gap-3 text-[#1E293B]">
                  <X className="w-5 h-5" /> 
                  <span className="line-through">1-on-1 Mentorship</span>
                </li>
              </ul>
              
              <Link href="/dashboard" className="block w-full py-4 px-6 rounded-lg bg-[#1E293B] text-white text-center font-bold hover:bg-[#2D3748] transition-colors border border-[#334155]">
                Current Plan
              </Link>
            </div>

            {/* VIP Tier */}
            <div className="p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF3366]/20 blur-[50px] pointer-events-none" />
              
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-3xl font-bold text-white">VIP Membership</h2>
                <div className="px-3 py-1 rounded-full bg-[#FF3366]/20 text-[#FF3366] text-xs font-bold tracking-widest border border-[#FF3366]/50 shadow-[0_0_15px_rgba(255,51,102,0.4)]">
                  RECOMMENDED
                </div>
              </div>
              
              <p className="text-[#94A3B8] mb-8">The complete trading arsenal.</p>
              
              <div className="text-5xl font-black mb-8 font-mono text-white">
                $99<span className="text-xl text-[#94A3B8] font-sans">/mo</span>
              </div>

              <ul className="space-y-5 mb-10">
                <li className="flex items-center gap-3 text-white">
                  <Zap className="w-5 h-5 text-[#FF3366]" /> 
                  <span className="font-medium">All daily signals (5+ setups)</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <Zap className="w-5 h-5 text-[#FF3366]" /> 
                  <span className="font-medium">High-accuracy VIP exclusive setups</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <Shield className="w-5 h-5 text-[#FF3366]" /> 
                  <span className="font-medium">Deep market breakdowns & video updates</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <Star className="w-5 h-5 text-[#FF3366]" /> 
                  <span className="font-medium">Premium community access</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <Activity className="w-5 h-5 text-[#FF3366]" /> 
                  <span className="font-medium">Direct 1-on-1 mentorship & Q&A</span>
                </li>
              </ul>

              <button className="relative w-full overflow-hidden bg-[#FF3366] text-white font-bold py-4 px-8 rounded-lg hover:bg-[#FF1A53] transition-all duration-300 shadow-[0_0_30px_rgba(255,51,102,0.4)] hover:shadow-[0_0_50px_rgba(255,51,102,0.7)] flex items-center justify-center gap-3 text-lg group">
                <span className="relative z-10 flex items-center gap-2">Upgrade to VIP <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial / Trust Indicators */}
        <div className="text-center animate-fade-in">
          <p className="text-[#94A3B8] mb-6">Join 500+ traders scaling their accounts inside VIP.</p>
          <div className="flex justify-center gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-6 h-6 fill-[#FFD700] text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
