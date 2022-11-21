import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { Profile } from 'src/api/Interfaces';
import { updateProfile } from 'src/api/VideoService';
import { useContextState } from 'src/common/ContextState/ContextState';
import { ActionTypes } from 'src/common/ContextState/Interfaces';
import Layout from '../Layout/Layout';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Avatar, Card, CardActions, CardContent, Divider, CardHeader } from '@mui/material';

const ProfileView = () => {
  const { contextState, setContextState } = useContextState();
  const [user, setUser] = useState<Profile>({
    firstName: '',
    lastName: '',
    birthdate: '',
    avatar: '',
  });

  useEffect(() => {
    console.log(contextState.user);
    setUser(contextState.user);
  }, [contextState.user]);

  const handleUpdateProfile = async () => {
    updateProfile(user)
      .then(response =>
        setContextState({
          type: ActionTypes.SetUser,
          value: response,
        }),
      )
      .catch(err => console.log(err));
    console.log('Debe seleccionar una imagen o un video para poder subirlo');
  };

  const handleUpdate = (field: string, value: string) => {
    setUser({
      ...user,
      [field]: value,
    });
  };

  return (
    <Layout>
      <div className='flex flex-col w-1/2 mt-8'>
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xs={12}>
            <Card>
              <CardContent>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  <Avatar
                    src={user.avatar}
                    sx={{
                      height: 64,
                      mb: 2,
                      width: 64,
                    }}
                  />
                  <Typography color='textPrimary' gutterBottom variant='h5'>
                    {user.firstName} {user.lastName}
                  </Typography>
                </Box>
              </CardContent>
              <Divider />
              <CardActions>
                <Button color='primary' fullWidth variant='text'>
                  Subir imagen
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <div className='flex flex-row mx-auto'>
            <Grid item lg={8} md={6} xs={12}>
              <Card>
                <CardHeader title='Datos' />
                <Divider />
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                      <TextField
                        label='Nombre'
                        variant='standard'
                        value={user.firstName}
                        onChange={value => handleUpdate('firstName', value.target.value)}
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        label='Apellido'
                        variant='standard'
                        value={user.lastName}
                        onChange={value => handleUpdate('lastName', value.target.value)}
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        label='Fecha de Nacimiento'
                        variant='standard'
                        type='date'
                        value={user.birthdate}
                        sx={{ width: 200 }}
                        onChange={value => handleUpdate('birthdate', value.target.value)}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 2,
                  }}>
                  <Button
                    variant='outlined'
                    onClick={handleUpdateProfile}
                    disabled={
                      contextState.user.firstName === user.firstName &&
                      contextState.user.lastName === user.lastName &&
                      contextState.user.birthdate === user.birthdate &&
                      contextState.user.avatar === user.avatar
                    }>
                    Guardar
                  </Button>
                </Box>
              </Card>
            </Grid>
          </div>
        </Grid>
      </div>
    </Layout>
    // <Layout>
    //   <div className='flex flex-col w-full mt-8'>
    //     <div className='flex flex-row mx-auto'>
    //       <TextField label='Nombre' variant='standard' value={user.firstName} onChange={value => handleUpdate('firstName', value.target.value)} />
    //       <div className='ml-8'>
    //         <TextField label='Apellido' variant='standard' value={user.lastName} onChange={value => handleUpdate('lastName', value.target.value)} />
    //       </div>
    //     </div>
    //     <div className='flex flex-row mt-4 mx-auto'>
    //       <TextField
    //         label='Fecha de Nacimiento'
    //         variant='standard'
    //         type='date'
    //         value={user.birthdate}
    //         sx={{ width: 200 }}
    //         onChange={value => handleUpdate('birthdate', value.target.value)}
    //       />
    //       <div className='ml-8'>
    //         <TextField label='Avatar' variant='standard' value={user.avatar} onChange={value => handleUpdate('avatar', value.target.value)} />
    //       </div>
    //     </div>
    //     <div className='flex flex-row mt-8 mx-auto'>
    //       <Button
    //         variant='outlined'
    //         onClick={handleUpdateProfile}
    //         disabled={
    //           contextState.user.firstName === user.firstName &&
    //           contextState.user.lastName === user.lastName &&
    //           contextState.user.birthdate === user.birthdate &&
    //           contextState.user.avatar === user.avatar
    //         }>
    //         Guardar
    //       </Button>
    //     </div>
    //   </div>
    // </Layout>
  );
};

export default ProfileView;
