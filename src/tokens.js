const SCREEN_SIZES = [['phone', 500], ['tablet', 768], ['desktop', 1024]];

const colors = {
  brand: 'rgb(208, 2, 27)',
  lightGrey: 'rgb(205, 205, 205)'
};

const fonts = {
  inter: {
    family: '"Inter UI", sans-serif',
    familyVar: '"Inter UI var", sans-serif',
  }
};

const mq = SCREEN_SIZES.reduce((acc, [name, size]) => {
  acc[name] = `only screen and (min-width: ${size}px)`;
  return acc;
}, {});

export { colors, fonts, mq };
