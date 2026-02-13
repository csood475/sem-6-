import { Container, Heading, Text, VStack, Link as ChakraLink, Box } from '@chakra-ui/react';
import NextLink from 'next/link';

const posts = [
  { slug: 'post-1', title: 'Post One', excerpt: 'This is the first sample post.' },
  { slug: 'post-2', title: 'Post Two', excerpt: 'This is the second sample post.' },
];

export default function BlogIndex() {
  return (
    <Container maxW="container.md" py={8}>
      <Heading mb={4}>Blog</Heading>
      <VStack align="stretch" spacing={4}>
        {posts.map((p) => (
          <Box key={p.slug} p={4} borderWidth={1} borderRadius="md">
            <ChakraLink as={NextLink} href={`/blog/${p.slug}`} fontWeight="semibold" display="block" mb={2}>
              {p.title}
            </ChakraLink>
            <Text>{p.excerpt}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
}
