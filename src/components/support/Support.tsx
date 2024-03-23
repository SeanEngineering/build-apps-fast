import { Box, Card, Heading, SimpleGrid } from '@chakra-ui/react';

const Support = () => {
  const SponsorCard = () => {
    return (
      <Card padding={'10px'} width='200px'>
        <Heading size={'lg'}>Test</Heading>
      </Card>
    );
  };
  return (
    <Box marginTop={'30px'}>
      <Heading size='md' letterSpacing={'5px'} color={'darkslategray'}>
        PROUDLY SPONSORED BY
      </Heading>
      <SimpleGrid columns={3} spacing={10} marginTop={'30px'}>
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
      </SimpleGrid>
    </Box>
  );
};

export default Support;
