import { Container, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Project() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container maxW="container.md" py={8}>
      <Heading mb={4}>Project: {id}</Heading>
      <Text>Details and case study for {id}. Replace with real content.</Text>
    </Container>
  );
}
