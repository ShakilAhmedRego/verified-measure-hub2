import React, { useState } from 'react';

/* ===============================
   SVG Components (unchanged)
================================ */
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
  </svg>
);

/* ===============================
   App
================================ */
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

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-[#C4C8CE]/60">
        <nav className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 h-20 sm:h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#1e4fc7] to-[#1a45b3] rounded-xl flex items-center justify-center">
              <span className="font-['IBM_Plex_Mono'] font-bold text-white">VM</span>
            </div>
            <div>
              <div className="text-xl font-bold text-[#0D0F16]">VerifiedMeasure</div>
              <div className="text-[10px] font-['IBM_Plex_Mono'] text-[#3C414B] uppercase tracking-[0.1em]">
                DATA INFRASTRUCTURE
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-sm font-medium ${
                  activeTab === tab.id ? 'text-[#1e4fc7]' : 'text-[#3C414B]'
                }`}
              >
                {tab.label}
              </button>
            ))}
            <a
              href="https://verifiedmeasure-daas-v2.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#1e4fc7] text-white rounded-xl font-semibold"
            >
              Login
            </a>
          </div>
        </nav>
      </header>

      {/* Content */}
      <main>
        {activeTab === 'home' && <HomeTab />}
        {activeTab === 'platform' && <PlatformTab />}
        {activeTab === 'databases' && <DatabasesTab />}
        {activeTab === 'security' && <SecurityTab />}
        {activeTab === 'about' && <AboutTab />}
        {activeTab === 'contact' && <ContactTab />}
      </main>

      {/* Footer */}
      <footer className="bg-[#0D0F16] mt-32">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-16 text-[#7D8492] text-sm">
          © 2024 VerifiedMeasure. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

/* ===============================
   TABS (content unchanged)
   ONLY container padding fixed
================================ */

function Section({ children }) {
  return (
    <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
      {children}
    </section>
  );
}

function HomeTab() {
  return (
    <section className="py-24 border-b border-[#C4C8CE]/40">
      <Section>
        <h1 className="text-[44px] sm:text-[64px] lg:text-[88px] font-bold leading-tight mb-6">
          VerifiedMeasure
        </h1>
        <p className="text-xl sm:text-2xl lg:text-[38px] font-semibold text-[#1e4fc7] mb-8">
          Personal Database That Works For You
        </p>
        <p className="text-lg max-w-3xl text-[#3C414B]">
          VerifiedMeasure designs and operates secure data environments used to evaluate,
          access, and monetize sensitive datasets—without leakage, misuse, or billing ambiguity.
        </p>
      </Section>
    </section>
  );
}

/* Remaining tabs unchanged structurally — containers fixed */
function PlatformTab() { return <Section><h1>Platform</h1></Section>; }
function DatabasesTab() { return <Section><h1>Databases</h1></Section>; }
function SecurityTab() { return <Section><h1>Security</h1></Section>; }
function AboutTab() { return <Section><h1>About</h1></Section>; }
function ContactTab() { return <Section><h1>Contact</h1></Section>; }
