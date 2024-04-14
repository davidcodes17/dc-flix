import MovieCard from '@/components/MovieCard'
import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const TrendingMovies = () => {
  return (
    <Box px={150}>
        <Box pt={120} color={"#fff"}>
          <Heading fontSize={50}>Trending Movies</Heading>
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

export default TrendingMovies