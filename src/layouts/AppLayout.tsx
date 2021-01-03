import { makeStyles, Theme } from '@material-ui/core';
import { Outlet } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
}));

function AppLayout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Outlet />
    </div>
  );
}

export default AppLayout;
