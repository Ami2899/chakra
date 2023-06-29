"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Upcoming from '@/upcoming/Upcoming'
import { Box, Text, Flex } from "@chakra-ui/react"
import Matches from '@/matches/matches'

export default function Home() {
  return (
    <Box as="section" bg="teal.100" m="auto" height="900px" width="450px">
       <Upcoming />
      <Flex align="center" justify="center" pt="15px">
        <Box>
          <Text fontWeight="bolder" textAlign="center" m="auto" pb="7px">Upcoming</Text>
        </Box>
      </Flex>
      <Matches/>
    </Box>
  )
}
