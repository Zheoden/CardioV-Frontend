import axios from 'axios';
import { backendURL } from './Constants';

const client = axios.create({ baseURL: backendURL });

export default client;
