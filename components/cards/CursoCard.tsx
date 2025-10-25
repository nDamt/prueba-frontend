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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 px-6">
      {cursos.map((curso) => {
        const nombre = curso.versioncurso?.curso?.nombre || 'Curso';
        const descripcion = curso.versioncurso?.curso?.descripcion || '';

        return (
          <div
            key={curso.id}
            className="relative w-full h-120 rounded-xl overflow-hidden shadow-lg bg-black flex items-center justify-center"
          >
            <Image
              src="/icons/card/card_curso.svg"
              alt="Card Curso"
              fill
              className="object-contain"
            />

            <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-18 z-10">
              <h3 className="text-lg font-bold text-white">{nombre}</h3>
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
