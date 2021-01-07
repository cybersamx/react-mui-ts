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

function ProfilePage() {
  const auth = useAuth();
  const classes = useStyles();
  const user = auth.getAuthUser();

  return (
    <Page title="Profile">
      <NavBar />
      <Container component="main" maxWidth="md" className={classes.root}>
        <Typography variant="h2" className={classes.title}>
          Profile
        </Typography>
        {user && user.avatar_url && (
          <Typography variant="h4">
            <Avatar src={user.avatar_url} alt="Samuel L. Jackson Avatar" /> Welcome {` ${user.username}`}
          </Typography>
        )}
        <Typography variant="body2">
          Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how
          you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're
          friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They
          called me Mr Glass.
        </Typography>
        <Typography variant="body2" className={classes.content}>
          Regular ipsum is just too boring. So the text was spiced it up with actual memorable movie quotes by Samuel L.
          Jackson, aka <a href="https://slipsum.com/">Samuel L. Ipsum</a> generator.
        </Typography>
      </Container>
    </Page>
  );
}

export default ProfilePage;
