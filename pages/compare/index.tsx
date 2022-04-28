import React from 'react';
import ReactDiffViewer from 'react-diff-viewer';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';

type Datas = 'oldData' | 'newData';

const TextDiff: NextPage = () => {
  const [oldDataString, setOldDataString] = useState('');
  const [newDataString, setNewDataString] = useState('');

  const states = {
    oldData: {
      string: oldDataString,
      setString: setOldDataString
    },
    newData: {
      string: newDataString,
      setString: setNewDataString
    }
  };

  const onChange = (newString: string, type: Datas) => {
    states[type].setString(newString);
  };

  const jsonTextField = (type: Datas) => (
    <TextField
      value={states[type].string}
      onChange={(e) => onChange(e.target.value, type)}
      fullWidth
      multiline
      rows={8}
    />
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Text Diff</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container justifyContent="center" alignItems="center" columns={16} spacing={6}>
        <Grid item xs={16}>
          <Typography sx={{ textAlign: 'center' }} variant="h2">
            Text Diff
          </Typography>
        </Grid>
        <Grid item md={8} xs={16} sm={16}>
          {jsonTextField('oldData')}
        </Grid>
        <Grid item md={8} xs={16} sm={16}>
          {jsonTextField('newData')}
        </Grid>
        <Grid item xs={16}>
          <ReactDiffViewer useDarkTheme oldValue={oldDataString} newValue={newDataString} />
        </Grid>
      </Grid>
    </div>
  );
};

export default TextDiff;
