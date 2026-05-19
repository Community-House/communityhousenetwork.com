import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Sparkles, Copy } from 'lucide-react';

const PORCH_IMAGE = `${import.meta.env.BASE_URL}assets/front-porch-gathering.png`;

const VALUES = [
  {
    icon: Users,
    word: 'Community',
    title: 'Authentic Community',
    description: 'We believe the church is most alive in the ordinary spaces of life — living rooms, kitchen tables, front porches, and neighborhood parks. We are neighbors first, building genuine relationships before anything else.',
  },
  {
    icon: Heart,
    word: 'Diversity',
    title: 'Celebrate Diversity',
    description: 'God is tearing down walls of division. People of different generations, races, languages, and ethnicities are coming together around one table. Our diversity is not a challenge to manage — it is a gift to celebrate.',
  },
  {
    icon: Sparkles,
    word: 'Transformation',
    title: 'Gospel Transformation',
    description: 'We exist to see lives changed through Jesus Christ. Not through programs or stages, but through the quiet, powerful work of the Holy Spirit in the context of real relationships and shared life.',
  },
  {
    icon: Copy,
    word: 'Multiplication',
    title: 'Multiply the Mission',
    description: 'From the very beginning, the vision was that Community House would multiply — to many other houses, in other neighborhoods, in other cities. One house becomes many. One community becomes a movement.',
  },
];

export default function NetworkSection() {
  return (
    <section id="network" className="relative py-32 overflow-hidden bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Mission & Vision Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-primary" />
            <span className="text-sm tracking-[0.2em] uppercase text-primary font-medium">
              The Network
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
                A family of
                <br />
                <span className="italic text-primary">church planters.</span>
              </h2>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-border/50 bg-background/40">
                <p className="text-xs tracking-[0.2em] uppercase text-secondary font-medium mb-3">Our Mission</p>
                <p className="text-foreground/80 leading-relaxed">
                  To plant gospel-centered communities in the places people already live —
                  turning neighborhoods into communities, one house, one table, one neighbor at a time.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-border/50 bg-background/40">
                <p className="text-xs tracking-[0.2em] uppercase text-secondary font-medium mb-3">Our Vision</p>
                <p className="text-foreground/80 leading-relaxed">
                  Community House Network exists to resource, connect, and multiply a generation of
                  church planters who bring the presence of Christ into every neighborhood —
                  until every community has a house where neighbors gather, prayers are answered,
                  lives are changed, and people are discovering Jesus.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden mb-20 group"
        >
          <img
            src={PORCH_IMAGE}
            alt="Neighborhood gathering on a front porch"
            className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="font-playfair text-2xl md:text-3xl italic text-foreground/90">
              "God is turning a neighborhood into a community."
            </p>
            <p className="text-foreground/50 mt-2 text-sm">— The Community House Story, Lansing, IL</p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-px bg-secondary" />
            <span className="text-sm tracking-[0.2em] uppercase text-secondary font-medium">
              Core Values
            </span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl border border-border/50 bg-background/50 hover:border-primary/30 transition-all duration-500"
            >
              <p className="font-playfair text-4xl font-medium text-primary/20 mb-4 group-hover:text-primary/30 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </p>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-500">
                <value.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-secondary font-medium mb-2">{value.word}</p>
              <h3 className="font-playfair text-xl font-medium mb-3">{value.title}</h3>
              <p className="text-foreground/55 leading-relaxed text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
