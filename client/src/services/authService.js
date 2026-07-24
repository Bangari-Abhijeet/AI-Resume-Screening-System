import { fetcher } from './api';

export const login = async (credentials) => {
  return fetcher('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
};

export const register = async (data) => {
  return fetcher('/auth/register', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
