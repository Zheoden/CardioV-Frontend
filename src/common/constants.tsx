import Profile from 'src/views/profile/profile';
import Videos from 'src/views/videos/videos';
import PersonIcon from '@mui/icons-material/Person';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideosDetails from 'src/views/videosDetails/videosDetails';

export interface CustomRoute {
  name: string;

  component: () => JSX.Element;
  icon?: JSX.Element;
  sidebarVisible: boolean;
}

export const CustomRoutes: CustomRoute[] = [
  {
    name: 'Profile',
    icon: <PersonIcon className='my-auto' />,
    component: Profile,
    sidebarVisible: true,
  },
  {
    name: 'Videos',
    icon: <VideocamIcon className='my-auto' />,
    component: Videos,
    sidebarVisible: true,
  },
  {
    name: 'Videos/:id',
    component: VideosDetails,
    sidebarVisible: false,
  },
];
