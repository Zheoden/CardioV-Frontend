import { videoResponse } from './Constants';
import { Profile, VideosDto } from './Interfaces';
import client from './VideoClient';

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
