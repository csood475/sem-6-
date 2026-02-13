import { Box, Heading, Text, Container, Stack, Button, SimpleGrid, Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Home() {
  const projects = [
    { id: 'proj-1', title: 'Project One', desc: 'A short description of project one.' },
    { id: 'proj-2', title: 'Project Two', desc: 'A short description of project two.' },
    { id: 'proj-3', title: 'Project Three', desc: 'A short description of project three.' },
  ];

  return (
    <Box>
      <Container maxW="container.md" py={12}>
        <Stack spacing={6} textAlign="center">
          <Heading size="2xl">Charu Sood</Heading>
          <Text fontSize="lg" color="gray.700">
            Web developer & designer creating clean, modern experiences. Specializing in React, Next.js and
            accessible UI using Chakra.
          </Text>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} justify="center">
            <Button as={NextLink} href="/portfolio" colorScheme="brand">
              View portfolio
            </Button>
            <Button as={NextLink} href="/contact" variant="outline">
              Contact
            </Button>
          </Stack>
        </Stack>
      </Container>

      <Container maxW="1200px" py={8}>
        <Heading size="lg" mb={4}>Selected projects</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {projects.map((p) => (
            <Box key={p.id} p={4} borderWidth={1} borderRadius="md" bg="white">
              <Heading size="md" mb={2}>{p.title}</Heading>
              <Text mb={4}>{p.desc}</Text>
              <ChakraLink as={NextLink} href={`/portfolio/${p.id}`} color="brand.600" fontWeight="semibold">
                View project
              </ChakraLink>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
