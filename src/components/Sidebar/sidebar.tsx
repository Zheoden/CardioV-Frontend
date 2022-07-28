import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import { Link } from 'react-router-dom';

interface SidebarProps {
  open: boolean;
  setOpen: (state: boolean) => void;
}

const Sidebar = (props: SidebarProps) => {
  const { open, setOpen } = props;

  return (
    <div
      className={`bg-white shrink-0 whitespace-nowrap box-border overflow-x-hidden top-0 left-0 fixed border-r-2 h-screen ${
        open ? 'navbar-custom-opened z-20' : 'navbar-custom-closed'
      }`}>
      <div className='flex items-center justify-end p-3'>
        <IconButton onClick={() => setOpen(false)}>{<ChevronLeftIcon />}</IconButton>
      </div>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <Link to={text} key={text} className='flex flex-row my-2 p-1'>
          <InboxIcon className='my-auto' />
          {open && <span className='my-auto ml-2'> {text}</span>}
        </Link>
      ))}
    </div>
  );
};
export default Sidebar;
