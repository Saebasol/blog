import * as React from 'react'
import * as PropTypes from 'prop-types'
import Head from 'next/head'
import {
  Box,
  IconButton,
  Heading,
  Image,
  Center,
  VStack,
  HStack,
  Text,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode
} from '@chakra-ui/react'
import {
  RiFileSearchLine,
  RiArrowRightLine
} from 'react-icons/ri'

import Container from '../components/Container'
import Footer from '../components/Footer'
import Post from '../components/Post'

import * as author from '../fns/author'
import * as post from '../fns/post'
import * as site from '../fns/site'

import useInput from '../hooks/useInput'

const Page = props => {
  const { colorMode } = useColorMode()
  const [search, setSearch] = useInput()

  const searchOnGoogle = () => {
    if (!search) {
      return
    }

    window.location = 'https://www.google.com/search?q=' + encodeURIComponent('site:blog.doujinshiman.ga ' + search)
  }

  return (
    <>
      <Box
        background='black'
      >
        <Head>
          <title>{site.name}</title>
        </Head>
      </Box>
      <Container>
        <VStack
          padding='65px 0'
          textAlign='center'
          spacing={1}
        >
          <Center>
            <Image
              width='95px'
              paddingRight='4px'
              src='/static/saebasol.icon.png'
            />
            <Heading
              size='2xl'
            >
              Saebasol
            </Heading>
          </Center>
          <Text
            fontSize='16px'
            color={
              colorMode === 'light'
                ? 'gray.700'
                : 'gray.300'
            }
          >
            Could you call us gentlemen?
          </Text>
          <HStack
            paddingTop='25px'
          >
            <InputGroup size='md'>
              <InputLeftElement pointerEvents='none'>
                <RiFileSearchLine />
              </InputLeftElement>
              <Input
                variant='filled'
                placeholder='Search...'
                fontSize='14px'
                value={search}
                onInput={setSearch}
                onKeyPress={event => {
                  if (event.key === 'Enter') {
                    searchOnGoogle()
                  }
                }}
              />
            </InputGroup>
            <IconButton
              onClick={searchOnGoogle}
              icon={<RiArrowRightLine />}
            />
          </HStack>
        </VStack>
      </Container>
      <Divider />
      <Container>
        <VStack
          margin='24px 0'
          divider={<Divider />}
          spacing={4}
          align='stretch'
        >
          {
            props.posts.map((article, key) => {
              return <Post key={key} {...article} />
            })
          }
        </VStack>
      </Container>
      <Footer />
    </>
  )
}

Page.propTypes = {
  posts: PropTypes.array
}

export const getStaticProps = async ctx => {
  const posts = Object
    .keys(post.getList())
    .map(slug => {
      const { data } = post.bySlug(slug)
      const user = author.byId(data.author)

      return {
        data,
        user
      }
    })
    .sort((a, b) => {
      return b.data.date - a.data.date
    })

  return {
    props: {
      posts
    }
  }
}

export default Page
