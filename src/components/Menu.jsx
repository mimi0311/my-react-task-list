import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, List, ListItem, Link } from '@chakra-ui/react';

function Menu() {
  return (
    <Box as="nav" p={4} shadow="md" borderWidth="1px" bg="purple.800" color="white">
      <List display="flex" flexDirection="row" justifyContent="center">
        <ListItem mr={20}>
          <Link as={RouterLink} to="/" textDecoration="none">
            Home
          </Link>
        </ListItem>
        <ListItem mr={20}>
          <Link as={RouterLink} to="/tasks" textDecoration="none">
            Tasks
          </Link>
        </ListItem>
        <ListItem>
          <Link as={RouterLink} to="/about" textDecoration="none">
            About Us
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}

export default Menu;
