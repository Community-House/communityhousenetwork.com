import React from 'react';
import { motion } from 'framer-motion';

const PARK_IMAGE = `${import.meta.env.BASE_URL}assets/community-park.png`;
const BREAD_IMAGE = `${import.meta.env.BASE_URL}assets/breaking-bread.png`;

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="w-12 h-px bg-secondary" />
          <span className="text-sm tracking-[0.2em] uppercase text-secondary font-medium">
            What We Believe
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8">
              One house.
              <br />
              <span className="italic text-primary">One table.</span>
              <br />
              One neighbor
              <br />
              <span className="italic text-primary">at a time.</span>
            </h2>
            <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
              <p>
                Community House began as a God-given vision — to launch a ministry out of a home,
                for neighbors, by neighbors. A place where people could come and gather,
                build authentic community, celebrate their diversity, and experience
                transformation through Jesus Christ.
              </p>
              <p>
                It started with a simple prayer: <em className="text-foreground/90">"God, where should we go?"</em> After
                days of driving the Chicagoland area seeking direction, God answered at a stop sign
                in Lansing, Illinois — a southern suburb of Chicago. The Holy Spirit said, <em className="text-foreground/90">"Here."</em>
              </p>
              <p>
                In the first 60 days, the goal was to meet one new neighbor every day.
                God exceeded that — over 150 people met in two months. Meals shared.
                Soccer games organized. Ice cream parties. Baby showers. A neighborhood
                Christmas gathering. God was turning a neighborhood into a community.
              </p>
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="overflow-hidden rounded-2xl group">
                <img
                  src={PARK_IMAGE}
                  alt="Community gathering in a park at sunset"
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/10 rounded-2xl" />
              </div>
              <div className="overflow-hidden rounded-2xl mt-4 ml-12 -mr-4 group">
                <img
                  src={BREAD_IMAGE}
                  alt="Hands breaking bread together"
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/10 rounded-2xl" />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border border-primary/20 rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 border border-secondary/20 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
