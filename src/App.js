import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Main from './components/Main';
import Settings from './components/Settings/Settings';
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
          })
          .then(
            db
              .collection('boards')
              .doc(board)
              .get()
              .then((docRef) => {
                document.title = `${docRef.data().boardName}`;
                dispatch(
                  setBoardName({
                    boardName: docRef.data().boardName,
                  })
                );
              })
          );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch, board]);

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/settings' component={Settings} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
