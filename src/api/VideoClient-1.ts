import axios from 'axios';
import { backendURL } from './Constants-1';

const client = axios.create({ baseURL: backendURL });

export default client;
