import { videoResponse } from './constants';
import { Profile, VideosDto } from './interfaces';
import client from './videoClient';

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
