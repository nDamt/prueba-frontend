'use client';

import React from 'react';
import Image from 'next/image';

interface Curso {
  id: string | number;
  versioncurso?: {
    curso?: {
      nombre: string;
      descripcion: string;
    };
  };
}

interface CursoCardProps {
  cursos: Curso[];
}

export const CursoCard = ({ cursos }: CursoCardProps) => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-6">
      {cursos.map((curso) => {
        const nombre = curso.versioncurso?.curso?.nombre || 'Curso';
        const descripcion = curso.versioncurso?.curso?.descripcion || '';

        return (
          <div key={curso.id} className="relative w-full h-64">
            <Image
              src="/icons/card/card_curso.svg"
              alt="Card Curso"
              fill
              className="object-cover rounded-lg shadow-lg"
            />

            <div className="absolute inset-0 flex flex-col justify-end items-center p-4 text-white text-center">
              <h3 className="text-lg font-bold">{nombre}</h3>
              <p className="text-sm text-gray-200 mt-1">{descripcion}</p>
              <span className="mt-2 text-sm font-medium bg-orange-500/80 px-3 py-1 rounded-full cursor-pointer hover:bg-orange-600 transition-all">
                Adquirir curso
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
