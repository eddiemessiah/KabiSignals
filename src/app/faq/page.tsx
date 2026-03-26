"use client";

import { Activity, LayoutDashboard, Target, LogOut, Zap, Menu, X, Home, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "What are Forex Signals?",
    answer: "Forex signals are actionable trading recommendations provided by expert analysts or algorithms. They tell you exactly which currency pair to trade, whether to buy or sell, and specify the exact entry price, take profit, and stop loss levels."
  },
  {
    id: 2,
    question: "How do Forex signals work?",
    answer: "Our team of professional traders constantly monitors the markets using technical and fundamental analysis. Once a high-probability setup is identified, we instantly send a signal to your dashboard or Telegram. All you have to do is copy the trade details into your trading platform."
  },
  {
    id: 3,
    question: "Can Forex signals make you money?",
    answer: "Yes, when following a disciplined approach. While no system guarantees a 100% win rate, our signals are designed to provide a positive edge over time. Success depends on following proper risk management—never risking more than 1-2% of your account per trade."
  }
];

export default function FAQPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="flex h-screen bg-[#050B14] text-white font-sans overflow-hidden">
      {/* Immersive Terminal Background */}
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none -z-10" />
      
      {/* Sidebar Overlay for Mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed md:static inset-y-0 left-0 w-64 border-r border-[#1E293B] bg-[#0A1220]/95 md:bg-[#0A1220]/50 backdrop-blur-xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}>
        <div className="p-6 border-b border-[#1E293B] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-32 h-10 md:w-40 md:h-12 flex items-center">
              <img src="/kabi-logo.jpg" alt="Kabi Company" className="w-full h-full object-contain rounded-md" />
            </div>
          </div>
          <button 
            className="md:hidden text-[#94A3B8] hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#94A3B8] hover:bg-[#1E293B]/50 hover:text-white transition-colors font-medium">
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#94A3B8] hover:bg-[#1E293B]/50 hover:text-white transition-colors font-medium">
            <LayoutDashboard className="w-5 h-5" />
            Active Signals
          </Link>
          <Link href="/results" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#94A3B8] hover:bg-[#1E293B]/50 hover:text-white transition-colors font-medium">
            <Target className="w-5 h-5" />
            Trading Results
          </Link>
          <Link href="/faq" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 font-medium">
            <Activity className="w-5 h-5" />
            FAQ
          </Link>
          <Link href="/vip" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#94A3B8] hover:bg-[#FF3366]/10 hover:text-[#FF3366] transition-colors font-medium group">
            <Zap className="w-5 h-5 group-hover:animate-pulse" />
            Upgrade to VIP
          </Link>
        </nav>

        <div className="p-4 border-t border-[#1E293B]">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#94A3B8] hover:bg-[#1E293B]/50 hover:text-white transition-colors font-medium w-full text-left">
            <LogOut className="w-5 h-5" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden w-full">
        {/* Mobile Header */}
        <header className="md:hidden p-4 border-b border-[#1E293B] bg-[#0A1220]/80 backdrop-blur-md flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              className="text-[#94A3B8] hover:text-white p-1"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="w-8 h-8 bg-[#00E5FF]/10 rounded-lg flex items-center justify-center border border-[#00E5FF]/30">
              <Activity className="w-5 h-5 text-[#00E5FF]" />
            </div>
            <span className="text-xl font-black tracking-tighter text-white">
              Kabi<span className="text-[#94A3B8] font-light">.Terminal</span>
            </span>
          </div>
        </header>

        {/* Header */}
        <div className="p-6 md:p-8 border-b border-[#1E293B] bg-[#0A1220]/30">
          <h1 className="text-3xl font-black tracking-tight mb-2">Frequently Asked Questions</h1>
          <p className="text-[#94A3B8] font-light">Everything you need to know about our trading signals and methodology.</p>
        </div>

        {/* FAQ Accordion */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq) => (
              <div 
                key={faq.id} 
                className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openFaqId === faq.id ? 'border-[#00E5FF]/50 bg-[#0A1220]/60' : 'border-[#1E293B] hover:border-[#1E293B]/80'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                >
                  <span className="text-lg font-bold tracking-tight text-white pr-4">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    openFaqId === faq.id ? 'bg-[#00E5FF]/20 text-[#00E5FF]' : 'bg-[#1E293B] text-[#94A3B8]'
                  }`}>
                    {openFaqId === faq.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaqId === faq.id ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 py-0 opacity-0'
                  }`}
                >
                  <p className="text-[#94A3B8] leading-relaxed font-light text-sm md:text-base border-t border-[#1E293B] pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
