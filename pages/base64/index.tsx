import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Buffer } from 'buffer';
import Button from '@mui/material/Button';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { Grid, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState('');
  const router = useRouter();

  const setQuery = (type: 'en' | 'de') => {
    router.push({
      query: {
        [type]: userInput
      }
    });
  };
  const decode = (de?: string) => {
    setResult(Buffer.from(de ?? userInput, 'base64').toString('utf-8'));
  };

  const encode = (en?: string) => {
    setResult(Buffer.from(en ?? userInput).toString('base64'));
  };

  useEffect(() => {
    const { en, de } = router.query;
    if (de || en) {
      setUserInput((de || en) as string);
      if (de) {
        decode(de as string);
      } else {
        encode(en as string);
      }
    }
  }, [router.query]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Base 64</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container justifyContent="center" alignItems="center" columns={16} spacing={4}>
        <Grid item md={3} xs={8}>
          <Button fullWidth onClick={() => setQuery('en')}>
            ENCODE
          </Button>
        </Grid>
        <Grid item md={3} xs={8}>
          <Button fullWidth onClick={() => setQuery('de')}>
            DECODE
          </Button>
        </Grid>
        <Grid item md={10} xs={16} sm={16}>
          <TextField
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            fullWidth
            multiline
            rows={8}
          />
        </Grid>
        <Grid item xs={16}>
          <TextField value={result} disabled fullWidth multiline rows={8} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
