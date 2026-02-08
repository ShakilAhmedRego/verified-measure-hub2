import React, { useState } from 'react';

/* ---------------- SVGs ---------------- */

const DataGridSVG = () => (
  <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M40 0L0 0 0 40" fill="none" stroke="rgba(196,200,206,0.3)" strokeWidth="0.5" />
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

/* ---------------- APP ---------------- */

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
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#C4C8CE]/60">
        <nav className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 h-20 sm:h-24 flex items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 bg-[#1e4fc7] rounded-xl flex items-center justify-center text-white font-bold">
              VM
            </div>
            <div>
              <div className="font-bold text-lg">VerifiedMeasure</div>
              <div className="text-[10px] uppercase tracking-widest text-[#3C414B]">
                DATA INFRASTRUCTURE
              </div>
            </div>
          </div>

          {/* Center Tabs — FIXED */}
          <div className="flex-1 flex justify-center min-w-0">
            <div className="flex gap-4 sm:gap-8 overflow-x-auto no-scrollbar px-4">
              {tabs.map(t => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`whitespace-nowrap font-medium ${
                    activeTab === t.id ? 'text-[#1e4fc7]' : 'text-[#3C414B]'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Login */}
          <div className="flex-shrink-0">
            <a
              href="https://verifiedmeasure-daas-v2.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 bg-[#1e4fc7] text-white rounded-xl font-semibold"
            >
              Login
            </a>
          </div>
        </nav>
      </header>

      {/* Tabs */}
      <main>
        {activeTab === 'home' && <HomeTab />}
        {activeTab === 'platform' && <PlatformTab />}
        {activeTab === 'databases' && <DatabasesTab />}
        {activeTab === 'security' && <SecurityTab />}
        {activeTab === 'about' && <AboutTab />}
        {activeTab === 'contact' && <ContactTab />}
      </main>

      {/* Footer */}
      <footer className="mt-24 bg-[#0D0F16] text-white py-12 text-center">
        © 2024 VerifiedMeasure
      </footer>
    </div>
  );
}

/* ---------------- TABS (ALL DEFINED) ---------------- */

function HomeTab() {
  return (
    <section className="relative py-24 px-6 max-w-[1600px] mx-auto">
      <DataNodesSVG />
      <h1 className="text-5xl font-bold mb-6">VerifiedMeasure</h1>
      <p className="text-xl max-w-3xl">
        Secure data infrastructure for controlled access, validation, and monetization.
      </p>
    </section>
  );
}

function PlatformTab() {
  return (
    <section className="py-24 px-6 max-w-[1600px] mx-auto">
      <h1 className="text-4xl font-bold mb-6">Platform</h1>
      <p className="max-w-3xl">
        Control plane for previewing, entitling, and auditing data access.
      </p>
    </section>
  );
}

function DatabasesTab() {
  return (
    <section className="py-24 px-6 max-w-[1600px] mx-auto">
      <h1 className="text-4xl font-bold mb-6">Databases</h1>
      <p className="max-w-3xl">
        Secure, governed access to validated datasets.
      </p>
    </section>
  );
}

function SecurityTab() {
  return (
    <section className="py-24 px-6 max-w-[1600px] mx-auto">
      <h1 className="text-4xl font-bold mb-6">Security</h1>
      <p className="max-w-3xl">
        Infrastructure-level controls for data access and accountability.
      </p>
    </section>
  );
}

function AboutTab() {
  return (
    <section className="py-24 px-6 max-w-[1600px] mx-auto">
      <h1 className="text-4xl font-bold mb-6">About</h1>
      <p className="max-w-3xl">
        Independent operation of controlled data environments.
      </p>
    </section>
  );
}

function ContactTab() {
  return (
    <section className="py-24 px-6 max-w-[1600px] mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <a
        href="mailto:contact@verifiedmeasure.com"
        className="text-[#1e4fc7] font-semibold"
      >
        contact@verifiedmeasure.com
      </a>
    </section>
  );
}
