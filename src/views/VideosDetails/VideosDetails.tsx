import { Card, CardMedia, CardContent, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { VideosDetailsDto } from 'src/api/Interfaces';
import { getVideosById } from 'src/api/VideoService';
import Layout from '../Layout/Layout';

const VideosDetails = () => {
  const params = useParams();
  const [videoDetails, setVideoDetails] = useState<VideosDetailsDto>();

  useEffect(() => {
    const fetchData = async () => {
      const video = await getVideosById(params?.id ?? '');
      setVideoDetails(video);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <div className='flex'>
        <Card className='mx-auto mt-8'>
          <CardMedia>
            <video src={videoDetails?.thumbnail} controls className='flex mx-auto' />
          </CardMedia>
          <CardContent>
            <h5 className='flex text-2xl mt-0 mb-2 mx-auto w-max'>Detalles</h5>
            <div className='flex flex-col font-bold'>
              <div className='flex flex-wrap max-w-screen-lg'>
                {videoDetails?.parameters.map(param => (
                  <div className='ml-8' key={param.field}>
                    <TextField disabled label={param.field} defaultValue={param.value} variant='standard' />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default VideosDetails;
