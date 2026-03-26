"use client";

import { Activity, LayoutDashboard, Target, Crosshair, LogOut, Clock, ArrowUpRight, ArrowDownRight, Zap, Menu, X, Home } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const mockSignals = [
  {
    id: 1,
    pair: "EUR/USD",
    type: "BUY",
    entry: "1.09450",
    tp: "1.09800",
    sl: "1.09200",
    timestamp: "10 mins ago",
    status: "Active",
  },
  {
    id: 2,
    pair: "XAU/USD",
    type: "SELL",
    entry: "2045.50",
    tp: "2030.00",
    sl: "2055.00",
    timestamp: "45 mins ago",
    status: "Active",
  },
  {
    id: 3,
    pair: "GBP/USD",
    type: "BUY",
    entry: "1.26800",
    tp: "1.27500",
    sl: "1.26400",
    timestamp: "2 hours ago",
    status: "Active",
  },
  {
    id: 4,
    pair: "USD/JPY",
    type: "SELL",
    entry: "148.500",
    tp: "147.200",
    sl: "149.100",
    timestamp: "3 hours ago",
    status: "Hit TP",
  }
];

export default function DashboardPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 font-medium">
            <LayoutDashboard className="w-5 h-5" />
            Active Signals
          </Link>
          <Link href="/results" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#94A3B8] hover:bg-[#1E293B]/50 hover:text-white transition-colors font-medium">
            <Target className="w-5 h-5" />
            Trading Results
          </Link>
          <Link href="/faq" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#94A3B8] hover:bg-[#1E293B]/50 hover:text-white transition-colors font-medium">
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

        {/* Dashboard Header */}
        <div className="p-6 md:p-8 border-b border-[#1E293B] bg-[#0A1220]/30">
          <h1 className="text-3xl font-black tracking-tight mb-2">Live Trading Feed</h1>
          <p className="text-[#94A3B8] font-light">Execute these setups with strict risk management.</p>
        </div>

        {/* Signals Feed */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl">
            {mockSignals.map((signal) => (
              <div key={signal.id} className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-[#00E5FF]/50 transition-colors duration-300">
                {/* Status Indicator */}
                <div className="absolute top-0 left-0 w-1 h-full bg-[#00E5FF]" />
                
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-black font-mono tracking-tight">{signal.pair}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-black tracking-widest ${
                        signal.type === "BUY" 
                          ? "bg-[#00FF88]/10 text-[#00FF88] border border-[#00FF88]/30" 
                          : "bg-[#FF3366]/10 text-[#FF3366] border border-[#FF3366]/30"
                      }`}>
                        {signal.type} {signal.type === "BUY" ? <ArrowUpRight className="inline w-3 h-3" /> : <ArrowDownRight className="inline w-3 h-3" />}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[#94A3B8] text-sm">
                      <Clock className="w-4 h-4" />
                      {signal.timestamp} • <span className="text-[#00E5FF]">{signal.status}</span>
                    </div>
                  </div>
                  
                  <div className="w-12 h-12 bg-[#0A1220] rounded-xl border border-[#1E293B] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Crosshair className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 bg-[#050B14]/50 rounded-xl p-4 border border-[#1E293B]">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#94A3B8] font-mono mb-1">Entry</p>
                    <p className="text-lg font-bold font-mono text-white">{signal.entry}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#94A3B8] font-mono mb-1">Take Profit</p>
                    <p className="text-lg font-bold font-mono text-[#00FF88]">{signal.tp}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#94A3B8] font-mono mb-1">Stop Loss</p>
                    <p className="text-lg font-bold font-mono text-[#FF3366]">{signal.sl}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
