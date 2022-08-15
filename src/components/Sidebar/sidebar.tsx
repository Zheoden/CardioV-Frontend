import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { CustomRoutes } from 'src/common/constants';
import { Link } from 'react-router-dom';

interface SidebarProps {
  open: boolean;
}

const drawerWidth = 160;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export const Sidebar = (props: SidebarProps): JSX.Element => {
  const { open } = props;

  return (
    <div className='flex'>
      <Drawer variant='permanent' open={open}>
        <List>
          <div className='mt-16'>
            {CustomRoutes.filter(route => route.sidebarVisible).map(route => (
              <Link to={route.name} key={route.name} className='flex flex-row my-2 p-1'>
                <>
                  {route.icon}
                  {open && <span className='my-auto ml-2'> {route.name}</span>}
                </>
              </Link>
            ))}
          </div>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
};

export default Sidebar;
