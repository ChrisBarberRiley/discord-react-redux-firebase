import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import { setBoardId, setBoardName } from './features/app/appSlice';
import { login, logout, selectUser } from './features/user/userSlice';
import { auth, db } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const [board, setBoard] = useState(0);
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

        db.collection('users')
          .doc(authUser.uid)
          .get()
          .then((docRef) => {
            setBoard(docRef.data().boards[0]);
            dispatch(
              setBoardId({
                boardId: board,
              })
            );
          });

        db.collection('boards')
          .doc(board)
          .get()
          .then((docRef) => {
            dispatch(
              setBoardName({
                boardName: docRef.data().boardName,
              })
            );
          });
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch, board]);

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
