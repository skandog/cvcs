import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Menu,
  MenuIcon,
  MenuItem,
  MenuButton,
  IconButton,
} from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons';

const Navbar = () => {
  return (
    <Box position={'static'} as="nav" w="100%">
      <Container
        display={'flex'}
        p={3}
        maxW="container.lg"
        color={'white'}
        // wrap="wrap"
        // align="center"
        // justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg">
            CV Cheat Sheet
          </Heading>
        </Flex>

        <Stack
          direction={{base: 'column', md: 'row'}}
          display={{base: 'none', md: 'flex'}}
          width={{base: 'full', md: 'auto'}}
          align="center"
          flexGrow={1}
          mt={{base: 4, md: 0}}
        >
          <Link>Skills</Link> <Link>Stories</Link>
        </Stack>
        <Box flex={1}>
          <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
            <Menu isLazy id="nav-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
