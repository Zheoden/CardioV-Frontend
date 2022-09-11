import Profile from 'src/views/Profile/Profile';
import Videos from 'src/views/Videos/Videos';
import VideosDetails from 'src/views/VideosDetails/VideosDetails';
import Home from 'src/views/Home/Home';

export interface CustomRoute {
  path: string;
  component: () => JSX.Element;
  shouldDisplay: boolean;
  name?: string;
  displayName?: string;
}

export const CustomRoutes: CustomRoute[] = [
  {
    path: '/',
    component: Home,
    shouldDisplay: true,
    displayName: 'Home',
  },
  {
    path: '/profile',
    component: Profile,
    shouldDisplay: true,
    displayName: 'Profile',
  },
  {
    path: '/videos',
    component: Videos,
    shouldDisplay: true,
    displayName: 'Videos',
  },
  {
    path: '/videos/:id',
    component: VideosDetails,
    shouldDisplay: false,
  },
];
