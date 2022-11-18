import { Profile, VideoRequestBody, VideosDetailsDto, VideosDto } from './Interfaces';
import client from './VideoClient';

export async function getProfile(): Promise<Profile> {
  /* return client
    .get('/user/me')
    .then(response => {
      return response.data;
    })
    .catch(err => {
      if (err.response.data.message === 'USER_NOT_FOUND') {
        return registerProfile();
      }
      throw err;
    }); */
  return Promise.resolve({
    firstName: 'string',
    lastName: 'string',
    birthdate: 'string',
    avatar: 'string',
  });
}

export async function registerProfile(): Promise<Profile> {
  /* return client
    .post('/user/register')
    .then(response => {
      return response.data;
    })
    .catch(err => {
      throw err;
    }); */
  return Promise.resolve({
    firstName: 'string',
    lastName: 'string',
    birthdate: 'string',
    avatar: 'string',
  });
}

export async function updateProfile(body: Profile): Promise<Profile> {
  /* return client
    .patch('/user/me', body)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      throw err;
    }); */
  return Promise.resolve({
    firstName: 'string',
    lastName: 'string',
    birthdate: 'string',
    avatar: 'string',
  });
}

export async function getVideos(filter: string = ''): Promise<VideosDto[]> {
  /* return client
    .get(`/media/me?query=${filter}`)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      throw err;
    }); */
  return Promise.resolve([
    {
      patology: 'string',
      id: 'string',
      title: 'string',
      description: 'string',
      thumbnail: 'string',
      parameters: [
        { field: 'string', value: 'string', unit: 'string' },
        { field: 'string', value: 'string', unit: 'string' },
        { field: 'string', value: 'string', unit: 'string' },
      ],
    },
    {
      patology: 'string',
      id: 'string',
      title: 'string',
      description: 'string',
      thumbnail: 'string',
      parameters: [
        { field: 'string', value: 'string', unit: 'string' },
        { field: 'string', value: 'string', unit: 'string' },
        { field: 'string', value: 'string', unit: 'string' },
      ],
    },
    {
      patology: 'string',
      id: 'string',
      title: 'string',
      description: 'string',
      thumbnail: 'string',
      parameters: [
        { field: 'string', value: 'string' },
        { field: 'string', value: 'string' },
        { field: 'string', value: 'string' },
      ],
    },
    {
      patology: 'string',
      id: 'string',
      title: 'string',
      description: 'string',
      thumbnail: 'string',
      parameters: [
        { field: 'string', value: 'string', unit: 'string' },
        { field: 'string', value: 'string', unit: 'string' },
        { field: 'string', value: 'string', unit: 'string' },
      ],
    },
    {
      patology: 'string',
      id: 'string',
      title: 'string',
      description: 'string',
      thumbnail: 'string',
      parameters: [
        { field: 'string', value: 'string', unit: 'string' },
        { field: 'string', value: 'string', unit: 'string' },
        { field: 'string', value: 'string', unit: 'string' },
      ],
    },
  ]);
}

export async function getVideosById(id: string): Promise<VideosDetailsDto> {
  /*  return client
    .get(`/media/${id}`)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      throw err;
    }); */
  return Promise.resolve({
    patology: 'string',
    id: 'string',
    title: 'string',
    description: 'string',
    thumbnail: 'string',
    parameters: [
      { field: 'string', value: 1, unit: 'string' },
      { field: 'string', value: 2, unit: 'string' },
      { field: 'string', value: 3, unit: 'string' },
      { field: 'string', value: 4, unit: 'string' },
    ],
  });
}

export async function uploadVideo(body: VideoRequestBody): Promise<void> {
  /*   const formData = new FormData();
  if (body.currentFile) {
    formData.append('file', body.currentFile);
  }
  formData.append('description', body.description);
  formData.append('title', body.title);
  formData.append('patology', body.patology);
  return client
    .post(`/media`, formData)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      throw err;
    }); */
  return Promise.resolve();
}

export async function deleteVideoById(id: string): Promise<VideosDetailsDto> {
  /*   return client
    .delete(`/media/${id}`)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      throw err;
    }); */
  return Promise.resolve({
    id: 'string',
    title: 'string',
    description: 'string',
    thumbnail: 'string',
    parameters: [],
  });
}
