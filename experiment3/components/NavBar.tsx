import React from 'react';
import NextLink from 'next/link';
import {
  Box,
  Flex,
  HStack,
  Button,
  useColorMode,
  Link as ChakraLink,
  IconButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';

// Use lightweight inline SVG icons to avoid external dependency on @chakra-ui/icons
const HamburgerIcon = (props: any) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
    <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
  </svg>
);

const CloseIcon = (props: any) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
    <path d="M18.3 5.71L12 12.01 5.7 5.71 4.29 7.12 10.59 13.42 4.29 19.71 5.7 21.12 12 14.83 18.3 21.12 19.71 19.71 13.42 13.42 19.71 7.12z" />
  </svg>
);

import { useRouter } from 'next/router';

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <Box as="header" bg="brand.500" color="white" px={4} py={3} position="sticky" top={0} zIndex="banner">
      <Flex maxW="1200px" mx="auto" align="center" justify="space-between">
        <HStack spacing={4} alignItems="center">
          <ChakraLink as={NextLink} href="/" fontWeight="bold">
            Charu Sood
          </ChakraLink>
        </HStack>

        <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
          {links.map((link) => {
            const isActive = router.pathname === link.href || router.pathname.startsWith(link.href + '/');
            return (
              <ChakraLink
                key={link.href}
                as={NextLink}
                href={link.href}
                px={2}
                py={1}
                bg={isActive ? 'brand.600' : undefined}
                _hover={{ textDecoration: 'none', bg: 'brand.600' }}
                borderRadius="md"
              >
                {link.label}
              </ChakraLink>
            );
          })}
          <Button onClick={toggleColorMode} size="sm" bg="whiteAlpha.200" _hover={{ bg: 'whiteAlpha.300' }}>
            {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
        </HStack>

        <IconButton
          aria-label="Open menu"
          display={{ base: 'inline-flex', md: 'none' }}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={onToggle}
          bg="whiteAlpha.200"
          _hover={{ bg: 'whiteAlpha.300' }}
        />
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={2}>
            {links.map((link) => {
              const isActive = router.pathname === link.href;
              return (
                <ChakraLink
                  key={link.href}
                  as={NextLink}
                  href={link.href}
                  px={3}
                  py={2}
                  bg={isActive ? 'brand.600' : undefined}
                  _hover={{ textDecoration: 'none', bg: 'brand.600' }}
                  borderRadius="md"
                >
                  {link.label}
                </ChakraLink>
              );
            })}
            <Button onClick={toggleColorMode} size="sm" bg="whiteAlpha.200" _hover={{ bg: 'whiteAlpha.300' }}>
              {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
