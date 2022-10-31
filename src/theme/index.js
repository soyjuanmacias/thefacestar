import { extendTheme } from '@chakra-ui/react';
import { foundations } from './foundations';
import semanticTokens from './semanticTokens';
import colors from './foundations/colors';
import components from './components';
import config from './config';

const overrides = {
  ...foundations,
  semanticTokens,
  colors,
  components,
  config,
};
const theme = extendTheme(overrides);

export default theme;
