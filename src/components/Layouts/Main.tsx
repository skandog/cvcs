import {Box, Container} from '@chakra-ui/react';
import Navbar from '../Navbar';
// import Footer from '../Footer';

const Main = ({children}) => {
  return (
    <Box as="main" pb={8}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📃</text></svg>"
        />
        <title>CV Cheat Sheet</title>
      </head>
      <Navbar />
      <Container maxW={'container.lg'} pt={6}>
        {children}
      </Container>
      {/* <Footer /> */}
    </Box>
  );
};

export default Main;
