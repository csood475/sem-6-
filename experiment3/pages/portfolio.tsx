import { Container, Heading, Text, SimpleGrid, Box, Image } from '@chakra-ui/react';

const projects = [
  { id: 'proj-1', title: 'Project One', desc: 'A short description of project one.' , img: '/placeholder.png'},
  { id: 'proj-2', title: 'Project Two', desc: 'A short description of project two.' , img: '/placeholder.png'},
  { id: 'proj-3', title: 'Project Three', desc: 'A short description of project three.' , img: '/placeholder.png'},
];

export default function Portfolio() {
  return (
    <Container maxW="container.md" py={8}>
      <Heading mb={4}>Portfolio</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {projects.map((p) => (
          <Box key={p.id} borderWidth={1} borderRadius="md" overflow="hidden">
            <Image src={p.img} alt={p.title} objectFit="cover" w="100%" h="160px" />
            <Box p={4}>
              <Text fontWeight="semibold">{p.title}</Text>
              <Text>{p.desc}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
