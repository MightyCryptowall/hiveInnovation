import baseURL from '../config/baseUrl';

export const logIn = (formData) => baseURL.post(`/auth/login`, formData);
