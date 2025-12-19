import React from 'react';
import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black py-16 px-6 border-t border-[#C9A961]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-white text-2xl tracking-wider mb-4">FlairMyEvent</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Cinematic event photography that captures timeless beauty and emotion
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm tracking-widest uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#portfolio" className="text-white/60 hover:text-[#C9A961] text-sm transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/60 hover:text-[#C9A961] text-sm transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#story" className="text-white/60 hover:text-[#C9A961] text-sm transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-[#C9A961] text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white text-sm tracking-widest uppercase mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-[#C9A961]/50 hover:bg-[#C9A961] hover:border-[#C9A961] transition-all duration-300 group"
              >
                <Instagram
                  size={20}
                  className="text-[#C9A961] group-hover:text-black transition-colors"
                />
              </a>
            </div>
            <p className="text-white/60 text-sm mt-4">@flairmyevent</p>
          </div>
        </div>

        <div className="pt-8 border-t border-[#C9A961]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs">
              © 2024 FlairMyEvent. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-white/40 hover:text-[#C9A961] transition-colors text-xs"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-[#C9A961] transition-colors text-xs"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
