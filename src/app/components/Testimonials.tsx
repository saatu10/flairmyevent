import React, { useRef } from 'react';
import { motion } from 'motion/react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah & Michael',
    role: 'Wedding Clients',
    content: 'FlairMyEvent transformed our wedding day into a cinematic masterpiece. Every photograph feels like a frame from a luxury film. The attention to detail and artistic vision exceeded all our expectations.',
  },
  {
    id: 2,
    name: 'Isabella Chen',
    role: 'Fashion Designer',
    content: 'Working with FlairMyEvent for our runway show was an absolute pleasure. Their editorial eye and understanding of fashion photography is unmatched. The images are pure art.',
  },
  {
    id: 3,
    name: 'Marcus Williams',
    role: 'Corporate Executive',
    content: 'Professional, discreet, and incredibly talented. FlairMyEvent captured our annual gala with sophistication and style. The photographs elevated our brand image significantly.',
  },
];

export function Testimonials() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    fade: true,
    customPaging: () => (
      <div className="w-2 h-2 bg-white/30 hover:bg-[#C9A961] transition-colors rounded-full mt-8"></div>
    ),
  };

  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 tracking-tight">Testimonials</h2>
          <div className="w-24 h-px bg-[#C9A961] mx-auto"></div>
        </motion.div>

        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4 outline-none">
                <div className="text-center">
                  <div className="w-16 h-px bg-[#C9A961] mx-auto mb-8"></div>
                  <p className="text-xl md:text-2xl leading-relaxed mb-8 text-black/80 italic">
                    "{testimonial.content}"
                  </p>
                  <h4 className="text-lg tracking-wide mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-[#C9A961] tracking-widest uppercase">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </Slider>

          {/* Navigation Buttons */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 border border-black/20 hover:border-[#C9A961] hover:text-[#C9A961] transition-all duration-300 hidden lg:block"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 border border-black/20 hover:border-[#C9A961] hover:text-[#C9A961] transition-all duration-300 hidden lg:block"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
