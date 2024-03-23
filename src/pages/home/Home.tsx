import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
} from '@chakra-ui/react';
import ScrollAnimation from 'react-animate-on-scroll';

import { StyledCard } from './styles';
import Support from '../../components/support/Support';
import Hero from '../../components/hero/Hero';

const Home = () => {
  return (
    <Flex
      flexDirection='column'
      minHeight={'200vh'}
      justifyContent={'start'}
      alignItems={'center'}
    >
      <StyledCard>
        <Heading size={'4xl'} display={'flex'} gap={'10px'}>
          This is the
          <Heading color='white !important' size={'4xl'}>
            website title
          </Heading>
        </Heading>
        <Heading>This is the subtitle...</Heading>
        <Container color={'white'} width={'50%'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veritatis
          nam, non, quaerat, eius distinctio quis facilis in dignissimos
          blanditiis doloribus repudiandae numquam eos perferendis! Quidem
          fugiat illo minus sed!
        </Container>
      </StyledCard>

      <Flex justifyContent={'center'} gap={'30px'} marginTop={'50px'}>
        <Button colorScheme='teal' size={'lg'}>
          Join now!
        </Button>
        <Button colorScheme='gray' size={'lg'}>
          Linkedin
        </Button>
      </Flex>
      <Divider marginTop={'50px'} marginBottom={'30px'} />
      <Support />
      <ScrollAnimation animateIn='fadeIn'>
        <Box marginTop={'100px'}>
          <Hero />
        </Box>
      </ScrollAnimation>
    </Flex>
  );
};

export default Home;
