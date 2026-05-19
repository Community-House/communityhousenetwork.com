import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Target, Compass, Lightbulb } from 'lucide-react';

const COACH_IMAGE = `${import.meta.env.BASE_URL}assets/michael-parenti-coaching.png`;

const COACHING_FEATURES = [
  {
    icon: Compass,
    title: 'Visionary Clarity',
    description: 'Develop a clear, Spirit-led vision for your church plant and the community you serve.',
  },
  {
    icon: Target,
    title: 'Strategic Planning',
    description: 'Build practical, sustainable models for organic church growth that fit your unique context.',
  },
  {
    icon: MessageCircle,
    title: 'Personal Mentorship',
    description: 'One-on-one guidance rooted in years of real-world church planting experience.',
  },
  {
    icon: Lightbulb,
    title: 'Leadership Development',
    description: 'Grow as a servant leader who multiplies disciples and empowers community.',
  },
];

export default function CoachingSection() {
  return (
    <section id="coaching" className="relative py-32 overflow-hidden">
      {/* Subtle background shift */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="w-12 h-px bg-primary" />
          <span className="text-sm tracking-[0.2em] uppercase text-primary font-medium">
            Coaching
          </span>
        </motion.div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={COACH_IMAGE}
                alt="Michael Parenti — Church Planting Coach"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-6 py-4">
              <p className="font-playfair text-lg italic text-primary">Michael Parenti</p>
              <p className="text-sm text-foreground/50">Church Planting Coach</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-medium leading-tight mb-6">
              Personalized coaching
              <br />
              <span className="italic text-primary">for church planters.</span>
            </h2>

            <div className="bg-muted/50 border border-border/50 rounded-xl px-6 py-4 mb-8">
              <p className="text-sm text-secondary font-medium">
                ✦ Available independently — no network membership required
              </p>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed mb-10">
              Michael Parenti has lived the Community House vision from the ground up —
              moving his family into a neighborhood in Lansing, Illinois, knocking on
              doors, organizing soccer games, and watching God turn strangers into a
              community. Now he comes alongside church planters and ministry leaders at
              every stage — from vision to launch to multiplication — with the kind of
              coaching that is rooted in real experience, deep faith, and genuine care
              for the people you are called to reach.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {COACHING_FEATURES.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">{feature.title}</h4>
                    <p className="text-foreground/50 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#connect"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 animate-glow"
            >
              Request Coaching
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
