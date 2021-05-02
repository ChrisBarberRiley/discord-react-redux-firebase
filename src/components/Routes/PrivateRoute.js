import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { selectUser } from '../../features/user/userSlice';

export default function PrivateRoute({ component: Component, ...rest }) {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Component {...props} /> : <Redirect to='/login' />;
      }}
    />
  );
}
