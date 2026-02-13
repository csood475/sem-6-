import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <NavBar />

      <Container as="main" maxW="1200px" flex="1" py={8}>
        {children}
      </Container>

      <Footer />
    </Box>
  );
}
