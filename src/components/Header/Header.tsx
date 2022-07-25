import './Header.scss';
import Logo from '../../assets/Corazon.svg';

const Header = () => {
  return (
    <header className='header sticky flex align-items-center justify-content-between flex-wrap py-3'>
      <div className='flex flex-row'>
        <img src={Logo} className='logo my-auto ml-10' alt='CardioV' />
        <span className='my-auto ml-3 text-xl font-bold text-white  '> CardioV </span>
      </div>
    </header>
  );
};
export default Header;
