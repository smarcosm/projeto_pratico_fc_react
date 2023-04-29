import { Box, Container } from '@mui/material';
import React from 'react';

export function Layout({ children }:{ children: React.ReactNode}) {
  return (
    <Box>
      <Container 
        maxWidth="lg" 
        sx={{ 
          mt: 4, 
          mb: 4, 
          backgroundColor: "#242426",
        }}
      >
        {children}
      </Container>
    </Box>
  );
}
