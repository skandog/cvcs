import {Box, Container, Heading} from '@chakra-ui/react';

const Navbar = (props): any => {
  return (
    <Box position={'static'} as="nav" w="100%" {...props}>
      <Container
        display={'flex'}
        p={3}
        maxW="container.lg"
        color={'white'}
        // wrap="wrap"
        // align="center"
        // justify="space-between"
      ></Container>
    </Box>
  );
};

export default Navbar;
