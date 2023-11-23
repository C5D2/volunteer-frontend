import axios from 'axios';

const tokenInstance = axios.create({ baseURL: import.meta.env.VITE_SERVER_API });

export default tokenInstance;
