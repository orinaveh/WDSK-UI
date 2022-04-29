import { useEffect, useState } from 'react';

const key = 'mode';

export type PaletteMode = 'light' | 'dark';

type ReturnType = [PaletteMode, (a: PaletteMode) => void];

const useDarkMode = (): ReturnType => {
  const [darkMode, setDarkMode] = useState('light');

  useEffect(() => {
    setDarkMode(localStorage.getItem(key) ?? 'light');
  }, []);

  const onChange = (mode: PaletteMode) => {
    setDarkMode(mode);
    localStorage.setItem(key, mode);
  };

  return [darkMode as PaletteMode, onChange];
};

export default useDarkMode;
