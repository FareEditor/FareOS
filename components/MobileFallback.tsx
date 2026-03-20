import React from 'react';
import { DesktopIcon, SmartphoneIcon } from './Icons';

const MobileFallback: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#0F1115] flex flex-col items-center justify-center p-8 text-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent1/20 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center max-w-sm">
        <div className="mb-8 relative">
          <div className="w-24 h-24 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center backdrop-blur-md shadow-2xl">
            <DesktopIcon className="w-12 h-12 text-accent1 animate-pulse" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-windowBg rounded-xl border border-white/10 flex items-center justify-center shadow-lg">
            <SmartphoneIcon className="w-5 h-5 text-slate-400" />
          </div>
        </div>

        <h1 className="text-2xl font-heading font-bold text-white mb-4 tracking-tight">
          Desktop Experience Required
        </h1>
        
        <p className="text-slate-400 font-text leading-relaxed mb-8">
          FareOS is a high-fidelity desktop environment designed for larger screens. 
          Please visit on a computer to explore the full experience.
        </p>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        <div className="flex flex-col gap-3 w-full">
          <div className="flex items-center justify-between px-4 py-3 bg-white/5 rounded-xl border border-white/5 text-sm">
            <span className="text-slate-500">Platform</span>
            <span className="text-slate-200 font-mono">FareOS v1.0</span>
          </div>
          <div className="flex items-center justify-between px-4 py-3 bg-white/5 rounded-xl border border-white/5 text-sm">
            <span className="text-slate-500">Status</span>
            <span className="text-accent1 font-mono">Desktop Only</span>
          </div>
        </div>

        <p className="mt-12 text-[10px] font-mono text-slate-600 uppercase tracking-[0.2em]">
          © 2026 FareOS. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default MobileFallback;
