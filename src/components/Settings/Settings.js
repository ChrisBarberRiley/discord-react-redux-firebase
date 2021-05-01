import {
  Container,
  CssBaseline,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import CancelIcon from '@material-ui/icons/Cancel';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUser } from '../../features/user/userSlice';
import UserAvatar from '../User/UserAvatar';
import './Settings.css';
import SettingsListItem from './SettingsListItem';

function Settings() {
  const user = useSelector(selectUser);
  const [appearOnline, setAppearOnline] = useState(true);

  const handleOnlineChange = () => {
    setAppearOnline(!appearOnline);
  };

  return (
    <div className='settings'>
      <CssBaseline />
      <Container maxWidth='sm'>
        <div className='settings__header'>
          <h1>Settings page</h1>

          <Link to='/'>
            <span>
              <CancelIcon className='settings__close' />
            </span>
          </Link>
        </div>

        <div className='settings__info'>
          <div className='settings__userAvatar'>
            <UserAvatar />
          </div>
          <List>
            <SettingsListItem
              key='settingsUsername'
              k='Username'
              v={user.displayName}
            />
            <SettingsListItem key='settingsEmail' k='Email' v={user.email} />
            <ListItem>
              <ListItemText primary='Appear online' />
              <ListItemSecondaryAction>
                <Switch
                  edge='end'
                  onChange={handleOnlineChange}
                  checked={appearOnline}
                  inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
          <Button variant='contained'>Update</Button>
        </div>
      </Container>
    </div>
  );
}

export default Settings;
