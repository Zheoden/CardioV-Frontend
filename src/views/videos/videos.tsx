import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cards = [
  'Corazon 1',
  'Corazon 2',
  'Corazon 3',
  'Corazon 4',
  'Corazon 5',
  'Corazon 6',
  'Corazon 7',
  'Corazon 8',
  'Corazon 9',
  'Corazon 10',
  'Corazon 11',
  'Corazon 12',
  'Corazon 13',
  'Corazon 14',
];
const videoURL = 'https://assets.cardiov.org/f4d6648d-7cdb-4032-8061-5c8ba99c241f/f4d6648d-7cdb-4032-8061-5c8ba99c241f.mp4';

const Videos = () => {
  const [videos, setVideos] = useState(cards);

  return (
    <div className='flex flex-wrap lg:ml-20 ml-16'>
      {videos.map(video => (
        <div key={video} className='flex mt-8 ml-4'>
          <Card sx={{ maxWidth: 275 }}>
            <CardMedia component='video' height='140' src={videoURL} controls />
            <Link to={video}>
              <CardContent>
                <div className='flex flex-col'>
                  <h5 className='text-2xl mt-0 mb-2'>{video}</h5>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  </span>
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
