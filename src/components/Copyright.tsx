import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <Typography variant="body1" color="text.secondary" align="center">
      {'© '}
      {`${new Date().getFullYear()} PlaceMe`}
    </Typography>
  );
}
