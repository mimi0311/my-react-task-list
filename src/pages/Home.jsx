import React from 'react';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import welcomeBrucito from '../images/brucito.png'

function Home() {
  return (
    <>
        <Box 
          p={4} 
          textAlign="center" 
          bgGradient="linear(to-r, purple.300, purple.500, purple.700)" 
          borderRadius="lg" 
          boxShadow="2xl" 
          color="white"
        >
          <Heading as="h2" size="xl" my={6} textShadow="2px 2px #1a202c">
            Welcome to the To-do List App!
          </Heading>
          
          <Text fontSize="lg" fontStyle="italic" fontWeight="semibold">
            Here you can organize your tasks
          </Text>
        </Box>
        <Box>
          <Image 
            src={welcomeBrucito}
            alt="Welcome"  
            borderRadius="md"
            marginBottom="4"
          />
        </Box>
    
        </>
  );
    
}

export default Home;
