import LoginButton from 'src/components/Session/LoginButton';
import Logo from '../../assets/Logo-Oscuro.png';
import loginImage from '../../assets/LoginImage.jpg';

const Login = () => {
  // const loginImage =
  // 'https://media.istockphoto.com/id/1126809074/vector/heart-ultrasound-concept-in-flat-style-vector.jpg?s=612x612&w=0&k=20&c=wKRLv0oBehXrohYQ0K_J3a3LWf2JwIG2xb8ELIjggbg=';

  return (
    <div className='flex flex-row h-screen w-screen'>
      <img className='md:flex hidden w-4/6 h-11/12' src={loginImage} />
      <div className='flex-1 p-16 bg-slate-50 shadow-2xl'>
        <div className='flex flex-col h-full'>
          <div className='flex flex-col my-auto'>
            <div className='text-center'>
              <img src={Logo} style={{ width: '185px' }} alt='logo' className='rounded mx-auto d-block' />
              <h4 className='mt-1 mb-5 pb-1'>CardioV Software</h4>
            </div>
            <div className='flex flex-row bg-cyan-500 hover:bg-cyan-700 rounded-full py-2 px-4 md:w-2/3 w-full mx-auto'>
              <LoginButton text='Iniciar Sesion' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
