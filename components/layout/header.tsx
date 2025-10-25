'use client';

import React from 'react';

interface HeaderProps {
  userName?: string;
  userLevel?: number;
  academyId?: string;
  avatarSrc?: string;
}

export const Header = ({
  userName = "DAVID MOLOCHE",
  userLevel = 5,
  academyId = "ID-00000000",
  avatarSrc = "/icons/imagen_perfil.jpg",
}: HeaderProps) => {
  const initials = userName
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div className="relative w-full mt-6">
      <img
        src="/icons/marco_header/marco_header_1.svg"
        alt="Marco Header"
        className="absolute inset-0 w-full h-full object-cover"
      />

 
      <div className="relative z-10 p-6 flex items-center space-x-6">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-cyan-400 flex items-center justify-center overflow-hidden">
          <img
            src="/icons/imagen_perfil.jpg"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl md:text-3xl font-bold text-cyan-400 tracking-wider">
              {userName}
            </h1>
            <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-black text-xs md:text-sm font-bold rounded-full border border-green-400">
              Nivel {userLevel}
            </span>
          </div>
          <p className="text-sm md:text-base text-gray-400 mt-1">
            Academia DC-Orbital • {academyId}
          </p>
        </div>
      </div>
    </div>
  );
};
