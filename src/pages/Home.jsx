import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import NetworkSection from '../components/NetworkSection';
import CoachingSection from '../components/CoachingSection';
import ConnectSection from '../components/ConnectSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <NetworkSection />
      <CoachingSection />
      <ConnectSection />
      <Footer />
    </div>
  );
}