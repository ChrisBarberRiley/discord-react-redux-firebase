import { Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HeadsetIcon from '@material-ui/icons/Headset';
import MicIcon from '@material-ui/icons/Mic';
import SettingsIcon from '@material-ui/icons/Settings';
import './Sidebar.css';
import SidebarChannel from './SidebarChannel';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div class='sidebar__top'>
        <h3>Tech team</h3>
        <ExpandMoreIcon />
      </div>

      <div className='sidebar__channels'>
        <div className='sidebar__channelsHeader'>
          <div className='sidebar__header'>
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon className='sidebar__addChannel' />
        </div>

        <div className='sidebar__channelsList'>
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>

      <div className='sidebar__profile'>
        <Avatar src='https://avatars.githubusercontent.com/u/7147567' />
        <div className='sidebar__profileInfo'>
          <h3>Chris Barber-Riley</h3>
          <p>This is my ID</p>
        </div>

        <div className='sidebar__profileIcons'>
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
