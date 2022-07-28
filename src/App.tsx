import Spinner from './components/Spinner/Spinner';
import Header from './components/Header/Header';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Sidebar from './components/Sidebar/sidebar';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className='flex flex-col'>
      <Header
        open={open}
        handleOpen={() => {
          setOpen(true);
        }}
      />
      <Sidebar open={open} setOpen={setOpen}></Sidebar>

      <div className='flex mx-auto'>
        <Routes>
          <Route path='/' element={<Spinner show />} />
          <Route path='/Inbox' element={<Spinner show />} />
          <Route path='/Starred' element={<Spinner show />} />
          <Route path='/Drafts' element={<Spinner show />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
