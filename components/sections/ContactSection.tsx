import React from 'react';

const telegramQr = new URL('./qr/telegram.svg', import.meta.url).href;
const twitterQr = new URL('./qr/twitter.svg', import.meta.url).href;
const instagramQr = new URL('./qr/instagram.svg', import.meta.url).href;

const SocialCard = ({ name, url, delay, imgSrc }: { name: string, url: string, delay: number, imgSrc: string }) => (
  <div 
    className="flex flex-col items-center gap-4 animate-slide-up"
    style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
  >
    <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border border-white/10 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,112,187,0.3)] hover:border-accent1/50 bg-white/5 p-3">
      <img 
        src={imgSrc}
        alt={`${name} QR`}
        className="w-full h-full object-cover p-2 bg-white rounded-lg"
      />
    </div>
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent1/50 text-slate-200 font-mono text-sm uppercase tracking-widest rounded-md transition-all duration-300 hover:text-white group"
    >
      {name}
      <span className="inline-block ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
    </a>
  </div>
);

const ContactSection: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 relative">
      {/* Copyright */}
      <div className="absolute top-0 right-0 p-6 z-20 pointer-events-none">
        <span className="font-mono text-[10px] text-slate-500/70 tracking-widest uppercase hidden sm:block text-right">
          © Fare 2026. All rights reserved.
        </span>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-4xl font-heading text-white mb-2">Let's Connect</h2>
        <p className="text-slate-400 font-mono text-sm">Scan to reach out</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24 mb-16">
        <SocialCard name="Telegram" url="https://t.me/fareeditor" delay={100} imgSrc={telegramQr} />
        <SocialCard name="X (Twitter)" url="https://x.com/FareEditor" delay={200} imgSrc={twitterQr} />
        <SocialCard name="Instagram" url="https://www.instagram.com/fareeditor/" delay={300} imgSrc={instagramQr} />
      </div>

      <a 
        href="#" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative inline-block group px-8 py-4 bg-gradient-to-r from-accent1 to-accent2 rounded-lg font-heading text-white shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
        <span className="relative z-10 flex items-center gap-2">
          Join My Community
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        </span>
      </a>
    </div>
  );
};

export default ContactSection;