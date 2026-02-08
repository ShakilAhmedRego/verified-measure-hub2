import React, { useState } from 'react';

// SVG Components for Visual Elements
const DataGridSVG = () => (
  <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(196,200,206,0.3)" strokeWidth="0.5"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);

const DataNodesSVG = () => (
  <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15%" cy="25%" r="3" fill="#1e4fc7" opacity="0.15" />
    <circle cx="85%" cy="35%" r="3" fill="#1e4fc7" opacity="0.15" />
    <circle cx="45%" cy="65%" r="3" fill="#1e4fc7" opacity="0.15" />
    <circle cx="70%" cy="80%" r="3" fill="#1e4fc7" opacity="0.15" />
    <circle cx="30%" cy="50%" r="3" fill="#1e4fc7" opacity="0.15" />
    <line x1="15%" y1="25%" x2="30%" y2="50%" stroke="#1e4fc7" strokeWidth="0.5" opacity="0.1" />
    <line x1="30%" y1="50%" x2="45%" y2="65%" stroke="#1e4fc7" strokeWidth="0.5" opacity="0.1" />
    <line x1="45%" y1="65%" x2="70%" y2="80%" stroke="#1e4fc7" strokeWidth="0.5" opacity="0.1" />
    <line x1="85%" y1="35%" x2="70%" y2="80%" stroke="#1e4fc7" strokeWidth="0.5" opacity="0.1" />
  </svg>
);

export default function VerifiedMeasure() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'platform', label: 'Platform' },
    { id: 'databases', label: 'Databases' },
    { id: 'security', label: 'Security' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-[#FCFCFD] overflow-x-hidden">
      <div className="fixed inset-0 infra-grid pointer-events-none opacity-30" />

      <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-[#C4C8CE]/60">
        <nav className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 h-20 sm:h-24 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1e4fc7] via-[#1a45b3] to-[#1e4fc7] rounded-xl flex items-center justify-center shadow-lg shadow-[#1e4fc7]/20">
                <span className="font-['IBM_Plex_Mono'] font-bold text-white text-base">VM</span>
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-[#1e4fc7] rounded-full sys-pulse border-2 border-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-[#0D0F16] tracking-tight leading-none">VerifiedMeasure</div>
              <div className="text-[10px] font-['IBM_Plex_Mono'] text-[#3C414B] uppercase tracking-[0.1em] mt-0.5">
                DATA INFRASTRUCTURE
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-12">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative font-medium text-[15px] transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'text-[#1e4fc7]'
                    : 'text-[#3C414B] hover:text-[#1e4fc7]'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute -bottom-6 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#1e4fc7] to-transparent" />
                )}
              </button>
            ))}

            <a
              href="https://verifiedmeasure-daas-v2.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group px-8 py-3.5 bg-[#1e4fc7] text-white font-semibold text-[15px] rounded-xl overflow-hidden shadow-lg shadow-[#1e4fc7]/25 hover:shadow-xl hover:shadow-[#1e4fc7]/30 transition-all"
            >
              <span className="relative z-10">Login</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a45b3] to-[#1e4fc7] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </nav>
      </header>

      <main className="relative">
        {activeTab === 'home' && <HomeTab />}
        {activeTab === 'platform' && <PlatformTab />}
        {activeTab === 'databases' && <DatabasesTab />}
        {activeTab === 'security' && <SecurityTab />}
        {activeTab === 'about' && <AboutTab />}
        {activeTab === 'contact' && <ContactTab />}
      </main>

      <footer className="relative mt-40 bg-[#0D0F16] border-t border-[#1e4fc7]/30 overflow-hidden">
        <DataNodesSVG />
        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#1e4fc7]/15 border border-[#1e4fc7]/30 rounded-lg flex items-center justify-center">
                <span className="font-['IBM_Plex_Mono'] font-bold text-[#1e4fc7] text-sm">VM</span>
              </div>
              <div className="text-sm text-[#7D8492] font-['IBM_Plex_Mono']">
                &copy; 2024 VerifiedMeasure. All rights reserved.
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-[#1e4fc7]/10 border border-[#1e4fc7]/30 rounded-lg">
              <div className="w-2.5 h-2.5 bg-[#1e4fc7] rounded-full sys-pulse" />
              <span className="text-xs font-['IBM_Plex_Mono'] text-[#1e4fc7] uppercase tracking-wider">
                Systems Operational
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
