import React from 'react';
import { motion } from 'motion/react';

interface BrandStoryProps {
  image: string;
}

export function BrandStory({ image }: BrandStoryProps) {
  return (
    <section id="story" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <img src={image} alt="Brand Story" className="w-full h-full object-cover" />
            <div className="absolute inset-0 border-2 border-[#C9A961]/30 m-4"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl mb-4 tracking-tight">Our Story</h2>
              <div className="w-24 h-px bg-[#C9A961]"></div>
            </div>

            <p className="text-lg leading-relaxed text-black/80">
              At FlairMyEvent, we believe every moment deserves to be immortalized with
              elegance and artistry. Our journey began with a passion for capturing the raw
              emotion and timeless beauty of life's most precious celebrations.
            </p>

            <p className="text-lg leading-relaxed text-black/80">
              With a cinematic eye and editorial sensibility, we transform events into visual
              stories that transcend time. From intimate weddings to high-fashion galas, our
              approach is rooted in authenticity, sophistication, and an unwavering commitment
              to excellence.
            </p>

            <p className="text-lg leading-relaxed text-black/80">
              We don't just photograph events — we craft heirlooms. Each frame is thoughtfully
              composed, each moment carefully preserved, creating a legacy of beauty that you'll
              treasure for generations.
            </p>

            <div className="pt-6">
              <div className="w-full h-px bg-[#C9A961]/30"></div>
              <p className="text-sm tracking-widest uppercase text-[#C9A961] mt-6">
                Elevating moments into art
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
