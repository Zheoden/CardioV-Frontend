import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getVideos } from 'src/api/videoService';
import { VideosDto } from 'src/api/interfaces';

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
    <div className='flex flex-wrap lg:ml-20 ml-16'>
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
                    }}>
                    <DeleteForeverIcon />
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Videos;
