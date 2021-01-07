import { makeStyles } from '@material-ui/core';

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}

const useStyles = makeStyles(() => ({
  avatar: {
    'max-width': '48px',
    'max-height': '48px',
    width: 'auto',
    height: 'auto',
    'vertical-align': 'middle',
  },
}));

function Avatar({ src, alt, className }: AvatarProps) {
  const classes = useStyles();

  return <img src={src} alt={alt} className={className || classes.avatar} />;
}

export type { AvatarProps };
export default Avatar;
