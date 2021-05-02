import { Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HeadsetIcon from '@material-ui/icons/Headset';
import MicIcon from '@material-ui/icons/Mic';
import SettingsIcon from '@material-ui/icons/Settings';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectBoardId, selectBoardName } from '../../features/app/appSlice';
import { selectUser } from '../../features/user/userSlice';
import { db } from '../../firebase';
import Boards from '../Boards/Boards';
import './Sidebar.css';
import SidebarChannel from './SidebarChannel';

function Sidebar() {
  const user = useSelector(selectUser);
  const boardName = useSelector(selectBoardName);
  const boardId = useSelector(selectBoardId);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection('channels')
      .where('boardId', '==', boardId)
      .onSnapshot((snapshot) => {
        setChannels(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            channel: doc.data(),
          }))
        );
      });
  }, [boardId]);

  const handleAddChannel = () => {
    const channelName = prompt('enter a new channel name');

    if (channelName) {
      db.collection('channels').add({
        boardId,
        channelName,
      });
    }
  };

  return (
    <>
      <Boards />

      <div className='sidebar'>
        <div className='sidebar__top'>
          <h3>{boardName}</h3>
          <ExpandMoreIcon />
        </div>

        <div className='sidebar__channels'>
          <div className='sidebar__channelsHeader'>
            <div className='sidebar__header'>
              <ExpandMoreIcon />
              <h4>Text Channels</h4>
            </div>
            <AddIcon
              onClick={handleAddChannel}
              className='sidebar__addChannel'
            />
          </div>

          <div className='sidebar__channelsList'>
            {channels.map(({ id, channel }) => (
              <SidebarChannel
                key={id}
                id={id}
                channelName={channel.channelName}
              />
            ))}
          </div>
        </div>

        <div className='sidebar__profile'>
          <Avatar src={user.photo} />
          <div className='sidebar__profileInfo'>
            <h3>{user.displayName}</h3>
            <p>#{user.uid.substring(0, 5)}</p>
          </div>

          <div className='sidebar__profileIcons'>
            <MicIcon />
            <HeadsetIcon />
            <Link to='settings'>
              <SettingsIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
