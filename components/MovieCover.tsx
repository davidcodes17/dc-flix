import { Box, Image } from "@chakra-ui/react";
import React from "react";

const MovieCover = () => {
  return (
        <Image
          cursor={"pointer"}
          width={"200px"}
          minW={"200px"}
          mt={5}
          mr={5}
          objectFit={"cover"}
          height={"300px"}
          borderRadius={40}
          src="/kid.jpg"
        />
  );
};

export default MovieCover;
