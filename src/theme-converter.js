const { extendTheme } = require('@chakra-ui/react');
const tokens = require('./tokens.json');

const keys = Object.keys(tokens).map((key) => Object.keys(tokens[key]));
console.log(keys.flat(1));

// const customTheme = extendTheme({
//   colors: {
//     brand: tokens.colors.brand,
//     accent: tokens.colors.accent,
//   },
//   fonts: {
//     body: tokens.fonts.body,
//     heading: tokens.fonts.heading,
//   },
//   fontSizes: {
//     xs: tokens.fontSizes.xs,
//     sm: tokens.fontSizes.sm,
//   },
// });

// console.log(customTheme);
