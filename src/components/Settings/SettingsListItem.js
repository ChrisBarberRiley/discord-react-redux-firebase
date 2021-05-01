import { ListItem, ListItemText } from '@material-ui/core';

function SettingsListItem({ k, v }) {
  return (
    <ListItem>
      <ListItemText primary={k} />
      <span>{v}</span>
    </ListItem>
  );
}

export default SettingsListItem;
