import { useState } from 'react';
import type { NextPage } from 'next';
import CronTester from 'react-js-cron';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { Grid, Typography } from '@mui/material';
import 'antd/dist/antd.css';

import cronStyles from './index.module.scss';

const Cron: NextPage = () => {
  const [value, setValue] = useState('');

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
        <Grid item xs={16}>
          <Typography sx={{ textAlign: 'center' }} variant="h3">
            Result: {value}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cron;
