import { Box, Heading } from "@chakra-ui/react";
import { ColorModeSwitcher } from '../config/ColorModeSwitcher';

const Navbar = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" fontSize="xl" h={12} bg="cyan.300">
      <Heading as="h1">THE🤩FACESTAR</Heading>
      <ColorModeSwitcher />
    </Box>
  )
}

export default Navbar;