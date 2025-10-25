export const API_URL = "https://api.digitalcollege.edu.pe/api";

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
  return data; 
}

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
  return data.data || data; 
}
