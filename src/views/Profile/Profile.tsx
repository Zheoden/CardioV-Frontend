import { TextField } from '@mui/material';
import Layout from '../Layout/Layout';

const Profile = () => {
  return (
    <Layout>
      <div className='flex flex-col w-full mt-8'>
        <div className='flex flex-row mx-auto'>
          <TextField label='Nombre' variant='standard' />
          <div className='ml-8'>
            <TextField label='Apellido' variant='standard' />
          </div>
        </div>
        <div className='flex flex-row mt-4 mx-auto'>
          <TextField label='Fecha de Nacimiento' variant='standard' />
          <div className='ml-8'>
            <TextField label='Avatar' variant='standard' />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
