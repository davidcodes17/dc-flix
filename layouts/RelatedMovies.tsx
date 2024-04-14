import MovieCard from '@/components/MovieCard'
import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const RelatedMovies = () => {
  return (
    <Box px={150}>
        <Box py={100} color={"#fff"}>
          <Heading fontSize={50}>Related Movies</Heading>
          <Flex gap={10} mt={10} flexWrap={"wrap"}>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </Flex>
        </Box>
      </Box>
  )
}

export default RelatedMovies