import baseURL from '../config/baseUrl';

export const fetch = () => baseURL.get(`/categories`);