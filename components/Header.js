import * as React from "react";
import NextLink from "next/link";
import { Box, Flex, Heading, HStack, Link, Spacer } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      bg="#6F0B46"
      px={6}
      py={4}
      textColor="white"
    >
      <Heading mb={0}>
        <NextLink href="/" passHref>
          <Link _hover={{ textUnderline: "none" }}>Selena Groh</Link>
        </NextLink>
      </Heading>
      <Spacer />
      <HStack spacing="24px">
        <NextLink href="/projects" passHref>
          <Link>Projects</Link>
        </NextLink>
        <NextLink href="/hobbies" passHref>
          <Link>Hobbies</Link>
        </NextLink>
      </HStack>
    </Flex>
  );
}
