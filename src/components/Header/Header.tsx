import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
//import Logo from '../../assets/Logo-Oscuro.png';
import Logo from '../../assets/Corazon.svg';

import './Header.scss';
import { Logout } from '@mui/icons-material';
import { Divider } from '@mui/material';
import LogoutButton from '../Session/LogoutButton';

const pages = [
  { displayName: 'Home', path: '/' },
  { displayName: 'Profile', path: '/profile' },

  
  { displayName: 'Videos', path: '/videos' },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className='header flex flex-row my-auto bg-sky-500 w-screen p-2 justify-between'>
      <div className='md:flex hidden flex-row'>
        <Link to='/' key='home'>
          <img src={Logo} className='logo my-auto' alt='CardioV' />
        </Link>
      </div>

      <div className='flex md:hidden flex-row grow'>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          onClick={handleOpenNavMenu}
          color='inherit'>
          <MenuIcon />
        </IconButton>
        <Menu
          id='menu-appbar'
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}>
          {pages.map(page => (
            <Link to={page.path} key={page.displayName}>
              <div className='flex flex-row'>
                <span className='my-auto text-xl text-center px-2'> {page.displayName} </span>
              </div>
            </Link>
          ))}
        </Menu>
      </div>
      <div className='flex md:hidden flex-row grow'>
        <Link to='/' key='home'>
          <img src={Logo} className='logo my-auto' alt='CardioV' />
        </Link>
      </div>
      <div className='md:flex hidden flex-row my-auto'>
        {pages.map(page => (
          <Link to={page.path} key={page.displayName}>
            <div className='flex flex-row'>
              <span className='my-auto ml-3 text-xl font-bold text-white'> {page.displayName} </span>
            </div>
          </Link>
        ))}
      </div>

      <div className='flex grow-0'>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar sx={{ width: 42, height: 42 }}>{/* Avatar content */}</Avatar>
        </IconButton>
        <Menu
          sx={{ mt: '45px' }}
          id='menu-appbar'
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}>
          <MenuItem>
            <Link to='/profile' key='profile' className='flex flex-row'>
              <Avatar />
              <span className='my-auto'>Profile</span>
            </Link>
          </MenuItem>
          <Divider />
          <MenuItem>
            <Logout fontSize='small' />
            <LogoutButton text='Cerrar Sesion' />
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};
export default Header;
