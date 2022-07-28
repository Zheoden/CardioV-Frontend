import './Header.scss';
import Logo from '../../assets/Corazon.svg';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
  open: boolean;
  handleOpen: () => void;
}

const Header = (props: HeaderProps) => {
  const { open, handleOpen } = props;
  return (
    <div className={`flex flex-row my-auto bg-sky-600 w-screen p-2 ${open ? 'z-10' : 'z-30'}`}>
      <div onClick={handleOpen} className='mr-3 my-auto hover:bg-sky-700'>
        <MenuIcon />
      </div>
      <div className='flex flex-row ml-28'>
        <img src={Logo} className='logo my-auto' alt='CardioV' />
        <span className='my-auto ml-3 text-xl font-bold text-white  '> CardioV </span>
      </div>
    </div>
  );
};
export default Header;
