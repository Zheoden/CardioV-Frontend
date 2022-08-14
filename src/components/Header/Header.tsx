import { useState } from 'react';
import Logo from '../../assets/Corazon.svg';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';

import './Header.scss';
import { Link } from 'react-router-dom';

interface HeaderProps {
  open: boolean;
  handleOpen: () => void;
}

const Header = (props: HeaderProps) => {
  const { open, handleOpen } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openW = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={`flex flex-row my-auto bg-sky-600 w-screen p-2 justify-between ${open ? 'z-10' : 'z-30'}`}>
      <div className='flex'>
        <div onClick={handleOpen} className='mr-3 my-auto hover:bg-sky-700'>
          <MenuIcon />
        </div>
        <div className='flex flex-row ml-28'>
          <img src={Logo} className='logo my-auto' alt='CardioV' />
          <span className='my-auto ml-3 text-xl font-bold text-white  '> CardioV </span>
        </div>
      </div>
      <div className='flex items-center text-center mr-8'>
        <Tooltip title='Account settings'>
          <IconButton
            onClick={handleClick}
            size='small'
            sx={{ ml: 2 }}
            aria-controls={openW ? 'account-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={openW ? 'true' : undefined}>
            <Avatar sx={{ width: 42, height: 42 }}>{/* Avatar content */}</Avatar>
          </IconButton>
        </Tooltip>
      </div>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={openW}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <MenuItem>
          <Link to='Profile' key='Profile' className='flex flex-row my-2 p-1'>
            <Avatar /> Profile
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};
export default Header;
