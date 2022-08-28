import Profile from 'src/views/Profile/Profile';
import Videos from 'src/views/Videos/Videos';
import PersonIcon from '@mui/icons-material/Person';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideosDetails from 'src/views/VideosDetails/VideosDetails';

export interface CustomRoute {
  name: string;

  component: () => JSX.Element;
  icon?: JSX.Element;
  sidebarVisible: boolean;
}

export const CustomRoutes: CustomRoute[] = [
  {
    name: 'profile',
    icon: <PersonIcon className='my-auto' />,
    component: Profile,
    sidebarVisible: true,
  },
  {
    name: 'videos',
    icon: <VideocamIcon className='my-auto' />,
    component: Videos,
    sidebarVisible: true,
  },
  {
    name: 'videos/:id',
    component: VideosDetails,
    sidebarVisible: false,
  },
];
