import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './config/routes';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
