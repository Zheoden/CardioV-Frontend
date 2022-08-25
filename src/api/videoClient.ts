import axios from 'axios';
import { backendURL } from './constants';

const client = axios.create({ baseURL: backendURL });

export default client;
