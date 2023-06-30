import React from 'react'
import { Box, Text, HStack,Flex } from "@chakra-ui/react"
import { Image } from '@chakra-ui/next-js'

const Matches = () => {
  return (
    <Box>
    <Box bg="white" height="150px" pt="22px" boxShadow='base' p='6' rounded='md'>
      <HStack>
        <Box m="auto">
          <Image src="/2.jpeg" alt="" width={150} height={100}/>
        </Box>
        <Text fontWeight="bold">Vs</Text>
        <Box m="auto">
          <Image src="/3.jpeg" alt="" width={150} height={100}/>
        </Box>
      </HStack>
      <Box bg="red" m="0 auto" width="120px" borderRadius="5px">
          <Text textAlign="center" color="white">Time Left:0:0:0</Text>
        </Box>
    </Box>
    <br/>
    <Box bg="white" height="150px" pt="22px" boxShadow='base' p='6' rounded='md'>
    <HStack>
      <Box m="auto">
        <Image src="/2.jpeg" alt="" width={150} height={100}/>
      </Box>
      <Text fontWeight="bold">Vs</Text>
      <Box m="auto">
        <Image src="/3.jpeg" alt="" width={150} height={100}/>
      </Box>
    </HStack>
    <Box bg="red" m="0 auto" width="120px" borderRadius="5px">
        <Text textAlign="center" color="white">Time Left:0:0:0</Text>
      </Box>
  </Box>
  <br/>
    <Box bg="white" height="150px" pt="22px" boxShadow='base' p='6' rounded='md'>
    <HStack>
      <Box m="auto">
        <Image src="/2.jpeg" alt="" width={150} height={100}/>
      </Box>
      <Text fontWeight="bold">Vs</Text>
      <Box m="auto">
        <Image src="/3.jpeg" alt="" width={150} height={100}/>
      </Box>
    </HStack>
    <Box bg="red" m="0 auto" width="120px" borderRadius="5px">
        <Text textAlign="center" color="white">Time Left:0:0:0</Text>
      </Box>
  </Box>
  <br/>
    <Box bg="white" height="150px" pt="22px" boxShadow='base' p='6' rounded='md'>
    <HStack>
      <Box m="auto">
        <Image src="/2.jpeg" alt="" width={150} height={100}/>
      </Box>
      <Text fontWeight="bold">Vs</Text>
      <Box m="auto">
        <Image src="/3.jpeg" alt="" width={150} height={100}/>
      </Box>
    </HStack>
    <Box bg="red" m="0 auto" width="120px" borderRadius="5px">
        <Text textAlign="center" color="white">Time Left:0:0:0</Text>
      </Box>
  </Box>
  </Box>
  )
}

export default Matches
