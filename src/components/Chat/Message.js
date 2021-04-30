import { Avatar } from '@material-ui/core';
import './Message.css';

function Message() {
  return (
    <div className='message'>
      <Avatar />
      <div className='message__info'>
        <h4>
          Chris Barber-Riley
          <span className='message__timestamp'>timestamp 00:00:00</span>
        </h4>
        <p>Message content in here</p>
      </div>
    </div>
  );
}

export default Message;
