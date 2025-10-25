'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCursos } from '@/lib/api';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { NavigationCards } from '@/components/cards/NavigationCard';
import { CursoCard } from '@/components/cards/CursoCard';

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
    <div className="flex min-h-screen bg-black text-white"> {/* <- fondo negro */}
      <Sidebar />
      <div className="flex-1 ml-20">
        <Header userName="DAVID MOLOCHE" userLevel={5} academyId="ID-00000000" />
        <NavigationCards />
        <CursoCard cursos={cursos.slice(0, 7)} />
      </div>
    </div>
  );
}
