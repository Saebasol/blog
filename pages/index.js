import * as React from 'react'
import {
  Box
} from '@chakra-ui/react'

import Container from '../components/Container'
import Header from '../components/Header'

const Page = props => {
  return (
    <Box
      background='black'
    >
      <Container>
        <Header />
      </Container>
    </Box>
  )
}

export default Page
