import { videoDetailsResponse, videoResponse } from './Constants';
import { Profile, VideosDetailsDto, VideosDto } from './Interfaces';
import client from './VideoClient';

export async function getProfile(token: string): Promise<Profile> {
  return client
    .get('/users/me', { headers: { Authorization: `Bearer ${token}` } })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      throw err;
    });
}

export async function getVideos(filter: string = ''): Promise<VideosDto[]> {
  /* return client
    .get(`/videos?query=${filter}`)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      throw err;
    }); */
  return Promise.resolve(videoResponse);
}

export async function getVideosById(id: string): Promise<VideosDetailsDto> {
  /* return client
    .get(`/videos/${id}`)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      throw err;
    }); */
  return Promise.resolve(videoDetailsResponse);
}

export async function uploadVideo(file: File): Promise<void> {
  /* return client
    .post(`/videos/${id}`, {file: file})
    .then(response => {
      return response.data;
    })
    .catch(err => {
      throw err;
    }); */
  return Promise.resolve();
}
