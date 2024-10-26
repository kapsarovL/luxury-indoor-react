import { apiClient } from './apiClient';

export function getPropertyById(id) {
  return apiClient(`/api/properties/${id}`);
}
