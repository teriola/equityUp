import { post } from './api.js';

export const loginUser = async (email, password) => post('/auth/login', { email, password });
export const registerUser = async ({ email, username, password, rePassword }) => post('/auth/register', { email, username, password, rePassword });

// export const logout = async () => get('/auth/logout');