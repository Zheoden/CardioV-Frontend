import { Card, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { VideosDto } from 'src/api/Interfaces';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface VideoCardProps {
  video: VideosDto;
}

const VideoCard = (props: VideoCardProps) => {
  const { video } = props;
  return (
    <div className='flex mt-8 mr-4'>
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
  );
};

export default VideoCard;
