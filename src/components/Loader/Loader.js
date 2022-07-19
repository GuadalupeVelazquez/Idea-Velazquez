import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const styles = {
    estilo : {
      display:'flex',
      justifyContent : 'center',
      alignItems: 'center',
      marginTop: '150px',
      opacity: '0.3'
    },
    estilos : {
      display : 'flex'
    }
  }
  
  export default function CircularIndeterminate() {
    return (
      <div style= {styles.estilo}> 
      <Box sx={{ display: 'inline-block' }}>
        <CircularProgress />
      </Box>
      </div>
    );
  }