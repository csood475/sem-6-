import React from 'react';
import { Box, Container, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box as="footer" bg="gray.50" py={6} mt={8} borderTopWidth={1} borderColor="gray.100">
      <Container maxW="1200px">
        <Text fontSize="sm" textAlign="center" color="gray.600">
          © {new Date().getFullYear()} Charu Sood. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}
