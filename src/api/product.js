import baseURL from '../config/baseUrl';

export const fetch = () => baseURL.get(`/products`);
export const create = (formData) => baseURL.post(`/products`,formData);
export const remove = (id) => baseURL.delete(`/products/${id}`);
export const edit = (id,formData) => baseURL.put(`/products/${id}`,formData);
