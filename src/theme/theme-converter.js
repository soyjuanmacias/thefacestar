// const { extendTheme } = require('@chakra-ui/react');
const tokens = require('../tokens.json');

// const keys = Object.keys(tokens).map((key) => Object.keys(tokens[key]));
// console.log(keys.flat(1));

const parseValue = item => item.value;

const parseNested = item =>
  Object.entries(item).map(([key, value]) => ({ [key]: value.value }));

const colors = [
  'black',
  'white',
  'whiteAlpha',
  'blackAlpha',
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'cyan',
  'purple',
  'pink',
  'gradient',
];

const getChakraSemanticTokens = figmaTokens => {
  const semanticTokens = {
    radii: {},
    colors: {},
    shadows: {},
    fonts: {},
    fontWeights: {},
    space: {},
    lineHeights: {},
    sizes: {},
    borders: {},
    fontSizes: {},
  };

  for (const [key, values] of Object.entries(figmaTokens)) {
    if (!key.includes('thefacestar')) continue;

    // for (const[key, values] in Object.entries(values)) {
    //   console.log('key', key);
    // }

    const result = Object.entries(values).reduce((acc, [category, value]) => {
      if (colors.includes(category)) {
        let parsed;
        if (value.value) parsed = parseValue(value);
        else parsed = parseNested(value);
        acc.colors = { ...acc.colors, [category]: parsed };
      }

      console.log(category)
      return acc;
    }, {});

    console.log(result);

    //     for (const property in figmaTokens[category]) {
    //       if (category === 'colors') {
    //         for (const token in figmaTokens[category].light) {
    //           semanticTokens[category][token] = {
    //             default: figmaTokens[category].light[token],
    //             _dark: figmaTokens[category].dark[token],
    //           };
    //         }
    //       } else {
    //         const tokens = figmaTokens[category].light || figmaTokens[category];

    //         for (const token in tokens) {
    //           semanticTokens[category][token] = tokens[token];
    //         }
    //       }
    //     }
  }
  return semanticTokens;
};

getChakraSemanticTokens(tokens);
