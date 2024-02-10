import Image from "next/legacy/image";
import Layout from "components/layout/Layout";
import PortraitImage from "public/homepage/SelenaGroh.jpg";
import DesktopHeroImage from "public/homepage/hero-desktop.jpeg";
import MobileHeroImage from "public/homepage/hero-mobile.jpeg";
import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Home = () => {
  return (
    <Layout>
      <Box
        position="relative"
        sx={{
          // Needed for extra specificity
          "&&": {
            gridColumn: "1 / 4",
          },
        }}
        // Countering margin top from Layout.tsx
        mt={{ base: "-24px", md: "-32px" }}
        mb={8}
        // Centers image when on very large screens
        mx="auto"
      >
        <Box display={{ base: "block", md: "none" }}>
          <Image
            src={MobileHeroImage}
            alt="Selena standing in front of a Hobbit hole"
            width={1760}
            height={2338}
            placeholder="blur"
          />
        </Box>
        <Box display={{ base: "none", md: "block" }}>
          <Image
            src={DesktopHeroImage}
            alt="Selena standing in front of a Hobbit hole"
            width={1760}
            height={908}
            placeholder="blur"
          />
        </Box>
        <Box
          display={{ base: "none", lg: "block" }}
          position="absolute"
          top="0%"
          left="0%"
          color="gray.800"
          backgroundImage="linear-gradient(rgba(255, 239, 204,0.9), rgba(255, 239, 204,0) 100%)"
          p={8}
          height="50%"
          width="100%"
        >
          <Heading as="h1" size="2xl">
            Hi, I'm Selena!
          </Heading>
          <Heading as="h2" fontWeight="normal">
            I'm a software developer, maker, and stage manager based in Boston,
            MA.
          </Heading>
        </Box>
      </Box>
      <Box>
        <Box display={{ base: "block", lg: "none" }}>
          <Heading as="h1" size="2xl">
            Hi, I'm Selena!
          </Heading>
          <Heading as="h2">
            I'm a software developer, maker, and stage manager based in Boston,
            MA.
          </Heading>
        </Box>
        <VStack spacing={4} align="flex-start">
          <Heading as="p" size="lg">
            Currently, I'm a full-stack software engineer at Wayfair. I'm an
            avid baker, problem solver, and maker. I was born and raised near
            Chicago, IL (and therefore I'm very passionate about deep-dish
            pizza).
          </Heading>
          <Text>
            I specialize in frontend web design and development, and I have
            experience in a variety of languages and technologies including
            React, CSS, and PHP. I graduated from Tufts University with a
            Bachelor of Science in Computer Science and Cognitive & Brain
            Sciences, and I love exploring the intersection of cognition and
            computers.
          </Text>
          <Text>
            I also love the theatre, and I've been involved in stage management,
            set construction, and producing. I believe good design is essential,
            whether it's in posters or organizational spreadsheets.
          </Text>
          <Text>
            I spend my free time crocheting, hiking, solving crosswords, and
            drinking hot chocolate no matter the season.
          </Text>
        </VStack>
      </Box>
    </Layout>
  );
};

export default Home;
