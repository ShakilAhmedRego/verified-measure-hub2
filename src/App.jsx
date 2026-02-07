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
    <div className="min-h-screen bg-[#FCFCFD]">
      {/* Global Infrastructure Grid */}
      <div className="fixed inset-0 infra-grid pointer-events-none opacity-30" />
      
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-[#C4C8CE]/60">
        <nav className="max-w-[1600px] mx-auto px-12 h-24 flex items-center justify-between">
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

          {/* Navigation Links */}
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
            
            {/* Login CTA */}
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

      {/* Page Content */}
      <main className="relative">
        {activeTab === 'home' && <HomeTab />}
        {activeTab === 'platform' && <PlatformTab />}
        {activeTab === 'databases' && <DatabasesTab />}
        {activeTab === 'security' && <SecurityTab />}
        {activeTab === 'about' && <AboutTab />}
        {activeTab === 'contact' && <ContactTab />}
      </main>

      {/* Footer */}
      <footer className="relative mt-40 bg-[#0D0F16] border-t border-[#1e4fc7]/30 overflow-hidden">
        <DataNodesSVG />
        <div className="relative max-w-[1600px] mx-auto px-12 py-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#1e4fc7]/15 border border-[#1e4fc7]/30 rounded-lg flex items-center justify-center">
                <span className="font-['IBM_Plex_Mono'] font-bold text-[#1e4fc7] text-sm">VM</span>
              </div>
              <div>
                <div className="text-sm text-[#7D8492] font-['IBM_Plex_Mono']">&copy; 2024 VerifiedMeasure. All rights reserved.</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-[#1e4fc7]/10 border border-[#1e4fc7]/30 rounded-lg">
              <div className="w-2.5 h-2.5 bg-[#1e4fc7] rounded-full sys-pulse" />
              <span className="text-xs font-['IBM_Plex_Mono'] text-[#1e4fc7] uppercase tracking-wider">Systems Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomeTab() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white via-[#FAFBFC] to-white border-b border-[#C4C8CE]/40 overflow-hidden">
        <DataNodesSVG />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-[#1e4fc7]/8 to-transparent blur-3xl" />
        
        <div className="relative max-w-[1600px] mx-auto px-12 pt-32 pb-40">
          <div className="max-w-5xl">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#1e4fc7]/8 border border-[#1e4fc7]/25 rounded-full mb-10">
              <div className="w-2.5 h-2.5 bg-[#1e4fc7] rounded-full sys-pulse" />
              <span className="text-xs font-['IBM_Plex_Mono'] text-[#1e4fc7] uppercase tracking-[0.12em] font-semibold">
                Infrastructure Online
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-[88px] font-bold text-[#0D0F16] mb-8 tracking-[-0.02em] leading-[0.95]">
              VerifiedMeasure
            </h1>
            
            {/* Tagline */}
            <p className="text-[38px] font-semibold text-[#1e4fc7] mb-10 tracking-tight leading-tight">
              Personal Database That Works For You
            </p>
            
            {/* Description */}
            <p className="text-xl text-[#3C414B] leading-relaxed max-w-4xl mb-16">
              VerifiedMeasure designs and operates secure data environments used to evaluate, access, and monetize sensitive datasets—without leakage, misuse, or billing ambiguity.
            </p>
            
            {/* Live Metrics Bar */}
            <div className="flex gap-12 pt-10 border-t border-[#C4C8CE]/50">
              {[
                { label: 'Uptime', value: '99.99', unit: '%' },
                { label: 'Throughput', value: '10K+', unit: 'queries/sec' },
                { label: 'Latency', value: '<50', unit: 'ms' }
              ].map((metric, idx) => (
                <div key={idx} className="flex items-baseline gap-3">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-['IBM_Plex_Mono'] font-bold text-[#1e4fc7] metric-emphasis">
                      {metric.value}
                    </span>
                    <span className="text-lg font-['IBM_Plex_Mono'] text-[#3C414B] font-medium">
                      {metric.unit}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-[#7D8492] uppercase tracking-wider">{metric.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Content */}
      <section className="relative max-w-[1600px] mx-auto px-12 py-32">
        {/* Section Label */}
        <div className="inline-block px-4 py-1.5 bg-[#1e4fc7]/8 border border-[#1e4fc7]/20 rounded-md text-xs font-['IBM_Plex_Mono'] text-[#1e4fc7] uppercase tracking-[0.12em] mb-10 font-semibold">
          Core Infrastructure
        </div>
        
        {/* Heading */}
        <h2 className="text-6xl font-bold text-[#0D0F16] mb-8 tracking-tight max-w-5xl leading-tight">
          Validation Infrastructure for Capital Markets Operations
        </h2>
        
        {/* Body Content */}
        <div className="max-w-5xl space-y-6 mb-20">
          <p className="text-2xl text-[#3C414B] leading-relaxed">
            Capital markets and data-driven organizations depend on accurate, traceable, and governed datasets.
          </p>
          <p className="text-lg text-[#3C414B] leading-relaxed">
            VerifiedMeasure provides controlled Data-as-a-Service infrastructure that allows datasets to be previewed, entitled, audited, and distributed safely before they are relied upon in operational or decision-making contexts.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-8">
          {[
            {
              metric: '100%',
              label: 'Auditable',
              icon: '📋',
              detail: 'Complete action logging',
              pattern: 'audit'
            },
            {
              metric: 'Zero',
              label: 'Leakage',
              icon: '🔒',
              detail: 'Row-level security enforced',
              pattern: 'security'
            },
            {
              metric: 'Full',
              label: 'Traceability',
              icon: '🔍',
              detail: 'End-to-end audit trails',
              pattern: 'trace'
            }
          ].map((stat, idx) => (
            <div key={idx} className="group relative">
              <div className="card-enterprise bg-white rounded-3xl p-12 h-full relative overflow-hidden">
                {/* Pattern Background */}
                {stat.pattern === 'audit' && (
                  <div className="absolute inset-0 opacity-[0.03]">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="absolute left-8 right-8 border-b border-[#1e4fc7]" 
                           style={{ top: `${(i + 1) * 8}%` }} />
                    ))}
                  </div>
                )}
                {stat.pattern === 'security' && (
                  <div className="absolute inset-0 security-rings" />
                )}
                {stat.pattern === 'trace' && (
                  <div className="absolute inset-0 infra-grid opacity-40" />
                )}
                
                {/* Content */}
                <div className="relative">
                  <div className="text-6xl mb-6">{stat.icon}</div>
                  <div className="text-7xl font-['IBM_Plex_Mono'] font-bold text-[#1e4fc7] mb-4 metric-emphasis tracking-tight">
                    {stat.metric}
                  </div>
                  <div className="text-base font-bold text-[#0D0F16] uppercase tracking-[0.08em] mb-3">
                    {stat.label}
                  </div>
                  <div className="text-sm font-['IBM_Plex_Mono'] text-[#3C414B]">
                    {stat.detail}
                  </div>
                </div>
                
                {/* Accent Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1e4fc7] via-[#1e4fc7]/80 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function PlatformTab() {
  return (
    <>
      {/* Platform Hero */}
      <section className="relative bg-gradient-to-b from-white to-[#FAFBFC] border-b border-[#C4C8CE]/40">
        <DataNodesSVG />
        <div className="relative max-w-[1600px] mx-auto px-12 py-32">
          <div className="inline-block px-4 py-1.5 bg-[#1e4fc7]/8 border border-[#1e4fc7]/20 rounded-md text-xs font-['IBM_Plex_Mono'] text-[#1e4fc7] uppercase tracking-[0.12em] mb-10 font-semibold">
            Control Plane
          </div>
          <h1 className="text-7xl font-bold text-[#0D0F16] mb-8 tracking-tight">
            The VerifiedMeasure Platform
          </h1>
          <p className="text-3xl text-[#3C414B] max-w-4xl leading-relaxed">
            A control plane for previewing, entitling, and auditing data access
          </p>
        </div>
      </section>

      {/* Design Principles */}
      <section className="relative max-w-[1600px] mx-auto px-12 py-32">
        <h3 className="text-4xl font-bold text-[#0D0F16] mb-14 tracking-tight">Platform Design Principles</h3>
        
        <div className="grid grid-cols-5 gap-5">
          {[
            { principle: 'Database-level security (RLS)', icon: '🔒' },
            { principle: 'Explicit entitlement over implied access', icon: '🔑' },
            { principle: 'Ledger-based credit accounting', icon: '💳' },
            { principle: 'Identity-attributed actions', icon: '👤' },
            { principle: 'Full auditability', icon: '📊' }
          ].map((item, idx) => (
            <div key={idx} className="group">
              <div className="card-enterprise bg-white rounded-2xl p-8 h-full relative">
                <div className="text-4xl mb-6">{item.icon}</div>
                <div className="font-['IBM_Plex_Mono'] text-[15px] text-[#3C414B] leading-relaxed">
                  {item.principle}
                </div>
                <div className="absolute top-3 right-3 w-2 h-2 bg-[#1e4fc7] rounded-full sys-pulse opacity-0 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Control Plane Components */}
      <section className="relative max-w-[1600px] mx-auto px-12 pb-32">
        <h2 className="text-5xl font-bold text-[#0D0F16] mb-6 tracking-tight">Platform Control Plane</h2>
        <p className="text-xl text-[#3C414B] mb-16">Backend infrastructure components</p>

        <div className="grid grid-cols-2 gap-8">
          <ControlPlaneCard
            icon="🔑"
            title="Entitlements"
            content="User access is governed by explicit entitlement records tied to identity. Access is never inferred from visibility."
            visual="circles"
          />
          <ControlPlaneCard
            icon="💳"
            title="Credits"
            content="Consumption is tracked using an append-only credit ledger. Credits are debited only on new entitlements, never retroactively modified."
            visual="ledger"
          />
          <ControlPlaneCard
            icon="📋"
            title="Audit"
            content="Every sensitive action generates an immutable audit event including actor, timestamp, and metadata."
            visual="grid"
          />
          <ControlPlaneCard
            icon="⚙️"
            title="Admin Controls"
            content="Administrative operations are isolated and gated through hardened controls. Elevated privileges never exist in runtime flows."
            visual="lock"
          />
        </div>
      </section>
    </>
  );
}

function ControlPlaneCard({ icon, title, content, visual }) {
  return (
    <div className="group relative">
      <div className="card-enterprise bg-white rounded-3xl p-12 h-full overflow-hidden">
        {/* Visual Pattern */}
        {visual === 'circles' && (
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="70" stroke="#1e4fc7" strokeWidth="1" fill="none" />
            <circle cx="100" cy="100" r="50" stroke="#1e4fc7" strokeWidth="1" fill="none" />
            <circle cx="100" cy="100" r="30" stroke="#1e4fc7" strokeWidth="1" fill="none" />
          </svg>
        )}
        {visual === 'ledger' && (
          <div className="absolute inset-0 opacity-[0.04]">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="absolute left-8 right-8 border-b border-[#1e4fc7]" 
                   style={{ top: `${(i + 1) * 10}%` }} />
            ))}
          </div>
        )}
        {visual === 'grid' && (
          <div className="absolute inset-0 infra-grid opacity-30" />
        )}
        {visual === 'lock' && (
          <div className="absolute inset-0 opacity-[0.04]">
            <div className="absolute inset-12 border-2 border-dashed border-[#1e4fc7] rounded-2xl" />
          </div>
        )}
        
        {/* Content */}
        <div className="relative">
          <div className="flex items-start gap-5 mb-8">
            <div className="w-16 h-16 bg-[#1e4fc7]/10 border border-[#1e4fc7]/25 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
              {icon}
            </div>
            <div>
              <h4 className="text-2xl font-bold text-[#0D0F16] mb-1.5">{title}</h4>
              <div className="text-xs font-['IBM_Plex_Mono'] text-[#1e4fc7] uppercase tracking-[0.12em]">
                Core Component
              </div>
            </div>
          </div>
          <p className="text-base text-[#3C414B] leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
}

function DatabasesTab() {
  return (
    <>
      {/* Databases Hero */}
      <section className="relative bg-gradient-to-b from-white to-[#FAFBFC] border-b border-[#C4C8CE]/40">
        <DataNodesSVG />
        <div className="relative max-w-[1600px] mx-auto px-12 py-32">
          <div className="inline-block px-4 py-1.5 bg-[#1e4fc7]/8 border border-[#1e4fc7]/20 rounded-md text-xs font-['IBM_Plex_Mono'] text-[#1e4fc7] uppercase tracking-[0.12em] mb-10 font-semibold">
            Data Access
          </div>
          <h1 className="text-7xl font-bold text-[#0D0F16] mb-8 tracking-tight">Databases</h1>
          <p className="text-3xl text-[#3C414B] max-w-4xl leading-relaxed">
            Secure, governed access to validated datasets
          </p>
        </div>
      </section>

      {/* Access Model */}
      <section className="relative max-w-[1600px] mx-auto px-12 py-32">
        <h2 className="text-5xl font-bold text-[#0D0F16] mb-16 tracking-tight">Dataset Access Model</h2>

        <div className="space-y-8">
          <AccessTier
            title="Preview Access"
            description="Authenticated users may preview schema, metadata, and limited sample rows. Preview does not imply ownership and does not consume credits."
            level={1}
            icon="👁️"
          />
          <AccessTier
            title="Entitled Access"
            description="Full query access is granted only through explicit entitlement records. Row-level security, credit-based metering, and audit logging are enforced."
            level={2}
            icon="✓"
          />
          <AccessTier
            title="Distributed Access"
            description="Entitled users may export or distribute data through controlled channels. Usage is attributed, revocable, and compliance-reportable."
            level={3}
            icon="⚡"
          />
        </div>
      </section>
    </>
  );
}

function AccessTier({ title, description, level, icon }) {
  return (
    <div className="group">
      <div className="card-enterprise bg-white rounded-3xl p-12">
        <div className="flex items-start gap-8">
          {/* Icon */}
          <div className="w-24 h-24 bg-gradient-to-br from-[#1e4fc7]/15 to-[#1e4fc7]/5 border border-[#1e4fc7]/30 rounded-3xl flex items-center justify-center text-4xl flex-shrink-0">
            {icon}
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-5 mb-6">
              <h3 className="text-3xl font-bold text-[#0D0F16]">{title}</h3>
              <span className="px-4 py-1.5 bg-[#1e4fc7]/10 border border-[#1e4fc7]/25 rounded-full text-sm font-['IBM_Plex_Mono'] text-[#1e4fc7] font-semibold">
                Level {level}
              </span>
            </div>
            <p className="text-lg text-[#3C414B] leading-relaxed">{description}</p>
          </div>
          
          {/* Level Indicators */}
          <div className="flex flex-col gap-3">
            {[1, 2, 3].map((tierLevel) => (
              <div 
                key={tierLevel}
                className={`w-3 h-3 rounded-full transition-all ${
                  level >= tierLevel ? 'bg-[#1e4fc7] sys-pulse' : 'bg-[#C4C8CE]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SecurityTab() {
  const features = [
    {
      icon: '🔒',
      title: 'Database-enforced RLS',
      description: 'Row-level security is enforced directly at the database layer. Access rules apply regardless of application behavior.'
    },
    {
      icon: '🔑',
      title: 'No service-role keys in runtime',
      description: 'No privileged service-role keys are used in runtime application flows. All operations execute under authenticated user identity.'
    },
    {
      icon: '📋',
      title: 'Explicit entitlement records',
      description: 'All access grants are recorded as explicit entitlement events. No implicit or inherited permissions exist.'
    },
    {
      icon: '📊',
      title: 'Append-only credit ledger',
      description: 'Credits are tracked through an append-only ledger. All usage is reconstructible and dispute-resistant.'
    }
  ];

  return (
    <>
      {/* Security Hero */}
      <section className="relative bg-gradient-to-b from-white to-[#FAFBFC] border-b border-[#C4C8CE]/40">
        <DataNodesSVG />
        <div className="relative max-w-[1600px] mx-auto px-12 py-32">
          <div className="inline-block px-4 py-1.5 bg-[#1e4fc7]/8 border border-[#1e4fc7]/20 rounded-md text-xs font-['IBM_Plex_Mono'] text-[#1e4fc7] uppercase tracking-[0.12em] mb-10 font-semibold">
            Trust Layer
          </div>
          <h1 className="text-7xl font-bold text-[#0D0F16] mb-8 tracking-tight">Security</h1>
          <p className="text-3xl text-[#3C414B] max-w-4xl leading-relaxed">
            Infrastructure-level controls for data access and accountability
          </p>
        </div>
      </section>

      {/* Security Features */}
      <section className="relative max-w-[1600px] mx-auto px-12 py-32">
        <div className="grid grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group">
              <div className="card-enterprise bg-white rounded-3xl p-12 h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1e4fc7] via-[#1e4fc7]/60 to-transparent" />
                
                <div className="w-20 h-20 bg-gradient-to-br from-[#1e4fc7]/15 to-[#1e4fc7]/5 border border-[#1e4fc7]/30 rounded-3xl flex items-center justify-center text-4xl mb-8">
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-[#0D0F16] mb-5">{feature.title}</h3>
                <p className="text-base text-[#3C414B] leading-relaxed">{feature.description}</p>
                
                <div className="absolute bottom-6 right-6 w-3 h-3 bg-[#1e4fc7] rounded-full sys-pulse" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function AboutTab() {
  return (
    <>
      {/* About Hero */}
      <section className="relative bg-gradient-to-b from-white to-[#FAFBFC] border-b border-[#C4C8CE]/40">
        <DataNodesSVG />
        <div className="relative max-w-[1600px] mx-auto px-12 py-32">
          <div className="inline-block px-4 py-1.5 bg-[#1e4fc7]/8 border border-[#1e4fc7]/20 rounded-md text-xs font-['IBM_Plex_Mono'] text-[#1e4fc7] uppercase tracking-[0.12em] mb-10 font-semibold">
            Company
          </div>
          <h1 className="text-7xl font-bold text-[#0D0F16] mb-8 tracking-tight">About</h1>
          <p className="text-3xl text-[#3C414B] max-w-4xl leading-relaxed">
            Independent operation of controlled data environments
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="relative max-w-[1600px] mx-auto px-12 py-32">
        <div className="max-w-5xl mb-24">
          <div className="space-y-8 text-xl text-[#3C414B] leading-relaxed">
            <p>
              VerifiedMeasure is an independent operator of controlled data environments, with roots in validation, quality assurance, and governance of sensitive information systems.
            </p>
            <p>
              We build infrastructure for organizations that require traceable, auditable, and secure access to datasets used in operational and decision-making contexts.
            </p>
          </div>
        </div>

        {/* Our Approach */}
        <div className="card-enterprise bg-white rounded-[3rem] p-16">
          <h2 className="text-5xl font-bold text-[#0D0F16] mb-20 tracking-tight text-center">Our Approach</h2>
          
          <div className="grid grid-cols-3 gap-12">
            {[
              {
                icon: '⚙️',
                title: 'Infrastructure-first',
                desc: 'We build platforms, not services. Our focus is on secure, reliable infrastructure.'
              },
              {
                icon: '🔍',
                title: 'Validation-rooted',
                desc: 'Our expertise comes from years of data quality assurance and verification work.'
              },
              {
                icon: '🎯',
                title: 'Purpose-built',
                desc: 'Every component is designed for controlled access and complete auditability.'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-28 h-28 mx-auto mb-8 bg-gradient-to-br from-[#1e4fc7]/15 to-[#1e4fc7]/5 border border-[#1e4fc7]/30 rounded-3xl flex items-center justify-center text-5xl transition-transform group-hover:scale-110 duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0D0F16] mb-4">{item.title}</h3>
                <p className="text-base text-[#3C414B] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactTab() {
  return (
    <>
      {/* Contact Hero */}
      <section className="relative bg-gradient-to-b from-white to-[#FAFBFC] border-b border-[#C4C8CE]/40">
        <DataNodesSVG />
        <div className="relative max-w-[1600px] mx-auto px-12 py-32">
          <div className="inline-block px-4 py-1.5 bg-[#1e4fc7]/8 border border-[#1e4fc7]/20 rounded-md text-xs font-['IBM_Plex_Mono'] text-[#1e4fc7] uppercase tracking-[0.12em] mb-10 font-semibold">
            Get Started
          </div>
          <h1 className="text-7xl font-bold text-[#0D0F16] mb-8 tracking-tight">Contact</h1>
          <p className="text-3xl text-[#3C414B] max-w-4xl leading-relaxed">
            Inquiries from qualified teams
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative max-w-[1200px] mx-auto px-12 py-32">
        <div className="card-enterprise bg-white rounded-[3rem] p-20 text-center">
          <div className="w-28 h-28 mx-auto mb-12 bg-gradient-to-br from-[#1e4fc7]/15 to-[#1e4fc7]/5 border border-[#1e4fc7]/30 rounded-3xl flex items-center justify-center text-5xl">
            ✉️
          </div>
          
          <h2 className="text-5xl font-bold text-[#0D0F16] mb-12 tracking-tight">Get in Touch</h2>
          
          <div className="space-y-6 text-lg text-[#3C414B] leading-relaxed mb-16 max-w-3xl mx-auto">
            <p>
              VerifiedMeasure works with teams operating or preparing data-driven workflows, including capital raises and proprietary dataset monetization.
            </p>
            <p>
              If your use case falls outside this scope, we may not be a fit.
            </p>
          </div>
          
          <a
            href="mailto:contact@verifiedmeasure.com"
            className="inline-flex items-center gap-4 px-12 py-6 bg-[#1e4fc7] text-white font-semibold text-xl rounded-2xl hover:bg-[#1a45b3] transition-all shadow-xl shadow-[#1e4fc7]/20 hover:shadow-2xl hover:shadow-[#1e4fc7]/30"
          >
            <span>contact@verifiedmeasure.com</span>
            <span className="text-2xl">→</span>
          </a>
        </div>

        <div className="mt-16 text-center">
          <p className="text-base text-[#3C414B]">
            We typically respond to qualified inquiries within 1–2 business days.
          </p>
        </div>
      </section>
    </>
  );
}
