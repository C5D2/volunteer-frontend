import { reissueToken } from '@apis/auth/reissueToken';
import { getCookie } from '@utils/cookies/cookies';
import axios, { AxiosRequestConfig } from 'axios';

const createInstance = (contentType: string) => {
  const config: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_SERVER_API,
    timeout: 3000,
    headers: {
      'Content-Type': contentType,
    },
    withCredentials: true,
  };
  const instance = axios.create(config);
  instance.interceptors.request.use((config) => {
    const token = getCookie('accessToken');
    if (token) {
      config.headers['Authorization'] = `${token}`;
    }
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const refreshToken = getCookie('refreshToken');
      const { status } = error.response;
      if (status === 401) {
        const response = await reissueToken(refreshToken);
        return response;
      }
    }
  );

  return instance;
};

export const axiosInstance = createInstance('application/json');
export const axiosImgInstance = createInstance('multipart/form-data');
