export async function apiClient(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok)
    throw new Error(`An error has occurred: ${response.statusText}`);
  return response.json();
}
