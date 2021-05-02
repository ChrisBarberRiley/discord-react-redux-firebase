import { useSelector } from 'react-redux';
import { selectUser } from '../features/user/userSlice';
import Chat from './Chat/Chat';
import Login from './Login/Login';
import Sidebar from './Sidebar/Sidebar';

function Main() {
  const user = useSelector(selectUser);
  return (
    <div className='app'>
      {user ? (
        <>
          {/* Sidebar */}
          <Sidebar />

          {/* Main chat area */}
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Main;
