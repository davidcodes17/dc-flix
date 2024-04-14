import MovieCard from '@/components/MovieCard'
import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const TrendingMovies = () => {
  return (
    <Box px={{lg : 150, md : 150, sm : 5, base : 5}}>
        <Box pt={120} color={"#fff"}>
          <Heading fontSize={{lg : 50, md : 50, sm : 40, base : "35px"}} fontWeight={400}>Trending Movies</Heading>
          <Flex gap={{lg : 10, md : 10, sm : 5, base : 5}} mt={10} flexWrap={"wrap"}>
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