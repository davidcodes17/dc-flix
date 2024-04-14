"use client"
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const page = () => {
  const [loading,setLoading] = useState(false);
  return (
    <Box>
      <Flex>
        <Image
          src="/kid.jpg"
          width={"60vw"}
          display={{ lg: "block", md: "block", sm: "none", base: "none" }}
          height={"100vh"}
          objectFit={"cover"}
        />
        <Box
          px={{ lg: 100, md: 100, sm: 10, base: 10 }}
          pt={150}
          width={{base : "100%",sm : "100%", md : "50vw", lg : "40vw"}}
          color={"#fff"}
        >
          <Heading
            fontFamily={"Anton !important"}
            fontSize={{ lg: 50, md: 50, sm: 50, base: 40 }}
          >
            Welcome Back👋
          </Heading>
          <Text>Please all fields are required⚠️</Text>
          <Box pt={5}>
            <FormControl>
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                border={"2px solid #fff"}
                borderRadius={10}
                fontSize={12}
                placeholder="you@gmail.com"
              />
            </FormControl>
            <FormControl pt={5}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                border={"2px solid #fff"}
                borderRadius={10}
                fontSize={12}
                placeholder="*****************"
              />
            </FormControl>
            <Button
              mt={5}
              width={"full"}
              py={6}
              onClick={()=>{
                setLoading(!loading);
              }}
              borderRadius={10}
              fontWeight={400}
              href="/home"
              as={Link}
              bg={"#fff"}
              _hover={{
                bg: "#000",
                color: "#fff",
              }}
              color={"#000"}
            >
              { loading ? "Login" : <Spinner  />}
            </Button>
            <Text pt={2} textAlign={"center"}>
              <Link href="/home">Don't have an account? Sign Up</Link>
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default page;
