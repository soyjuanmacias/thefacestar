import { Grid, GridItem, Heading, Button } from '@chakra-ui/react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';

const Application = () => {
  return (
    <Grid
      templateAreas={`"main"`}
      gridTemplateRows={'auto 1fr'}
      gridTemplateColumns={'auto 1fr'}
      minH="inherit"
      transition="2s"
    >
      <GridItem
        area={'main'}
        minH="100%"
        overflow="hidden"
      >
        <Button as={Link} to="/login">Login</Button>

        <Heading>
          Home
        </Heading>


        <Routes>
          <Route path="home" element={<Home />} />
        </Routes>
      </GridItem>
    </Grid>
  );
};

export default Application;
