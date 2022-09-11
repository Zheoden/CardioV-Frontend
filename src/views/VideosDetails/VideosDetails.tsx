import { Card, CardMedia, CardContent, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import Layout from '../Layout/Layout';

const videoURL = 'https://assets.cardiov.org/f4d6648d-7cdb-4032-8061-5c8ba99c241f/f4d6648d-7cdb-4032-8061-5c8ba99c241f.mp4';

const VideosDetails = () => {
  const params = useParams();

  return (
    <Layout>
      <div className='flex'>
        <Card className='mx-auto mt-8'>
          <CardMedia>
            <video src={videoURL} controls className='flex mx-auto' />
          </CardMedia>
          <CardContent>
            <h5 className='text-2xl mt-0 mb-2'>Detalles:</h5>
            <div className='flex flex-col font-bold'>
              <div className='flex flex-row'>
                <TextField disabled label='Perimetro' defaultValue='asd' variant='standard' />
                <div className='ml-8'>
                  <TextField disabled label='Flujo Sanguineo' defaultValue='asd' variant='standard' />
                </div>
                <div className='ml-8'>
                  <TextField disabled label='Tamaño de cavidad' defaultValue='asd' variant='standard' />
                </div>
              </div>
              <div className='flex flex-row mt-8'>
                <TextField disabled label='Volumen' defaultValue='asd' variant='standard' />
                <div className='ml-8'>
                  <TextField disabled label='Volumen 2' defaultValue='asd' variant='standard' />
                </div>
                <div className='ml-8'>
                  <TextField disabled label='Volumen 3' defaultValue='asd' variant='standard' />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default VideosDetails;
