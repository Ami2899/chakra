"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Upcoming from '@/upcoming/Upcoming'
import { Box, Text, Flex } from "@chakra-ui/react"
import Matches from '@/matches/matches'

export default function Home() {
  return (
    <Box as="section" boxShadow='2xl' p='6' rounded='md' bg='white' m="auto" height="900px" width="450px">
       <Upcoming />
      <Flex align="center" justify="center" pt="15px" color="teal.900">
        <Box m="auto">
          <Text fontWeight="bolder" textAlign="center" m="auto" pb="7px">Upcoming</Text>
        </Box>
        <Box m="auto">
          <Text fontWeight="bolder" textAlign="center" m="auto" pb="7px">Live</Text>
        </Box>
        <Box m="auto">
          <Text fontWeight="bolder" textAlign="center" m="auto" pb="7px">Result</Text>
        </Box>
      </Flex>
      <Matches/>
    </Box>
  )
}
