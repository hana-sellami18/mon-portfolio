// src/api/authApi.js
import axiosClient from './axiosClient';

export const authApi = {
  login: (credentials) =>
    axiosClient.post('/login', credentials).then(res => res.data),

  logout: () => {
    localStorage.removeItem('authToken');
  },
};