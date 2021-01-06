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
  content: {
    marginTop: theme.spacing(1),
  },
}));

function HomePage() {
  const classes = useStyles();

  return (
    <Page title="React-Material-TypeScript Starter Project">
      <NavBar />
      <Container component="main" maxWidth="md" className={classes.root}>
        <Typography variant="h2" className={classes.title}>
          React-Material-TypeScript Starter Project
        </Typography>
        <Typography variant="body2" className={classes.content}>
          The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil
          men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of
          darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon
          thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you
          will know My name is the Lord when I lay My vengeance upon thee.
        </Typography>
        <Typography variant="body2" className={classes.content}>
          Regular ipsum is just too boring. So the text was spiced it up with actual memorable movie quotes by Samuel L.
          Jackson, aka <a href="https://slipsum.com/">Samuel L. Ipsum</a> generator.
        </Typography>
      </Container>
    </Page>
  );
}

export default HomePage;
