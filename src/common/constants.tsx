import Profile from 'src/views/profile/profile';
import Videos from 'src/views/videos/videos';
import PersonIcon from '@mui/icons-material/Person';
import VideocamIcon from '@mui/icons-material/Videocam';

export interface CustomRoute {
  name: string;
  icon: JSX.Element;
  component: () => JSX.Element;
}

export const CustomRoutes: CustomRoute[] = [
  {
    name: 'Profile',
    icon: <PersonIcon className='my-auto' />,
    component: Profile,
  },
  {
    name: 'Videos',
    icon: <VideocamIcon className='my-auto' />,
    component: Videos,
  },
];
