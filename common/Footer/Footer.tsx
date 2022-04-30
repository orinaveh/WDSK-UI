import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';

import styles from './Footer.module.scss';

const Footer = ({ email }: { email?: string }) => {
  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, height: '5rem' }}>
      <div className={styles.content}>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          WDSK - For Developers
        </Typography>

        <IconButton color="secondary" href={`mailto:${email}`}>
          <MailIcon />
        </IconButton>
      </div>
    </AppBar>
  );
};

export default Footer;
