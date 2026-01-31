"use client";

import React from 'react';

interface VideoBackgroundProps {
  type: 'skills' | 'services' | 'experience' | 'reviews' | 'contact';
  opacity?: number;
}

// Professional video URLs for different page types
const videoSources: Record<string, string> = {
  skills: 'https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4', // Abstract tech particles
  services: 'https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4', // Digital network
  experience: 'https://videos.pexels.com/video-files/856428/856428-hd_1920_1080_25fps.mp4', // Time-lapse city/progress
  reviews: 'https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4', // Soft abstract light
  contact: 'https://videos.pexels.com/video-files/852388/852388-hd_1920_1080_30fps.mp4', // Globe/connection theme
};

export default function VideoBackground({ type, opacity = 0.15 }: VideoBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Video element */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity }}
      >
        <source src={videoSources[type]} type="video/mp4" />
      </video>

      {/* Gradient overlays for smooth blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0b0f1a]/70 to-[#0b0f1a]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f1a]/80 via-transparent to-[#0b0f1a]/80" />

      {/* Subtle color tint */}
      <div className="absolute inset-0 bg-[#2ecc71]/5" />
    </div>
  );
}
