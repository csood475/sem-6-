import { Container, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Container maxW="container.md" py={8}>
      <Heading mb={4}>Post: {slug}</Heading>
      <Text>This is the content for {slug}. Replace with real content.</Text>
    </Container>
  );
}
