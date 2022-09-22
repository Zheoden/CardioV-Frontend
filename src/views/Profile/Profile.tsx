import { TextField } from '@mui/material';
import { useState } from 'react';
import { Profile } from 'src/api/Interfaces';
import { useContextState } from 'src/common/ContextState/ContextState';
import Layout from '../Layout/Layout';

const ProfileView = () => {
  const { contextState, setContextState } = useContextState();
  const [user, setUser] = useState<Profile>({
    ...contextState.user,
  });
  const handleUpdate = (field: string, value: string) => {
    setUser({
      ...user,
      [field]: value,
    });
  };

  return (
    <Layout>
      <div className='flex flex-col w-full mt-8'>
        <div className='flex flex-row mx-auto'>
          <TextField
            label='Nombre'
            variant='standard'
            defaultValue={user.firstName}
            onChange={value => handleUpdate('firstName', value.target.value)}
          />
          <div className='ml-8'>
            <TextField
              label='Apellido'
              variant='standard'
              defaultValue={user.lastName}
              onChange={value => handleUpdate('lastName', value.target.value)}
            />
          </div>
        </div>
        <div className='flex flex-row mt-4 mx-auto'>
          <TextField
            label='Fecha de Nacimiento'
            variant='standard'
            defaultValue={user.birthdate}
            onChange={value => handleUpdate('birthdate', value.target.value)}
          />
          <div className='ml-8'>
            <TextField label='Avatar' variant='standard' defaultValue={user.avatar} onChange={value => handleUpdate('avatar', value.target.value)} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfileView;
