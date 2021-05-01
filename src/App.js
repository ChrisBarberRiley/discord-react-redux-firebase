import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';
import Settings from './components/Settings/Settings';
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
    <Router>
      <Switch>
        <Route exact path='/'>
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
        </Route>
        <Route path='/settings'>
          <Settings />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
