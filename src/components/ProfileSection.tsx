/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Mail, MapPin } from "lucide-react";

export default function ProfileSection() {
  return (
    <section className="relative mb-12 lg:mb-16 pt-8 lg:pt-16 overflow-hidden">
      {/* Atmospheric Background Image Layer */}
      <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-full"
        >
          <img
            src="/portrait.webp"
            alt="Portrait Background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center lg:object-[center_25%] opacity-30 lg:opacity-50 grayscale-[20%] contrast-[1.05]"
            style={{
              maskImage: "linear-gradient(to left, black 30%, transparent 90%), linear-gradient(to bottom, black 50%, transparent 95%)",
              WebkitMaskImage: "linear-gradient(to left, black 30%, transparent 90%), linear-gradient(to bottom, black 50%, transparent 95%)",
            }}
            onError={(e) => {
              // High-end fallback if image doesn't exist
              (e.target as HTMLImageElement).src = "/portrait.jpg";
            }}
          />
          
          {/* Layered Palette Overlays */}
          <div className="absolute inset-0 bg-gradient-to-l from-lilac-muted/10 via-rose-dusty/5 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-sunset via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* Decorative "Afterglow" Blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-rose-dusty/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-periwinkle-soft/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Content Layer */}
      <div className="relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-rose-dusty/80 border-b border-rose-dusty/20 pb-2">
                Profile
              </span>
            </motion.div>
            
            <h1 className="text-2xl lg:text-4xl font-display font-light text-charcoal-deep leading-[1.2] max-w-3xl">
              I am a product designer, user researcher, and design researcher based in London, working across inclusive design, wellbeing, disability, and public service.
            </h1>
            
            <p className="text-base lg:text-lg font-light text-charcoal-deep/60 leading-relaxed max-w-2xl">
              My work brings together user research, co-design, strategy, and prototyping to develop thoughtful products, interfaces, and services that support dignity, accessibility, and emotional wellbeing. Working across both physical and digital experiences, I am interested in translating human insight into meaningful and socially grounded design outcomes.
            </p>
          </div>

          {/* Refined Contact Line */}
          <div className="flex flex-wrap items-center gap-x-12 gap-y-6 pt-8 border-t border-border-lilac/50 w-fit">
            <div className="group flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest font-bold text-charcoal-deep/30">Location</span>
              <div className="flex items-center gap-2 text-charcoal-deep/60">
                <MapPin className="w-3.5 h-3.5 text-periwinkle-soft" />
                <span className="text-sm font-medium tracking-wide">London</span>
              </div>
            </div>
            
            <div className="group flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest font-bold text-charcoal-deep/30">Contact</span>
              <a 
                href="mailto:xxingrui@outlook.com"
                className="flex items-center gap-2 text-charcoal-deep/60 hover:text-rose-dusty transition-all duration-300"
              >
                <Mail className="w-3.5 h-3.5 text-rose-dusty/60" />
                <span className="text-sm font-medium tracking-wide border-b border-transparent hover:border-rose-dusty/30">
                  xxingrui@outlook.com
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
