import axiosClient from './axiosClient';

// Récupérer tous les messages du formulaire
export const getFormSubmissions = async () => {
  const response = await axiosClient.get('/formSubmissions');
  return response.data;
};

// Mettre à jour un message (ex: marquer comme lu)
export const updateFormSubmission = async (id, data) => {
  const response = await axiosClient.put(`/formSubmissions/${id}`, data);
  return response.data;
};

// Supprimer un message
export const deleteFormSubmission = async (id) => {
  const response = await axiosClient.delete(`/formSubmissions/${id}`);
  return response.data;
};