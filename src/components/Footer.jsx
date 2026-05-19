import React from 'react';

const LOGO_WHITE = `${import.meta.env.BASE_URL}assets/community-house-logo-white.png`;

export default function Footer() {
  return (
    <footer className="py-16 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={LOGO_WHITE} alt="Community House Network" className="h-8 w-auto opacity-60" />
            <p className="text-sm text-foreground/40 text-center md:text-left max-w-sm">
              An organic church planting movement. Ministry in communities, homes, and everyday lives.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <nav className="flex gap-6">
              <a href="#about" className="text-sm text-foreground/40 hover:text-primary transition-colors">About</a>
              <a href="#network" className="text-sm text-foreground/40 hover:text-primary transition-colors">Network</a>
              <a href="#coaching" className="text-sm text-foreground/40 hover:text-primary transition-colors">Coaching</a>
              <a href="#connect" className="text-sm text-foreground/40 hover:text-primary transition-colors">Connect</a>
            </nav>
            <p className="text-xs text-foreground/30">
              © {new Date().getFullYear()} Community House Network. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
