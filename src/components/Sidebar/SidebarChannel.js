import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../../features/app/appSlice';
import './SidebarChannel.css';

function SidebarChannel({ id, channelName }) {
  const dispatch = useDispatch();

  const selectChannel = () => {
    dispatch(
      setChannelInfo({
        channelId: id,
        channelName,
      })
    );

    document.title = `${channelName}`;
  };

  return (
    <div className='sidebarChannel' onClick={selectChannel}>
      <h4>
        <span className='sidebarChannel__hash'>#</span> {channelName}
      </h4>
    </div>
  );
}

export default SidebarChannel;
