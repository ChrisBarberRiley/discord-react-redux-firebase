import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import { login, logout, selectUser } from './features/user/userSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

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

export default App;
