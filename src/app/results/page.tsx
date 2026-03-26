"use client";

import { Activity, LayoutDashboard, Target, LogOut, Zap, Menu, X, Home, ArrowUpRight, ArrowDownRight, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const historicalTrades = [
  { id: 1, pair: "EUR/USD", date: "2023-10-25", type: "BUY", pips: "+45", status: "WON" },
  { id: 2, pair: "GBP/JPY", date: "2023-10-24", type: "SELL", pips: "+120", status: "WON" },
  { id: 3, pair: "XAU/USD", date: "2023-10-23", type: "BUY", pips: "-30", status: "LOST" },
  { id: 4, pair: "USD/CHF", date: "2023-10-22", type: "SELL", pips: "+25", status: "WON" },
  { id: 5, pair: "AUD/USD", date: "2023-10-21", type: "BUY", pips: "-15", status: "LOST" },
  { id: 6, pair: "EUR/GBP", date: "2023-10-20", type: "SELL", pips: "+60", status: "WON" },
  { id: 7, pair: "BTC/USD", date: "2023-10-19", type: "BUY", pips: "+200", status: "WON" },
];

export default function ResultsPage() {
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
            <div className="w-10 h-10 bg-[#00E5FF]/10 rounded-lg flex items-center justify-center border border-[#00E5FF]/30">
              <Activity className="w-6 h-6 text-[#00E5FF]" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">
              Kabi<span className="text-[#94A3B8] font-light">.Terminal</span>
            </span>
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
          <Link href="/results" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 font-medium">
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

        {/* Header */}
        <div className="p-6 md:p-8 border-b border-[#1E293B] bg-[#0A1220]/30">
          <h1 className="text-3xl font-black tracking-tight mb-2">Historic Performance</h1>
          <p className="text-[#94A3B8] font-light">Transparent ledger of all our past trades and signal outcomes.</p>
        </div>

        {/* Results Ledger */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="glass-panel rounded-2xl overflow-hidden border border-[#1E293B]">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-[#1E293B] bg-[#0A1220]/50 text-[#94A3B8] font-mono text-xs uppercase tracking-widest">
                      <th className="p-6 font-medium">Pair / Asset</th>
                      <th className="p-6 font-medium">Date</th>
                      <th className="p-6 font-medium">Type</th>
                      <th className="p-6 font-medium">Result (Pips)</th>
                      <th className="p-6 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1E293B]">
                    {historicalTrades.map((trade) => (
                      <tr key={trade.id} className="hover:bg-[#1E293B]/20 transition-colors">
                        <td className="p-6">
                          <span className="font-bold text-lg font-mono tracking-tight text-white">{trade.pair}</span>
                        </td>
                        <td className="p-6 text-[#94A3B8]">{trade.date}</td>
                        <td className="p-6">
                          <span className={`flex items-center gap-1 text-sm font-bold tracking-widest ${
                            trade.type === "BUY" ? "text-[#00FF88]" : "text-[#FF3366]"
                          }`}>
                            {trade.type}
                            {trade.type === "BUY" ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                          </span>
                        </td>
                        <td className="p-6">
                          <span className={`font-mono font-bold text-lg ${
                            trade.status === "WON" ? "text-[#00FF88]" : "text-[#FF3366]"
                          }`}>
                            {trade.pips}
                          </span>
                        </td>
                        <td className="p-6">
                          <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black tracking-widest ${
                            trade.status === "WON"
                              ? "bg-[#00FF88]/10 text-[#00FF88] border border-[#00FF88]/30"
                              : "bg-[#FF3366]/10 text-[#FF3366] border border-[#FF3366]/30"
                          }`}>
                            {trade.status === "WON" ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                            {trade.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
