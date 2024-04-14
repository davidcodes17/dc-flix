import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { Screenmirroring } from "iconsax-react";
import React from "react";

const MovieCard = () => {
  return (
    <Box>
      <Image
        cursor={"pointer"}
        width={"200px"}
        minW={"200px"}
        objectFit={"cover"}
        height={"300px"}
        borderRadius={40}
        src="/kid.jpg"
      />
      <Box mt={2}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Text fontWeight={700} fontSize={20}>
              Aladin Movie
            </Text>
            <Text>Mon 12th April</Text>
          </Box>
          <IconButton
            mt={5}
            display={"block"}
            aria-label="Home"
            icon={<Screenmirroring size={30} variant="Bold" color="#fff" />}
            bg={"none"}
            _hover={{ bg: "none" }}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default MovieCard;
