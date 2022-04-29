import { useState } from 'react';
import type { NextPage } from 'next';
import CronTester from 'react-js-cron';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CopyAll from '@mui/icons-material/CopyAll';
import Grid from '@mui/material/Grid';
import 'antd/lib/button/style/index.css';
import 'antd/lib/select/style/index.css';

import cronStyles from './index.module.scss';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';

const Cron: NextPage = () => {
  const [value, setValue] = useState('');

  const copyCron = useCopyToClipboard(value);

  return (
    <div className={styles.container}>
      <Head>
        <title>CRON</title>
        <meta name="description" content="CRON Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container justifyContent="center" alignItems="center" columns={16} spacing={6}>
        <Grid item xs={16}>
          <Typography sx={{ textAlign: 'center' }} variant="h2">
            CRON
          </Typography>
        </Grid>
        <Grid item xs={16}>
          <CronTester className={cronStyles.cron} value={value} setValue={setValue} />
        </Grid>
        <Grid container justifyContent="center" item xs={16}>
          <TextField
            value={value}
            onChange={(e) => setValue(e.target.value)}
            sx={{ textAlign: 'center' }}
            label="Result"
            InputProps={{
              endAdornment: (
                <IconButton onClick={copyCron}>
                  <CopyAll />
                </IconButton>
              )
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Cron;
