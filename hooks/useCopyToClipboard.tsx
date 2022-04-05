import { useSnackbar } from 'notistack';
import { useCallback } from 'react';

const useCopyToClipboard = (textToCopy: string) => {
  const { enqueueSnackbar } = useSnackbar();

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(textToCopy);
    enqueueSnackbar('Copied Successfully', { variant: 'success' });
  }, [textToCopy]);

  return copyToClipboard;
};

export default useCopyToClipboard;
