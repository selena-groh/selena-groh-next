import * as React from "react";
import NextLink from "next/link";
import { Icon, Link, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <Text>Selena Groh</Text>
      <NextLink href="mailto:contact@selenagroh.com" passHref>
        <Link>contact@selenagroh.com</Link>
      </NextLink>
      <Link href="https://github.com/selena-groh">
        <Icon aria-label="Github" as={FaGithub} boxSize="1.5em" />
      </Link>
      <Link href="https://www.linkedin.com/in/selena-groh/">
        <Icon aria-label="LinkedIn" as={FaLinkedin} boxSize="1.5em" />
      </Link>
    </footer>
  );
}
