import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Target, Compass, Lightbulb } from 'lucide-react';

const COACH_IMAGE = `${import.meta.env.BASE_URL}assets/michael-parenti-coaching.png`;

const COACHING_FEATURES = [
  {
    icon: Compass,
    title: 'Intentional Neighboring',
    description: 'Learn practical ways to build relationships, create community, and become a positive presence where God has placed you.',
  },
  {
    icon: Target,
    title: 'Community Impact',
    description: 'Discover how small, consistent actions can strengthen neighborhoods, combat loneliness, and foster belonging.',
  },
  {
    icon: MessageCircle,
    title: 'Personal Coaching',
    description: 'Receive individualized support, encouragement, and accountability as you pursue your goals and calling.',
  },
  {
    icon: Lightbulb,
    title: 'Leadership Growth',
    description: 'Strengthen your ability to influence others, lead with purpose, and inspire meaningful change in your community.',
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
          <span className="text-base tracking-[0.2em] uppercase text-primary font-medium">
            Coaching
          </span>
        </motion.div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Portrait + Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10"
          >
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={COACH_IMAGE}
                  alt="Michael Parenti — Community Development Coach"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-6 py-4">
                <p className="font-playfair text-lg italic text-primary">Michael Parenti</p>
                <p className="text-sm text-foreground/50">Community Development Coach</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
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
                    <p className="text-foreground/50 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
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
              <span className="italic text-primary">for greater impact.</span>
            </h2>

            <div className="bg-muted/50 border border-border/50 rounded-xl px-6 py-4 mb-8">
              <p className="text-sm text-secondary font-medium">
                ✦ Available independently — no network membership required
              </p>
            </div>

            <div className="text-lg text-foreground/70 leading-relaxed mb-10 space-y-5">
              <p>
                Michael Parenti believes that God uses ordinary people to do extraordinary things through intentional relationships, faithful presence, and community. As a certified coach and trainer with the John Maxwell Leadership Team, he helps people move from inspiration to action.
              </p>
              <p>
                Michael's coaching is rooted in real-life experience. From helping transform a neighborhood through intentional neighboring to serving in ministry, leadership, and community development, he understands both the opportunities and challenges that come with pursuing meaningful impact.
              </p>
              <p>
                Whether you want to become a better neighbor, strengthen your leadership, launch a ministry, build community, or gain greater clarity in your personal and professional life, coaching provides a space to grow, develop a plan, and stay accountable to your goals.
              </p>
              <p>
                If you're ready to take your impact to the next level, click "Request Coaching" to learn more or begin the conversation.
              </p>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfi7bxkrq4WLH36TRt9x8NMnfmNwKEqvukUAaB3JXPRwUgzRg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
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
