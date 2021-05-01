import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';

function UserAvatar() {
  const user = useSelector(selectUser);

  return (
    <div>
      <Avatar src={user.photo} />
    </div>
  );
}

export default UserAvatar;
