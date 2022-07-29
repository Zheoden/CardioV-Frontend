import Profile from 'src/views/profile/profile';
import Videos from 'src/views/videos/videos';

export interface CustomRoute {
  name: string;
  component: () => JSX.Element;
}

export const CustomRoutes: CustomRoute[] = [
  {
    name: 'Profile',
    component: Profile,
  },
  {
    name: 'Videos',
    component: Videos,
  },
];
