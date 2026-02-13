import { Container, Heading, Text, Stack, Input, Button, FormControl, FormLabel, Textarea } from '@chakra-ui/react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('Thanks, your message was received (demo).');
  }

  return (
    <Container maxW="container.md" py={8}>
      <Heading mb={4}>Contact</Heading>
      <Text mb={4}>You can reach us at contact@example.com</Text>

      <Stack spacing={3} as="form" onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Your name" required />
        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="your@email.com" required />
        </FormControl>

        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Message" required />
        </FormControl>

        <Button type="submit" colorScheme="brand">Send</Button>
        {status && <Text color="green.600">{status}</Text>}
      </Stack>
    </Container>
  );
}
