const SCREEN_SIZES = [['phone', 500], ['tablet', 768], ['desktop', 1024]];

const colors = {
  beige: 'rgb(235, 231, 214)',
  blue: 'rgb(25, 33, 98)'
};

const fonts = {
  inter: {
    family: '"Inter UI", sans-serif',
    familyVar: '"Inter UI var", sans-serif'
  }
};

const mq = SCREEN_SIZES.reduce((acc, [name, size]) => {
  acc[name] = `only screen and (min-width: ${size}px)`;
  return acc;
}, {});

export { colors, fonts, mq };
