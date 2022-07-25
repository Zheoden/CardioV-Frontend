import axios from 'axios';

const alkymetricsBaseURL = process?.env?.REACT_APP_ALKYMETRICS_URL ?? '';
const client = axios.create({ baseURL: alkymetricsBaseURL });

interface Profile {
  firstName: string;
  lastName: string;
  document: string;
}

export async function getProfile(token: string): Promise<Profile> {
  return client
    .get('/users/me', { headers: { Authorization: `Bearer ${token}` } })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err;
    });
}
