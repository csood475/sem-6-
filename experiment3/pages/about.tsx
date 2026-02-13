import { Container, Heading, Text, Stack, Avatar, Box } from '@chakra-ui/react';

export default function About() {
  return (
    <Container maxW="container.md" py={8}>
      <Stack spacing={6} align="center" textAlign="center">
        <Avatar name="Charu Sood" size="xl" />
        <Box>
          <Heading mb={2}>About Charu Sood</Heading>
          <Text>Frontend developer focused on building accessible, responsive web apps using React and Next.js.</Text>
        </Box>
      </Stack>
    </Container>
  );
}
