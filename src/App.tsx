import Spinner from './components/Spinner/Spinner';
import Header from './components/Header/Header';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { CustomRoutes } from './common/constants';
import Login from './views/Login/login';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className='flex flex-col w-full overflow-x-hidden'>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
      <Header />

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
