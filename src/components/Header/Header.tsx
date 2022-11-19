import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo-Oscuro.png';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Logout } from '@mui/icons-material';
import LogoutButton from '../Session/LogoutButton';
import { CustomRoutes } from '../../common/Constants';
import { useContextState } from 'src/common/ContextState/ContextState';

import './Header.scss';

const Header = () => {
  const { contextState, setContextState } = useContextState();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className='header flex flex-row my-auto bg-sky-500 w-screen p-2 justify-between'>
      <div className='md:flex hidden flex-row'>
        <Link to='/echocardiogram' key='echocardiogram'>
          <img src={Logo} className='logo my-auto' alt='CardioV' />
        </Link>
      </div>

      <div className='md:hidden flex flex-col grow text-white' onClick={handleReturn}>
        <div className='ml-3'>
          <KeyboardReturnIcon />
        </div>
        <span className='uppercase font-bold'>Volver</span>
      </div>
      <div className='flex md:hidden flex-row grow'>
        <Link to='/echocardiogram' key='echocardiogram'>
          <img src={Logo} className='logo my-auto' alt='CardioV' />
        </Link>
      </div>
      <div className='md:flex hidden flex-row my-auto'>
        {CustomRoutes.filter(route => route.shouldDisplay).map(page => (
          <div className='flex flex-row text-white uppercase font-bold' key={page.displayName}>
            <span className={`my-auto text-xl text-center px-2 ${page.path === window.location.pathname ? '' : 'hidden'}`}>{page.displayName}</span>
          </div>
        ))}
      </div>

      <div className='flex grow-0 mr-8'>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar sx={{ width: 42, height: 42 }} src={contextState.user.avatar} />
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
              <Avatar sx={{ width: 42, height: 42 }} src={contextState.user.avatar} />
              <span className='my-auto ml-2'>Profile</span>
            </Link>
          </MenuItem>
          <hr />
          <MenuItem>
            <Logout fontSize='small' />
            <LogoutButton className='ml-2' text='Cerrar Sesion' />
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};
export default Header;
