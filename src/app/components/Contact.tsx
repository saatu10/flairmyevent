import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventDate: '',
    eventType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-4xl md:text-5xl mb-4 tracking-tight">Let's Create Together</h2>
          <div className="w-24 h-px bg-[#C9A961] mx-auto mb-6"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ready to capture your extraordinary moments? Get in touch and let's discuss your vision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-white text-2xl mb-8 tracking-wide">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 border border-[#C9A961]/50">
                    <Mail className="text-[#C9A961]" size={20} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Email</p>
                    <a href="mailto:hello@flairmyevent.com" className="text-white hover:text-[#C9A961] transition-colors">
                      hello@flairmyevent.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 border border-[#C9A961]/50">
                    <Phone className="text-[#C9A961]" size={20} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Phone</p>
                    <a href="tel:+1234567890" className="text-white hover:text-[#C9A961] transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 border border-[#C9A961]/50">
                    <MapPin className="text-[#C9A961]" size={20} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Location</p>
                    <p className="text-white">New York, NY</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 border border-[#C9A961]/50">
                    <Instagram className="text-[#C9A961]" size={20} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Follow Us</p>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C9A961] transition-colors">
                      @flairmyevent
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#C9A961]/20">
              <p className="text-white/60 text-sm leading-relaxed">
                Based in New York, available worldwide for destination events. We travel to capture your most important moments, wherever they may be.
              </p>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/60 text-sm mb-2 tracking-wide">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-[#C9A961]/30 px-4 py-3 text-white focus:border-[#C9A961] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/60 text-sm mb-2 tracking-wide">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-[#C9A961]/30 px-4 py-3 text-white focus:border-[#C9A961] focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventDate" className="block text-white/60 text-sm mb-2 tracking-wide">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-[#C9A961]/30 px-4 py-3 text-white focus:border-[#C9A961] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="eventType" className="block text-white/60 text-sm mb-2 tracking-wide">
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-black border border-[#C9A961]/30 px-4 py-3 text-white focus:border-[#C9A961] focus:outline-none transition-colors"
                  >
                    <option value="">Select type</option>
                    <option value="wedding">Wedding</option>
                    <option value="fashion">Fashion Event</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="private">Private Celebration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-white/60 text-sm mb-2 tracking-wide">
                  Tell Us About Your Event
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-[#C9A961]/30 px-4 py-3 text-white focus:border-[#C9A961] focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#C9A961] text-black py-4 text-sm tracking-widest uppercase hover:bg-[#B89951] transition-colors duration-300"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
