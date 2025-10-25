'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCursos } from '@/lib/api';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { NavigationCards } from '@/components/cards/NavigationCard';

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
      <div className="flex-1 ml-20">
        <Header userName="DAVID MOLOCHE" userLevel={5} academyId="ID-00000000" />
        <NavigationCards />
        <div className="p-6">
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
    </div>
  );
}
