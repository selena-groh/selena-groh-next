import * as React from "react";
import NextLink from "next/link";
import { Box, Flex, Heading, HStack, Link, Spacer } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" bg="orange" p={4}>
      <Heading>
        <NextLink href="/" passHref>
          <Link>Home</Link>
        </NextLink>
      </Heading>
      <Spacer />
      <HStack spacing="24px">
        <NextLink href="/projects" passHref>
          <Link>Projects</Link>
        </NextLink>
        <NextLink href="/contact" passHref>
          <Link>Contact</Link>
        </NextLink>
      </HStack>
    </Flex>
  );
}
