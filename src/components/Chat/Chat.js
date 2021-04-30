import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import GifIcon from '@material-ui/icons/Gif';
import firebase from 'firebase';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectChannelId,
  selectChannelName,
} from '../../features/app/appSlice';
import { selectUser } from '../../features/user/userSlice';
import { db } from '../../firebase';
import './Chat.css';
import ChatHeader from './ChatHeader';
import Message from './Message';

function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          )
        );
    }
  }, [channelId]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      db.collection('channels').doc(channelId).collection('messages').add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: input,
        user,
      });

      setInput('');
    }
  };

  return (
    <div className='chat'>
      <ChatHeader channelName={channelName} />

      <div className='chat__messages'>
        {messages.map(({ id, message, timestamp }) => (
          <Message
            key={id}
            message={message}
            timestamp={timestamp}
            user={user}
          />
        ))}
      </div>

      <div className='chat__input'>
        <AddCircleIcon />
        <form onSubmit={sendMessage}>
          <input
            value={input}
            onChange={handleInput}
            disabled={!channelId}
            placeholder={`Message #${channelName}`}
          />
        </form>

        <div className='chat__inputIcons'>
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
}

export default Chat;
