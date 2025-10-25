'use client';
import { useState } from 'react';
import { getCursos } from '@/lib/api';
import LoginForm from '@/components/LoginForm';
import CursosList from '@/components/CursosList';

export default function HomePage() {
  const [token, setToken] = useState('');
  const [cursos, setCursos] = useState<any[]>([]);

  const handleLoginSuccess = async (token: string) => {
    setToken(token);
    const data = await getCursos(token);
    setCursos(data);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Portal Digital College
      </h1>

      {!token ? (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      ) : (
        <CursosList cursos={cursos} />
      )}
    </div>
  );
}
