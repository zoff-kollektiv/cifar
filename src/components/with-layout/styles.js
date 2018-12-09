import css from 'styled-jsx/css';

export default css`
  @font-face {
    font-display: swap;
    font-family: 'Inter UI';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/inter-ui/inter-ui.var.woff2') format('woff2-variations'),
      url('/fonts/inter-ui/inter-ui-regular.woff2') format('woff2'),
      url('/fonts/inter-ui/inter-ui-regular.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Inter UI';
    font-style: italic;
    font-weight: 400;
    src: url('/fonts/inter-ui/inter-ui.var.woff2') format('woff2-variations'),
      url('/fonts/inter-ui/inter-ui-italic.woff2') format('woff2'),
      url('/fonts/inter-ui/inter-ui-italic.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Inter UI';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/inter-ui/inter-ui.var.woff2') format('woff2-variations'),
      url('/fonts/inter-ui/inter-ui-medium.woff2') format('woff2'),
      url('/fonts/inter-ui/inter-ui-medium.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Inter UI';
    font-style: italic;
    font-weight: 500;
    src: url('/fonts/inter-ui/inter-ui.var.woff2') format('woff2-variations'),
      url('/fonts/inter-ui/inter-ui-mediumitalic.woff2') format('woff2'),
      url('/fonts/inter-ui/inter-ui-mediumitalic.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Inter UI';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/inter-ui/inter-ui.var.woff2') format('woff2-variations'),
      url('/fonts/inter-ui/inter-ui-semibold.woff2') format('woff2'),
      url('/fonts/inter-ui/inter-ui-semibold.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Inter UI';
    font-style: italic;
    font-weight: 600;
    src: url('/fonts/inter-ui/inter-ui.var.woff2') format('woff2-variations'),
      url('/fonts/inter-ui/inter-ui-semibolditalic.woff2') format('woff2'),
      url('/fonts/inter-ui/inter-ui-semibolditalic.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Inter UI';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/inter-ui/inter-ui.var.woff2') format('woff2-variations'),
      url('/fonts/inter-ui/inter-ui-bold.woff2') format('woff2'),
      url('/fonts/inter-ui/inter-ui-bold.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Inter UI';
    font-style: italic;
    font-weight: 700;
    src: url('/fonts/inter-ui/inter-ui.var.woff2') format('woff2-variations'),
      url('/fonts/inter-ui/inter-ui-bolditalic.woff2') format('woff2'),
      url('/fonts/inter-ui/inter-ui-bolditalic.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Inter UI';
    font-style: normal;
    font-weight: 800;
    src: url('/fonts/inter-ui/inter-ui.var.woff2') format('woff2-variations'),
      url('/fonts/inter-ui/inter-ui-extra-bold.woff2') format('woff2'),
      url('/fonts/inter-ui/inter-ui-extra-bold.woff') format('woff');
  }
  @font-face {
    font-display: swap;
    font-family: 'Inter UI';
    font-style: italic;
    font-weight: 800;
    src: url('/fonts/inter-ui/inter-ui.var.woff2') format('woff2-variations'),
      url('/fonts/inter-ui/inter-ui-extra-bolditalic.woff2') format('woff2'),
      url('/fonts/inter-ui/inter-ui-extra-bolditalic.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Inter UI';
    font-style: normal;
    font-weight: 900;
    src: url('/fonts/inter-ui/inter-ui.var.woff2') format('woff2-variations'),
      url('/fonts/inter-ui/inter-ui-black.woff2') format('woff2'),
      url('/fonts/inter-ui/inter-ui-black.woff') format('woff');
  }
  @font-face {
    font-display: swap;
    font-family: 'Inter UI';
    font-style: italic;
    font-weight: 900;
    src: url('/fonts/inter-ui/inter-ui.var.woff2') format('woff2-variations'),
      url('/fonts/inter-ui/inter-ui-blackitalic.woff2') format('woff2'),
      url('/fonts/inter-ui/inter-ui-blackitalic.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Inter UI var';
    src: url('/fonts/inter-ui/inter-ui.var.woff2') format('woff2-variations'),
      url('/fonts/inter-ui/inter-ui.var.woff2') format('woff2');
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
`;
