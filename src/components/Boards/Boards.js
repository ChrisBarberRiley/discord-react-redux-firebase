import { List } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBoardId } from '../../features/app/appSlice';
import BoardBadge from './BoardBadge';
import './Boards.css';

function Boards() {
  const dispatch = useDispatch();
  const [viewingBoardId, setViewingBoardId] = useState(0);

  useEffect(() => {
    dispatch(
      setBoardId({
        boardId: viewingBoardId,
      })
    );
  }, [viewingBoardId, dispatch]);

  return (
    <div className='boards'>
      <List>
        <BoardBadge
          onClick={() => setViewingBoardId('iZkLvqg7ayZu4err5HeD')}
          name='Exiled'
          imgSrc='https://static-cdn.jtvnw.net/jtv_user_pictures/1a7bf5c2-1df5-4ed7-bc6b-af3b336a412f-profile_image-300x300.png'
        />
        <BoardBadge
          onClick={() => setViewingBoardId('tozNGPRAl0J2b3ePd1lK')}
          name='Tech Team'
          imgSrc='https://i.pinimg.com/564x/9d/e7/c6/9de7c6a094b94250687944e15f58eb30.jpg'
        />
      </List>
    </div>
  );
}

export default Boards;
