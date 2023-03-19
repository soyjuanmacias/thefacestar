// const { extendTheme } = require('@chakra-ui/react');
const tokens = require('./tokens.json');

const keys = Object.keys(tokens).map((key) => Object.keys(tokens[key]));
console.log(keys.flat(1));

const getChakraSemanticTokens = (figmaTokens) => {
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

  for (const[key, value] in Object.entries(figmaTokens)) {
    console.out(key, value);
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
//   }
//   return semanticTokens;
};

getChakraSemanticTokens(tokens);
