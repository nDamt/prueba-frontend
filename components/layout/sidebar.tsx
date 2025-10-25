'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  HomeIcon,
  RocketLaunchIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  UsersIcon,
  ChartBarIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

interface SidebarProps {
  userName?: string;
}

const menuItems = [
  { label: 'Inicio', icon: HomeIcon },
  { label: 'Misiones', icon: RocketLaunchIcon },
  { label: 'Comunidad', icon: UsersIcon },
  { label: 'Progreso', icon: ChartBarIcon },
  { label: 'Logros', icon: TrophyIcon }
];

export const Sidebar = ({ userName = "David Moloche" }: SidebarProps) => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.replace('/login');
  };

  return (
    <div className="w-32 bg-gray-900 border-r border-gray-700 flex flex-col items-center py-6 space-y-6">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-orange-400 flex items-center justify-center">
          <Image
            src="/icons/imagen_perfil.jpg"
            alt="Avatar DC"
            width={80}
            height={80}
            className="object-cover"
          />
        </div>

        <div className="mt-2 text-center">
          <p className="text-white text-sm font-bold truncate">{userName}</p>
          <p className="text-gray-400 text-xs">Estudiante</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center space-y-4 mt-6">
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              className="w-14 h-14 rounded-lg bg-gray-800 border border-gray-700 hover:bg-orange-500/20 transition-all flex items-center justify-center"
              title={item.label}
            >
              <Icon className="w-7 h-7 text-white" />
            </button>
          );
        })}
      </div>

      <button
        onClick={handleLogout}
        className="w-14 h-14 rounded-lg bg-red-600 border border-red-700 hover:bg-red-500/80 transition-all flex items-center justify-center"
        title="Cerrar sesión"
      >
        <ArrowRightOnRectangleIcon className="w-7 h-7 text-white" />
      </button>
    </div>
  );
};
