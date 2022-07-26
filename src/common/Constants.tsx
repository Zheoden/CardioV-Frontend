import Profile from 'src/views/Profile/Profile';
import Videos from 'src/views/Videos/Videos';
import VideosDetails from 'src/views/VideosDetails/VideosDetails';
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
    component: Videos,
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
    path: '/',
    component: Videos,
    shouldDisplay: true,
    displayName: 'Ecocardiogramas',
    description:
      'Esta vista te permite subir nuevos videos o imagenes para ser procesados. Tambien te permite ver información de videos e imagenes subidos previamente.',
    key: 'echocardiogram',
  },
  {
    path: '/:id',
    component: VideosDetails,
    shouldDisplay: false,
  },
];
