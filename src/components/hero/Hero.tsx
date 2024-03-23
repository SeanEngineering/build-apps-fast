import { Box, Card, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Hero = () => {
  return (
    <Box>
      <Heading size='4xl' letterSpacing={'1px'}>
        Save time. Build fast
      </Heading>
      <Card
        width='80vw'
        height={'1000px'}
        marginTop={'30px'}
        background={'rgba(0,0,0,0.1)'}
        marginBottom={'30px'}
      >
        <Text>Test</Text>
      </Card>
    </Box>
  );
};

export default Hero;
