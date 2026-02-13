import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const colors = {
  brand: {
    50: '#e6fffa',
    100: '#bff5ea',
    200: '#80ead6',
    300: '#4fd3bf',
    400: '#26bfa9',
    500: '#109f8f',
    600: '#0d8576',
    700: '#0a6a5a',
    800: '#06443e',
    900: '#032726'
  },
  accent: {
    500: '#ffb86b'
  }
};

const fonts = {
  heading: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
  body: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial'
};

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

const components = {
  Button: {
    baseStyle: {},
    defaultProps: {
      colorScheme: 'brand'
    }
  },
  Link: {
    baseStyle: {
      _hover: { textDecoration: 'none', opacity: 0.9 }
    }
  }
};

const styles = {
  global: {
    body: {
      bg: 'gray.50',
      color: 'gray.800'
    },
    'html, body, #__next': {
      height: '100%'
    }
  }
};

const theme = extendTheme({ colors, fonts, config, components, styles });

export default theme;

// Edit theme variables above in `theme/index.ts`
