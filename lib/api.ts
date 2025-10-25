// lib/api.ts
export const API_URL = "https://api.digitalcollege.edu.pe/api";

// Función de login que recibe email y contraseña
export async function login(email: string, password: string) {
  const response = await fetch(`${API_URL}/auth/login-app`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
      rememberMe: false,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.mensaje || "Error al autenticar usuario");
  }

  const data = await response.json();
  return data; // Devuelve token, nombres, apellidos, id, correo, etc.
}

// Función para obtener cursos del usuario usando el token
export async function getCursos(token: string) {
  const response = await fetch(`${API_URL}/versioncurso-usuarios/getByUserId`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.mensaje || "Error al obtener cursos");
  }

  const data = await response.json();
  return data.data || data; // Ajusta según lo que devuelva la API
}
