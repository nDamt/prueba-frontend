'use client';

import React from 'react';
import Image from 'next/image';
import { NAVIGATION_SECTIONS } from '@/lib/constants';

interface NavigationCardProps {
  id: string;
  label: string;
  subtitle: string;
  color: string;
  image: string; 
}

const NavigationCard = ({ label, subtitle, color, image }: NavigationCardProps) => {
  return (
    <div className="relative w-56 h-32 rounded-xl overflow-hidden shadow-lg">
      <Image
        src={image} 
        alt={label}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-10">
        <h3 className={`text-lg font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
          {label}
        </h3>
        <p className="text-xs text-gray-200 mt-1">{subtitle}</p>
      </div>
    </div>
  );
};

export const NavigationCards = () => {
  return (
    <div className="grid grid-cols-5 gap-4 mt-6 px-6">
      {NAVIGATION_SECTIONS.map((section) => (
        <NavigationCard
          key={section.id}
          id={section.id}
          label={section.label}
          subtitle={section.subtitle}
          color={section.color}
          image={section.image} 
        />
      ))}
    </div>
  );
};
