import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
}

export default AppLayout;
