import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HERO_IMAGE = `${import.meta.env.BASE_URL}assets/hero-community-table.png`;

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Diverse community gathering around a table sharing a meal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24 pt-40 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-px bg-primary" />
            <span className="text-sm tracking-[0.2em] uppercase text-primary font-medium">
              Community House Network
            </span>
          </motion.div>

          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-tight mb-8">
            Every Block
            <br />
            <span className="italic text-primary">Needs</span> a House
            <br />
            <span className="italic text-primary">Like This.</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/60 max-w-lg leading-relaxed mb-12 font-light">
            A network of church planters turning neighborhoods into communities —
            one house, one table, one neighbor at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#network"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full text-center hover:bg-primary/90 transition-all duration-300 animate-glow"
            >
              Enter the Network
            </a>
            <a
              href="#coaching"
              className="px-8 py-4 border border-foreground/20 text-foreground font-medium rounded-full text-center hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              Explore Coaching
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-foreground/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
