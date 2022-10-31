import React from 'react';
import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router';
import Login from './pages/Login';
import Application from './pages/Application';
import { ColorModeSwitcher } from './config/ColorModeSwitcher';

const App = () => {
  return (
    <Box minH="100vh">
      <ColorModeSwitcher boxSize="6" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Application />} />
      </Routes>
    </Box>
  );
}

export default App;
