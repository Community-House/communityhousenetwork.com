import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const STUDY_IMAGE = `${import.meta.env.BASE_URL}assets/living-room-gathering.png`;

export default function ConnectSection() {
  return (
    <section id="connect" className="relative py-32 overflow-hidden bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden group order-2 lg:order-1"
          >
            <img
              src={STUDY_IMAGE}
              alt="Community members gathering in a living room"
              className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </motion.div>

          {/* Right - CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-primary" />
              <span className="text-sm tracking-[0.2em] uppercase text-primary font-medium">
                Get Connected
              </span>
            </div>

            <h2 className="font-playfair text-4xl md:text-5xl font-medium leading-tight mb-6">
              Ready to
              <br />
              <span className="italic text-primary">take the next step?</span>
            </h2>

            <p className="text-lg text-foreground/60 leading-relaxed mb-10">
              Every Community House story begins with a conversation. Whether you feel
              called to plant a community in your neighborhood, want to connect with a
              network of like-minded church planters, or are simply curious about what
              this could look like in your city — we would love to hear from you.
              Let's start the conversation.
            </p>

            <div className="space-y-4 mb-10">
              <a
                href="mailto:connect@communityhousenetwork.org"
                className="flex items-center gap-4 p-5 rounded-xl border border-border/50 bg-background/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Email Us</p>
                  <p className="text-foreground/50 text-sm">connect@communityhousenetwork.org</p>
                </div>
                <ArrowRight className="w-5 h-5 text-foreground/30 group-hover:text-primary transition-colors" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:connect@communityhousenetwork.org?subject=Join%20the%20Network"
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full text-center hover:bg-primary/90 transition-all duration-300"
              >
                Join the Network
              </a>
              <a
                href="mailto:connect@communityhousenetwork.org?subject=Coaching%20Inquiry"
                className="px-8 py-4 border border-foreground/20 text-foreground font-medium rounded-full text-center hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                Request Coaching
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
