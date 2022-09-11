import Profile from 'src/views/Profile/Profile-1';
import Videos from 'src/views/Videos/Videos-1';
import VideosDetails from 'src/views/VideosDetails/VideosDetails-1';
import Home from 'src/views/Home/Home';

export interface CustomRoute {
  path: string;
  component: () => JSX.Element;
  shouldDisplay: boolean;
  key?: string;
  name?: string;
  displayName?: string;
  description?: string;
}

export const CustomRoutes: CustomRoute[] = [
  {
    path: '/',
    component: Home,
    shouldDisplay: false,
  },
  {
    path: '/profile',
    component: Profile,
    shouldDisplay: true,
    displayName: 'Perfil',
    description: 'Esta vista te permite editar los datos de tu perfil como el nombre completo, fecha de nacimiento e imagen.',
    key: 'profile',
  },
  {
    path: '/videos',
    component: Videos,
    shouldDisplay: true,
    displayName: 'Videos',
    description:
      'Esta vista te permite subir nuevos videos o imagenes para ser procesados. Tambien te permite ver informacion de videos e imagenes subidos previamente.',
    key: 'video',
  },
  {
    path: '/videos/:id',
    component: VideosDetails,
    shouldDisplay: false,
  },
];
