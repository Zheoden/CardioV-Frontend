import Spinner from './components/Spinner/Spinner';
import Header from './components/Header/Header';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/Sidebar/sidebar';
import { CustomRoutes } from './common/constants';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className='flex flex-col'>
      <Header open={open} setOpen={setOpen} />
      <Sidebar open={open}></Sidebar>

      <div className='flex mx-auto'>
        <Routes>
          <Route path='/' element={<Spinner show />} />
          {CustomRoutes.map(route => (
            <Route path={route.name} element={<route.component />} key={route.name} />
          ))}
        </Routes>
      </div>
    </div>
  );
}
export default App;
