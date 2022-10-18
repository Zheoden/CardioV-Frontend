import { Profile, VideoRequestBody, VideosDetailsDto, VideosDto } from './Interfaces';
import client from './VideoClient';

export async function getProfile(): Promise<Profile> {
  return client
    .get('/user/me')
    .then(response => {
      return response.data;
    })
    .catch(err => {
      if (err.response.data.message === 'USER_NOT_FOUND') {
        return registerProfile();
      }
      throw err;
    });
}

export async function registerProfile(): Promise<Profile> {
  return client
    .post('/user/register')
    .then(response => {
      return response.data;
    })
    .catch(err => {
      throw err;
    });
}

export async function updateProfile(body: Profile): Promise<Profile> {
  return client
    .patch('/user/me', body)
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

export async function uploadVideo(body: VideoRequestBody): Promise<void> {
  const formData = new FormData();
  if (body.currentFile) {
    formData.append('file', body.currentFile);
  }
  formData.append('description', body.description);
  formData.append('title', body.title);
  return client
    .post(`/media`, formData)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      throw err;
    });
}
