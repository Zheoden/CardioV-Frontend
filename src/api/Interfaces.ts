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
  age: number;
  gender: string;
}

export interface Metrics {
  male_avg_volume: number;
  female_avg_volume: number;
  child_avg_volume: number;
  teen_avg_volume: number;
  young_adult_avg_volume: number;
  adult_avg_volume: number;
  old_avg_volume: number;
  male_avg_walls: number;
  female_avg_walls: number;
  child_avg_walls: number;
  teen_avg_walls: number;
  young_adult_avg_walls: number;
  adult_avg_walls: number;
  old_avg_walls: number;
  male_avg_ventricle_area: number;
  female_ventricle_area: number;
  child_ventricle_area: number;
  teen_ventricle_area: number;
  young_adult_ventricle_area: number;
  adult_ventricle_area: number;
  old_ventricle_area: number;
}
