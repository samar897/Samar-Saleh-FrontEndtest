import React from "react";
import { Box, Flex, chakra } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { AiOutlineLink, AiOutlineTwitter } from "react-icons/ai";
export default function Linkedin(){
  return (
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#2D3748" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="full"
        maxW="sm"
        mx="auto"
        px={4}
        py={3}
        bg="white"
        _dark={{ bg : "#2D3748" }}
        shadow="md"
        rounded="md"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span
            fontSize="sm"
            color="gray.800"
            _dark={{ color: "gray.400" }}
          >
           Samar
          </chakra.span>
          <chakra.span
            color="brand.800"
            _dark={{ color: "brand.900" }}
            px={3}
            py={1}
            rounded="full"
            textTransform="uppercase"
            fontSize="xs"
          >
          PNU
          </chakra.span>
        </Flex>

        <Box>
          <chakra.h1
            fontSize="lg"
            fontWeight="bold"
            mt={2}
            color="gray.800"
            _dark={{ color: "white" }}
          >
          CS
          </chakra.h1>
          <chakra.p
            fontSize="sm"
            mt={2}
            color="gray.600"
            _dark={{ color: "gray.300" }}
          >
          Technology and computers are the closest fields to me. 
          Passion and ambition is the main driver for learning and progress in my field. I am a person who loves to learn and gain experiences 
          from everyone. I aspire to learn everything new, I want to benefit my community.
          </chakra.p>
        </Box>

        <Box>
          <Flex
            alignItems="center"
            mt={2}
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            <span>Visit on:</span>
            
            <Link to="https://www.linkedin.com/in/samar-saleh/"
              mx={2}
              cursor="pointer"
              textDecor="underline"
              color="brand.600"
              _dark={{ color: "brand.400" }}>
              Linkedin
            </Link>
          </Flex>

          <Flex alignItems="center" justifyContent="center" mt={4}>
            <Link
              mr={2}
              color="gray.800"
              _dark={{ color: "gray.400" }}
              _hover={{ color: "gray.700", _dark: { color: "gray.300" } }}
              cursor="pointer"
            >
              <AiOutlineTwitter />
            </Link>

            <Link
              mr={2}
              color="gray.800"
              _dark={{ color: "gray.400" }}
              _hover={{ color: "gray.700", _dark: { color: "gray.300" } }}
              cursor="pointer"
            >
              <AiOutlineLink />
            </Link>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

