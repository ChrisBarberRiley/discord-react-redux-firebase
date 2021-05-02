import { List, ListItem, ListItemAvatar } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import './Boards.css';

function Boards() {
  return (
    <div className='boards'>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img
                className='boards__icon'
                alt='Exiled'
                src='https://static-cdn.jtvnw.net/jtv_user_pictures/1a7bf5c2-1df5-4ed7-bc6b-af3b336a412f-profile_image-300x300.png'
              />
            </Avatar>
          </ListItemAvatar>
        </ListItem>
      </List>
    </div>
  );
}

export default Boards;
