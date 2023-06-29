import React from 'react'
import { Box, Text, HStack, Flex } from "@chakra-ui/react"
import Image from 'next/image'

const Matches = () => {
  return (
    <Box as="section" bg="teal.500" m="auto">
      <Text textAlign="center" fontWeight="bold" color="teal.100" pt="5px" pb="5px">Choose an upcoming match.</Text>
        <Box borderRadius="5px" bg="teal.300" m="auto" width="400px" height="200px">
          <Text textAlign="center" fontWeight="bold" color="teal.900"  pt="8px">Indian T20 League</Text>
          <HStack width={400} pt="30px" pb="5px">
            <Image src="/2.jpeg" alt="" width={200} height={150}/>
            <Text>Vs</Text>
            <Image src="/2.jpeg" alt="" width={200} height={150} />
          </HStack>
         <Box textAlign="center" bg="red.900" width="80px" color="white" fontWeight="bold" m="auto">1 hr  left</Box>
        </Box>
        <br/>
        <Box borderRadius="5px" bg="teal.300" m="auto" width="400px" height="200px">
        <Text textAlign="center" fontWeight="bold" color="teal.900" pt="8px">Indian T20 League</Text>
          <HStack width={400} pt="30px"  pb="5px">
            <Image src="/2.jpeg" alt="" width={200} height={150} />
            <Text>Vs</Text>
            <Image src="/2.jpeg" alt="" width={200} height={150} />
          </HStack>
          <Box textAlign="center" bg="red.900" width="80px" color="white" fontWeight="bold" m="auto">1 hr  left</Box>
        </Box>
        <br/>
        <Box borderRadius="5px" bg="teal.300" m="auto" width="400px" height="200px">
        <Text textAlign="center" fontWeight="bold" color="teal.900" pt="8px">Indian T20 League</Text>
          <HStack width={400} pt="30px" pb="5px">
            <Image src="/2.jpeg" alt="" width={200} height={150} />
            <Text>Vs</Text>
            <Image src="/2.jpeg" alt="" width={200} height={150} />
          </HStack>
          <Box textAlign="center" bg="red.900" width="80px" color="white" fontWeight="bold" m="auto">1 hr  left</Box>
        </Box>
        <br/>
    </Box>
  )
}

export default Matches
