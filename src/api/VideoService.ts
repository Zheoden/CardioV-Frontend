import { Profile, VideosDetailsDto, VideosDto } from './Interfaces';
import client from './VideoClient';

export async function getProfile(): Promise<Profile> {
  return client
    .get('/user/me')
    .then(response => {
      return response.data;
    })
    .catch(err => {
      throw err;
    });
}

export async function getVideos(filter: string = ''): Promise<VideosDto[]> {
  return client
    .get(`/media/me?query=${filter}`)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      throw err;
    });
}

export async function getVideosById(id: string): Promise<VideosDetailsDto> {
  return client
    .get(`/media/${id}`)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      throw err;
    });
}

export async function uploadVideo(file: File): Promise<void> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append(
    'description',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  );
  formData.append('title', 'Corazon');
  return client
    .post(`/media`, formData)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      throw err;
    });
}
