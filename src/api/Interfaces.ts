export interface Profile {
  firstName?: string;
  lastName?: string;
  birthdate?: string;
  email?: string;
  avatar?: string;
}

export interface VideosDto {
  id: string;
  title: string;
  description: string;
  patology: string;
  thumbnail: string;
}

export interface VideosDetailsDto {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  parameters: VideoParameters[];
  media: MediaParameters[];
}

export interface VideoParameters {
  field: string;
  value: number;
  unit: string;
}

export interface MediaParameters {
  thumbnail: string;
  title: string;
}

export interface VideoRequestBody {
  currentFile?: File;
  title: string;
  patology: string;
  description: string;
  scale?: string;
}
