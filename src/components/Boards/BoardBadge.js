import { ListItem, ListItemAvatar } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import React from 'react';

function BoardBadge({ imgSrc, name }) {
  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img className='boards__icon' alt={name} src={imgSrc} />
          </Avatar>
        </ListItemAvatar>
      </ListItem>
    </div>
  );
}

export default BoardBadge;
