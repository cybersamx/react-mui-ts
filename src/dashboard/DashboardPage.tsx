import { Container, makeStyles, Theme, Typography } from '@material-ui/core';

import { useAuth } from '../core/auth';
import { Avatar } from '../core/avatar';
import { Page } from '../layouts';
import { NavBar } from '../core/bars';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
  title: {
    marginTop: theme.spacing(1),
  },
  content: {
    marginTop: theme.spacing(1),
  },
}));

function DashboardPage() {
  const auth = useAuth();
  const classes = useStyles();
  const user = auth.getAuthUser();

  return (
    <Page title="Dashboard">
      <NavBar />
      <Container component="main" maxWidth="md" className={classes.root}>
        <Typography variant="h2" className={classes.title}>
          Dashboard
        </Typography>
        {user && user.avatar_url && (
          <Typography variant="h4">
            <Avatar src={user.avatar_url} alt="Samuel L. Jackson Avatar" /> Welcome {` ${user.username}`}
          </Typography>
        )}
        <Typography variant="body2">
          You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world
          once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know
          exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it
          out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two,
          but it wasn't. Nature is lethal but it doesn't hold a candle to man.
        </Typography>
        <Typography variant="body2" className={classes.content}>
          Regular ipsum is just too boring. So the text was spiced it up with actual memorable movie quotes by Samuel L.
          Jackson, aka <a href="https://slipsum.com/">Samuel L. Ipsum</a> generator.
        </Typography>
      </Container>
    </Page>
  );
}

export default DashboardPage;
