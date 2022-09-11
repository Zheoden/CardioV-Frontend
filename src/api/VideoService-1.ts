import { videoResponse } from './Constants-1';
import { Profile, VideosDto } from './Interfaces-1';
import client from './VideoClient-1';

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

export async function getVideos(): Promise<VideosDto[]> {
  return Promise.resolve(videoResponse);
}
