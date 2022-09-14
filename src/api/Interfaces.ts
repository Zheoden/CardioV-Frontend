export interface Profile {
  firstName: string;
  lastName: string;
  document: string;
}

export interface VideosDto {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

export interface VideosDetailsDto {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  parameters: VideoParameters[];

}

export interface VideoParameters {
  field: string;
  value: string;
}