import React, { useState } from 'react';
import { motion } from 'motion/react';

interface Model {
  id: number;
  name: string;
  image: string;
}

interface FeaturedModelsProps {
  models: Model[];
}

export function FeaturedModels({ models }: FeaturedModelsProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="models" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 tracking-tight">Featured Models</h2>
          <div className="w-24 h-px bg-[#C9A961] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredId(model.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-black/60 flex items-end p-6 transition-opacity duration-500 ${
                  hoveredId === model.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h3 className="text-[#C9A961] text-xl tracking-wide">{model.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
