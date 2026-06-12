import React from 'react';
import { motion } from 'framer-motion';

const PARK_IMAGE = `${import.meta.env.BASE_URL}assets/community-park.png`;
const BREAD_IMAGE = `${import.meta.env.BASE_URL}assets/breaking-bread.png`;
const NEIGHBORS_IMAGE = `${import.meta.env.BASE_URL}assets/neighbors-gathering.png`;

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
          <span className="text-base tracking-[0.2em] uppercase text-secondary font-medium">
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
                Community House began as a God-given vision — to launch a ministry out of a home, for neighbors, by neighbors. A place where people could gather, build authentic community, celebrate their diversity, and experience transformation through Jesus Christ.
              </p>
              <p>
                As we looked around our communities, we realized something was missing. People were living closer than ever, yet feeling more disconnected than ever. Studies suggest that many Americans feel unseen, unknown, and isolated. Loneliness is on the rise. Neighbors often live side-by-side for years without ever knowing one another's names. We became convinced that something has to change. If community is going to grow, someone must take the first step. Someone must choose to see people, learn names, open doors, share meals, and create spaces where relationships can flourish. We believed God was inviting us to become those people—and to invite others to do the same.
              </p>
              <p>
                When our family moved into the neighborhood, we set a goal of meeting 60 neighbors in 60 days. God exceeded our expectations. In just two months, we met more than 150 people. Conversations turned into friendships. Meals were shared. Soccer games were organized. Ice cream parties brought people together. Neighbors celebrated baby showers and gathered at Christmas. What began as intentional neighboring became something much bigger: God was turning a neighborhood into a community.
              </p>
              <p>
                Today, Community House exists to help others do the same. We believe God is raising up ordinary people who will love their neighbors, combat loneliness, build authentic community, and become a visible expression of Christ's love right where they live. This is more than a ministry. It is a movement of neighboring—one relationship, one block, and one community at a time.
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
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-2xl group">
                <img
                  src={PARK_IMAGE}
                  alt="Community gathering in a park at sunset"
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-2xl ml-12 -mr-4 group">
                <img
                  src={BREAD_IMAGE}
                  alt="Hands breaking bread together"
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-2xl group">
                <img
                  src={NEIGHBORS_IMAGE}
                  alt="Neighbors welcoming at a front door"
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
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
