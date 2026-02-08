import React, { useState } from 'react';

/* =======================
   SVG BACKGROUNDS
======================= */
const DataGridSVG = () => (
  <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(196,200,206,0.3)" strokeWidth="0.5" />
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

/* =======================
   APP ROOT
======================= */
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

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-[#C4C8CE]/60">
        <nav className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 h-20 sm:h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#1e4fc7] via-[#1a45b3] to-[#1e4fc7] rounded-xl flex items-center justify-center">
              <span className="font-['IBM_Plex_Mono'] font-bold text-white">VM</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#0D0F16]">VerifiedMeasure</div>
              <div className="text-[10px] font-['IBM_Plex_Mono'] text-[#3C414B] uppercase tracking-[0.1em]">
                DATA INFRASTRUCTURE
              </div>
            </div>
          </div>

          <div className="flex items-center gap-12">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative text-[15px] ${
                  activeTab === tab.id ? 'text-[#1e4fc7]' : 'text-[#3C414B] hover:text-[#1e4fc7]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* CONTENT */}
      <main>
        {activeTab === 'home' && <HomeTab />}
        {activeTab === 'platform' && <PlatformTab />}
        {activeTab === 'databases' && <DatabasesTab />}
        {activeTab === 'security' && <SecurityTab />}
        {activeTab === 'about' && <AboutTab />}
        {activeTab === 'contact' && <ContactTab />}
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0D0F16] mt-40">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-16 text-[#7D8492]">
          © 2024 VerifiedMeasure. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

/* =======================
   TABS (ALL PRESENT)
======================= */

function HomeTab() {
  return (
    <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-32">
      <h1 className="text-[44px] sm:text-[64px] lg:text-[88px] font-bold text-[#0D0F16]">
        VerifiedMeasure
      </h1>
      <p className="text-xl sm:text-2xl lg:text-[38px] text-[#1e4fc7] mt-6">
        Personal Database That Works For You
      </p>
    </section>
  );
}

function PlatformTab() {
  return <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-32">Platform</section>;
}
function DatabasesTab() {
  return <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-32">Databases</section>;
}
function SecurityTab() {
  return <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-32">Security</section>;
}
function AboutTab() {
  return <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-32">About</section>;
}
function ContactTab() {
  return <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-32">Contact</section>;
}
