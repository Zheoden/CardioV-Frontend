import { Avatar, ListItemText } from '@mui/material';
import { useEffect, useState } from 'react';
import { Metrics } from 'src/api/Interfaces';
import { getStats } from 'src/api/VideoService';
import { getFriendlyMetricName } from 'src/utils/string';

import FormatShapesIcon from '@mui/icons-material/FormatShapes';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import ViewInArIcon from '@mui/icons-material/ViewInAr';

const EchoStats = () => {
  const [metrics, setMetrics] = useState<Metrics>();
  const [currentTab, setCurrentTag] = useState<string>('volume');

  const changeTag = (tab: string) => setCurrentTag(tab);

  useEffect(() => {
    getStats().then(response => setMetrics(response));
  }, []);

  return (
    <>
      <ul className='flex flex-row mx-auto text-sm font-medium text-center text-gray-500 border-b border-gray-2000 mt-2'>
        <li className='mr-2'>
          <span
            onClick={() => changeTag('volume')}
            className={`inline-block p-4 rounded-t-lg cursor-pointer ${
              currentTab === 'volume' ? 'text-blue-600 bg-gray-100 active' : 'hover:text-gray-600 hover:bg-gray-50'
            }`}>
            Volumen Ventricular
          </span>
        </li>
        <li className='mr-2'>
          <span
            onClick={() => changeTag('walls')}
            className={`inline-block p-4 rounded-t-lg cursor-pointer ${
              currentTab === 'walls' ? 'text-blue-600 bg-gray-100 active' : 'hover:text-gray-600 hover:bg-gray-50'
            }`}>
            Espesor de las Paredes
          </span>
        </li>
        <li className='mr-2'>
          <span
            onClick={() => changeTag('area')}
            className={`inline-block p-4 rounded-t-lg cursor-pointer ${
              currentTab === 'area' ? 'text-blue-600 bg-gray-100 active' : 'hover:text-gray-600 hover:bg-gray-50'
            }`}>
            Area Ventricular
          </span>
        </li>
      </ul>

      <div className='flex flex-col mx-auto'>
        {metrics &&
          Object.entries(metrics).map(
            key =>
              key[0].match(currentTab) && (
                <div className='flex flex-row mt-5 mr-3' key={key.toString()}>
                  <div className='flex my-auto mr-4'>
                    <Avatar>
                      {currentTab === 'area' && <FormatShapesIcon color='inherit' />}
                      {currentTab === 'walls' && <SquareFootIcon color='inherit' />}
                      {currentTab === 'volume' && <ViewInArIcon color='inherit' />}
                    </Avatar>
                  </div>
                  <ListItemText primary={getFriendlyMetricName(key[0])} secondary={key[1]} />
                </div>
              ),
          )}
      </div>
    </>
  );
};

export default EchoStats;
