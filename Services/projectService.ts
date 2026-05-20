const API_URL = process.env.NEXT_PUBLIC_API_URL;


export async function getProjects() {
  const response = await fetch(`${API_URL}/projects`);

  if (!response.ok) {
    throw new Error("Error al obtener proyectos");
  }

  return response.json();
}

export async function getProjectById(id: number) {
  const response = await fetch(`${API_URL}/projects/${id}`);

  if (!response.ok) {
    throw new Error("Proyecto no encontrado");
  }

  return response.json();
}


export async function createProject(data: FormData) {
  const response = await fetch(`${API_URL}/projects`, {
    method: "POST",
    body: data,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Error al crear proyecto");
  }

  return response.json();
}

export async function updateProject(
  id: number,
  data: FormData
) {
  const response = await fetch(`${API_URL}/projects/${id}`, {
    method: "PUT",
    body: data,
  });

  if (!response.ok) {
    throw new Error("Error al actualizar proyecto");
  }

  return response.json();
}

export async function deleteProject(id: number) {
  const response = await fetch(`${API_URL}/projects/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error al eliminar proyecto");
  }
}