import LoginButton from 'src/components/Session/LoginButton';
import Logo from '../../assets/Logo-Oscuro.png';

const Login = () => {
  const loginImage =
    'https://media.istockphoto.com/vectors/heart-ultrasound-concept-in-flat-style-vector-vector-id1126809074?k=20&m=1126809074&s=612x612&w=0&h=TxjzEj0Bm_yMxQUVDzzhHi1204DeghXxMtZH7wKY2XI=';

  return (
    <div className='flex flex-row h-screen w-screen'>
      <img className='md:flex hidden w-4/6' src={loginImage} />
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
