import React from "react";
import Image from "next/image";
import Layout from "/components/Layout";
import PortraitImage from "../public/SelenaGroh.jpg";
import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout>
      <Heading as="h1" size="2xl">
        Hi, I'm Selena!
      </Heading>
      <Heading as="h2" mb={8}>
        I'm a software developer, maker, and stage manager based in Boston, MA.
      </Heading>
      <Flex
        flexDirection={{ sm: "column", md: "row" }}
        gap={4}
        alignItems="flex-start"
      >
        <Box minWidth="200px" width="33%" maxWidth="500px">
          <Image
            src={PortraitImage}
            alt="woman standing on top of volcano"
            width={1965}
            height={2316}
            placeholder="blur"
          />
        </Box>
        <Container mx={0}>
          <VStack spacing={4} align="flex-start">
            <Text>
              Currently, I'm a full-stack software engineer at Wayfair. I'm an
              avid baker, problem solver, and maker. I was born and raised near
              Chicago, IL (and therefore I'm very passionate about deep-dish
              pizza).
            </Text>
            <Text>
              I specialize in frontend web design and development, and I have
              experience in a variety of languages and technologies including
              React, CSS, and PHP. I graduated from Tufts University with a
              double major in Computer Science and Cognitive and Brain Sciences,
              and I love exploring the intersection of cognition and computers.
            </Text>
            <Text>
              I also love the theatre, and I've been involved in stage
              management, set construction, and producing. I believe good design
              is essential, whether it's in posters or organizational
              spreadsheets.
            </Text>
            <Text>
              I spend my free time crocheting, hiking, solving crosswords, and
              drinking hot chocolate no matter the season.
            </Text>
          </VStack>
        </Container>
      </Flex>
    </Layout>
  );
}
