import React from 'react';
import { motion } from 'motion/react';
import { Camera } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: 'Wedding Photography',
    description: 'Cinematic storytelling for your most cherished day',
    features: ['Full-day coverage', 'Engagement session', 'Premium album', 'Digital gallery'],
  },
  {
    id: 2,
    title: 'Fashion Events',
    description: 'Editorial excellence for runway shows and campaigns',
    features: ['Runway coverage', 'Backstage moments', 'Model portfolios', 'Brand licensing'],
  },
  {
    id: 3,
    title: 'Corporate Events',
    description: 'Professional imagery that elevates your brand',
    features: ['Event documentation', 'Executive portraits', 'Brand storytelling', 'Social media assets'],
  },
  {
    id: 4,
    title: 'Private Celebrations',
    description: 'Intimate moments captured with artistry and discretion',
    features: ['Custom packages', 'Family portraits', 'Milestone events', 'Fine art prints'],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 lg:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-4xl md:text-5xl mb-4 tracking-tight">Services</h2>
          <div className="w-24 h-px bg-[#C9A961] mx-auto mb-6"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Tailored photography experiences designed to capture your unique vision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border border-[#C9A961]/30 p-8 hover:border-[#C9A961] transition-all duration-500 hover:shadow-[0_0_30px_rgba(201,169,97,0.2)]"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 border border-[#C9A961]/50 group-hover:bg-[#C9A961] transition-colors duration-500">
                  <Camera className="text-[#C9A961] group-hover:text-black transition-colors duration-500" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-2xl mb-2 tracking-wide">{service.title}</h3>
                  <p className="text-white/60 text-sm">{service.description}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/80 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#C9A961]"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
