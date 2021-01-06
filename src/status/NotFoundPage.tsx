import { Container, makeStyles, Theme, Typography } from '@material-ui/core';

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
}));

function HomePage() {
  const classes = useStyles();

  return (
    <Page title="404 Not Found">
      <NavBar />
      <Container component="main" maxWidth="md" className={classes.root}>
        <Typography variant="h2" className={classes.title}>
          404 Not Found
        </Typography>
      </Container>
    </Page>
  );
}

export default HomePage;
