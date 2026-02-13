import { Container, Heading, Text, VStack, Box } from '@chakra-ui/react';

const services = [
  { id: 'svc-1', title: 'Consulting', desc: 'Expert advice.' },
  { id: 'svc-2', title: 'Design', desc: 'UI/UX design.' },
  { id: 'svc-3', title: 'Development', desc: 'Web development.' },
];

export default function Services() {
  return (
    <Container maxW="container.md" py={8}>
      <Heading mb={4}>Services</Heading>
      <VStack align="stretch" spacing={4}>
        {services.map((s) => (
          <Box key={s.id} p={4} borderWidth={1} borderRadius="md">
            <Text fontWeight="semibold">{s.title}</Text>
            <Text>{s.desc}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
}
