import {Box} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box mt={5} position={'static'} as="footer" w="100%">
      <Box className="copyright">Copyright 2022</Box>
    </Box>
  );
};

export default Footer;
