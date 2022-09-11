import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getVideos } from 'src/api/videoService';
import { VideosDto } from 'src/api/interfaces';
import { Button } from '@mui/material';
import Layout from '../Layout/Layout';

const Videos = () => {
  const [videos, setVideos] = useState<VideosDto[]>([]);

  useEffect(() => {
    getVideos()
      .then((data: VideosDto[]) => {
        setVideos(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <div className='flex flex-col lg:ml-20 ml-8'>
        <div className='flex flex-row justify-between mt-4'>
          <span className='my-auto'>Buscador</span>
          <div className='mr-8'>
            <Button variant='outlined'>Subir Video</Button>
          </div>
        </div>
        <div className='flex flex-wrap'>
          {videos.map(video => (
            <div key={video.id} className='flex mt-8 ml-4'>
              <Card sx={{ maxWidth: 275 }}>
                <CardMedia component='video' height='140' src={video.thumbnail} controls />
                <Link to={video.id}>
                  <CardContent>
                    <div className='flex flex-col'>
                      <h5 className='text-2xl mt-0 mb-2'>{video.title}</h5>
                      <span>{video.description}</span>
                      <div
                        className='flex self-end'
                        onClick={e => {
                          e.stopPropagation();
                          e.nativeEvent.stopImmediatePropagation();
                          console.log(e);
                        }}></div>
                    </div>
                  </CardContent>
                </Link>
                <div className='flex flex-row-reverse'>
                  <div className='cursor-pointer' onClick={() => console.log(`borrar ${video.id}`)}>
                    <DeleteForeverIcon />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Videos;
