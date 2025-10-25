'use client';

import React from 'react';
import {
  HomeIcon,
  RocketLaunchIcon,
  Cog6ToothIcon,
 
  UsersIcon,
  ChartBarIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const menuItems = [
  { label: 'Inicio', icon: HomeIcon },
  { label: 'Misiones', icon: RocketLaunchIcon },

  { label: 'Comunidad', icon: UsersIcon },
  { label: 'Progreso', icon: ChartBarIcon },
  { label: 'Logros', icon: TrophyIcon }
];

export const Sidebar = () => {
  return (
    <div className="w-20 bg-gray-900 border-r border-gray-700 flex flex-col items-center py-6 space-y-6">
      {/* Logo */}
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center border-2 border-orange-400">
        <span className="text-white font-bold text-lg">DC</span>
      </div>

      {/* Menú */}
      <div className="flex-1 flex flex-col items-center space-y-4 mt-6">
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              className="w-12 h-12 rounded-lg bg-gray-800 border border-gray-700 hover:bg-orange-500/20 transition-all flex items-center justify-center"
              title={item.label}
            >
              <Icon className="w-6 h-6 text-white" />
            </button>
          );
        })}
      </div>

      {/* Perfil */}
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center border-2 border-cyan-400">
        <span className="text-white font-bold">DM</span>
      </div>
    </div>
  );
};
