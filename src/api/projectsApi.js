import axiosClient from './axiosClient';

export const getProjects = async () => {
  const response = await axiosClient.get('/projects');
  return response.data;
};

export const getProjectById = async (id) => {
  const response = await axiosClient.get(`/projects/${id}`);
  return response.data;
};

export const createProject = async (data) => {
  const response = await axiosClient.post('/projects', data);
  return response.data;
};

export const updateProject = async (id, data) => {
  const response = await axiosClient.put(`/projects/${id}`, data);
  return response.data;
};

export const deleteProject = async (id) => {
  const response = await axiosClient.delete(`/projects/${id}`);
  return response.data;
};