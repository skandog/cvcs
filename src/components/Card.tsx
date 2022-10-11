import React from 'react';
import {Box, Stack} from '@chakra-ui/react';

function Card(props) {
  const {children} = props;

  return (
    <Box
      p={4}
      display={{md: 'flex'}}
      maxWidth="32rem"
      borderWidth={1}
      margin={2}
    >
      {/* <AspectRatio ratio={1 / 1}>
        <Image
          maxWidth="200px"
          margin="auto"
          src="https://picsum.photos/id/237/250/250"
          alt="Woman paying for a purchase"
        />
      </AspectRatio> */}
      <Stack
        align={{base: 'center', md: 'stretch'}}
        textAlign={{base: 'left', md: 'left'}}
        mt={{base: 2, md: 0}}
        mb={{base: 2, md: 0}}
        ml={{md: 6}}
      >
        {children}
      </Stack>
    </Box>
  );
}

export default Card;
