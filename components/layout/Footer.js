import * as React from "react";
import NextLink from "next/link";
import { Flex, Heading, HStack, Icon, Link, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <Flex
        minWidth="max-content"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="column"
        bg="primary"
        textColor="white"
        px={6}
        py={10}
      >
        <Heading size="lg" mb={4}>
          Selena Groh
        </Heading>
        <NextLink href="mailto:contact@selenagroh.com" passHref>
          <Link mb={4} variant="inverse">
            contact@selenagroh.com
          </Link>
        </NextLink>
        <HStack spacing="12px">
          <Link href="https://github.com/selena-groh" variant="inverse">
            <Icon aria-label="Github" as={FaGithub} boxSize="1.5em" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/selena-groh/"
            variant="inverse"
          >
            <Icon aria-label="LinkedIn" as={FaLinkedin} boxSize="1.5em" />
          </Link>
        </HStack>
      </Flex>
    </footer>
  );
}
