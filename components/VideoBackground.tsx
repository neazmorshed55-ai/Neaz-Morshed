"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface VideoBackgroundProps {
  type: 'skills' | 'services' | 'experience' | 'reviews' | 'contact' | 'calendar';
  opacity?: number;
}

// Professional video URLs for different page types
const videoSources: Record<string, string> = {
  skills: 'https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4', // Abstract tech particles
  services: 'https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4', // Digital network
  experience: 'https://videos.pexels.com/video-files/856428/856428-hd_1920_1080_25fps.mp4', // Time-lapse city/progress
  reviews: 'https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4', // Soft abstract light
  contact: 'https://videos.pexels.com/video-files/852388/852388-hd_1920_1080_30fps.mp4', // Globe/connection theme
  calendar: 'https://videos.pexels.com/video-files/6774133/6774133-uhd_2732_1440_25fps.mp4', // Calendar/Schedule theme
};

export default function VideoBackground({ type, opacity = 0.3 }: VideoBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden z-0">
      {/* Video element with Parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ opacity }}
        >
          <source src={videoSources[type]} type="video/mp4" />
        </video>
      </motion.div>

      {/* Dark Overlay for "Dark Overlay Effect" */}
      <div className="absolute inset-0 bg-[#0b0f1a]/80" />

      {/* Gradient Overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a] via-[#0b0f1a]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-transparent to-[#0b0f1a]/40" />

      {/* Subtle color tint based on brand */}
      <div className="absolute inset-0 bg-[#2ecc71]/5 mix-blend-overlay" />
    </div>
  );
}
