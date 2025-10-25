'use client';

interface CursosListProps {
  cursos: any[];
}

export default function CursosList({ cursos }: CursosListProps) {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-3">📘 Cursos</h2>
      <ul className="space-y-3">
        {cursos.map((curso, i) => (
          <li key={i} className="p-3 bg-gray-100 rounded-lg shadow-sm">
            <p className="font-semibold text-lg">
              {curso.versioncurso?.curso?.nombre}
            </p>
            <p className="text-sm text-gray-700">
              {curso.versioncurso?.curso?.descripcion}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
