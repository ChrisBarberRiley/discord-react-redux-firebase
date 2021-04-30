import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';
import './Login.css';

function Login() {
  const signIn = () => {
    //Login user
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };

  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://discord.com/assets/fc0b01fe10a0b8c602fb0106d8189d9b.png'
          alt='Discord Logo'
        />
      </div>
      <Button onClick={signIn}>Sign in</Button>
    </div>
  );
}

export default Login;
