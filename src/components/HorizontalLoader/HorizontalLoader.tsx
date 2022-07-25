import React from 'react';
import './HorizontalLoader.scss';

const HorizontalLoader = () => {
  return (
    <div className='lds-ellipsis mx-auto'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default HorizontalLoader;
