import css from 'styled-jsx/css';

import { colors } from '../../tokens';

export default css`
  @font-face {
    font-display: swap;
    font-family: 'Inter UI';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/inter-ui/Inter.var.woff2') format('woff2-variations'),
      url('/fonts/inter-ui/Inter-Regular.woff2') format('woff2'),
      url('/fonts/inter-ui/Inter-Regular.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Inter UI';
    font-style: italic;
    font-weight: 400;
    src: url('/fonts/inter-ui/Inter.var.woff2') format('woff2-variations'),
      url('/fonts/inter-ui/Inter-Italic.woff2') format('woff2'),
      url('/fonts/inter-ui/Inter-Italic.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Inter UI';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/inter-ui/Inter.var.woff2') format('woff2-variations'),
      url('/fonts/inter-ui/Inter-Medium.woff2') format('woff2'),
      url('/fonts/inter-ui/Inter-Medium.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Inter UI';
    font-style: italic;
    font-weight: 500;
    src: url('/fonts/inter-ui/Inter.var.woff2') format('woff2-variations'),
      url('/fonts/inter-ui/Inter-MediumItalic.woff2') format('woff2'),
      url('/fonts/inter-ui/Inter-MediumItalic.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Inter UI';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/inter-ui/Inter.var.woff2') format('woff2-variations'),
      url('/fonts/inter-ui/Inter-SemiBold.woff2') format('woff2'),
      url('/fonts/inter-ui/Inter-SemiBold.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Inter UI';
    font-style: italic;
    font-weight: 600;
    src: url('/fonts/inter-ui/Inter.var.woff2') format('woff2-variations'),
      url('/fonts/inter-ui/Inter-SemiBoldItalic.woff2') format('woff2'),
      url('/fonts/inter-ui/Inter-SemiBoldItalic.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Inter UI';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/inter-ui/Inter.var.woff2') format('woff2-variations'),
      url('/fonts/inter-ui/Inter-Bold.woff2') format('woff2'),
      url('/fonts/inter-ui/Inter-Bold.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Inter UI';
    font-style: italic;
    font-weight: 700;
    src: url('/fonts/inter-ui/Inter.var.woff2') format('woff2-variations'),
      url('/fonts/inter-ui/Inter-BoldItalic.woff2') format('woff2'),
      url('/fonts/inter-ui/Inter-BoldItalic.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Inter UI';
    font-style: normal;
    font-weight: 800;
    src: url('/fonts/inter-ui/Inter.var.woff2') format('woff2-variations'),
      url('/fonts/inter-ui/Inter-ExtraBold.woff2') format('woff2'),
      url('/fonts/inter-ui/Inter-ExtraBold.woff') format('woff');
  }
  @font-face {
    font-display: swap;
    font-family: 'Inter UI';
    font-style: italic;
    font-weight: 800;
    src: url('/fonts/inter-ui/Inter.var.woff2') format('woff2-variations'),
      url('/fonts/inter-ui/Inter-ExtraBoldItalic.woff2') format('woff2'),
      url('/fonts/inter-ui/Inter-ExtraBoldItalic.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Inter UI';
    font-style: normal;
    font-weight: 900;
    src: url('/fonts/inter-ui/Inter.var.woff2') format('woff2-variations'),
      url('/fonts/inter-ui/Inter-Black.woff2') format('woff2'),
      url('/fonts/inter-ui/Inter-Black.woff') format('woff');
  }
  @font-face {
    font-display: swap;
    font-family: 'Inter UI';
    font-style: italic;
    font-weight: 900;
    src: url('/fonts/inter-ui/Inter.var.woff2') format('woff2-variations'),
      url('/fonts/inter-ui/Inter-BlackItalic.woff2') format('woff2'),
      url('/fonts/inter-ui/Inter-BlackItalic.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Inter UI var';
    src: url('/fonts/inter-ui/Inter.var.woff2') format('woff2-variations'),
      url('/fonts/inter-ui/Inter.var.woff2') format('woff2');
  }

  :global(*),
  :global(*::after),
  :global(*::before) {
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
    padding: 0;
  }

  :global(html),
  :global(input[type='text']) {
    font-family: 'Inter UI', system-ui, sans-serif;
    font-kerning: normal;
    font-feature-settings: 'calt' 1, 'kern' 1, 'liga' 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :global(:focus:not(:focus-visible)) {
    outline: none;
  }

  @supports (font-variation-settings: normal) {
    :global(html) {
      font-family: 'Inter UI var', system-ui, sans-serif;
    }
  }

  :global(::selection) {
    background-color: ${colors.blue};
    color: white;
  }
`;
