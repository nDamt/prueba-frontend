'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCursos } from '@/lib/api';
import {
  HomeIcon,
  RocketLaunchIcon,
  Cog6ToothIcon,
  UsersIcon,
  ChartBarIcon,
  TrophyIcon,
  ArrowLeftOnRectangleIcon, // icono de logout
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.replace('/login');
  };

  const menuItems = [
    { label: 'Inicio', icon: HomeIcon },
    { label: 'Misiones', icon: RocketLaunchIcon },
    { label: 'Herramientas', icon: Cog6ToothIcon },
    { label: 'Comunidad', icon: UsersIcon },
    { label: 'Progreso', icon: ChartBarIcon },
    { label: 'Logros', icon: TrophyIcon }
  ];

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

      {/* Botón de Cerrar Sesión */}
      <button
        onClick={handleLogout}
        className="w-12 h-12 mt-4 rounded-lg bg-red-600 hover:bg-red-500 transition-all flex items-center justify-center"
        title="Cerrar sesión"
      >
        <ArrowLeftOnRectangleIcon className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default function Dashboard() {
  const router = useRouter();
  const [cursos, setCursos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return router.replace('/login');

    getCursos(token)
      .then((data: any) => setCursos(data.data || data))
      .catch(() => router.replace('/login'))
      .finally(() => setLoading(false));
  }, [router]);

  if (loading) return <p className="text-white text-center mt-10">Cargando cursos...</p>;

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar />

      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-3 gap-4">
          {cursos.map((curso: any) => (
            <div key={curso.id} className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-bold">
                {curso.versioncurso?.curso?.nombre || curso.nombre}
              </h2>
              <p className="text-gray-400 mt-1">
                {curso.versioncurso?.curso?.descripcion || curso.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
