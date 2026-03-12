// src/api/projectsApi.js
// ✅ Garder CE fichier — supprimer ProjetApi.js (doublon)
import axiosClient from './axiosClient';

export const projectsApi = {
  getAll: () =>
    axiosClient.get('/projects').then(res => res.data),

  getById: (id) =>
    axiosClient.get(`/projects/${id}`).then(res => res.data),

  create: (data) =>
    axiosClient.post('/projects', data).then(res => res.data),

  update: (id, data) =>
    axiosClient.put(`/projects/${id}`, data).then(res => res.data),

  delete: (id) =>
    axiosClient.delete(`/projects/${id}`).then(res => res.data),
};