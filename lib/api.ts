export const API_URL = "https://api.digitalcollege.edu.pe/api";

export async function login() {
  const response = await fetch(`${API_URL}/auth/login-app`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "miguel@gmail.com",
      password: "71755767",
      rememberMe: false
    }),
  });

  if (!response.ok) throw new Error("Error al autenticar usuario");

  const data = await response.json();
  return data.token; 
}

export async function getCoursesByUserId(token: string) {
  const response = await fetch(`${API_URL}/versioncurso-usuarios/getByUserId`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) throw new Error("Error al obtener los cursos");
  return response.json();
}
