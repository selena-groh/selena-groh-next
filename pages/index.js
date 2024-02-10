import Image from "next/image";
import Layout from "components/layout/Layout";
import PortraitImage from "public/homepage/SelenaGroh.jpg";
import DesktopHeroImage from "public/homepage/hero-desktop.jpeg";
import MobileHeroImage from "public/homepage/hero-mobile.jpeg";
import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Home = () => {
  return (
    <Layout>
      <Box
        width="min(100%, 1760px)"
        mx="auto"
        sx={{
          // Needed for extra specificity
          "&&": {
            gridColumn: "1 / 4",
          },
        }}
        position="relative"
        mb={8}
      >
        <Box display={{ base: "block", md: "none" }}>
          <Image
            src={MobileHeroImage}
            alt="Selena standing in front of a Hobbit hole"
            width={3072}
            height={4080}
            placeholder="blur"
          />
        </Box>
        <Box display={{ base: "none", md: "block" }}>
          <Image
            src={DesktopHeroImage}
            alt="Selena standing in front of a Hobbit hole"
            width={4032}
            height={2079}
            placeholder="blur"
          />
        </Box>
        <Box
          display={{ base: "none", lg: "block" }}
          position="absolute"
          top="0%"
          left="0%"
          color="gray.800"
          // color="white"
          // textShadow="1px 1px #555"
          // backgroundColor="rgba(0,0,0,0.5);"
          // backgroundImage="linear-gradient(rgba(253, 244, 220,0.9), rgba(253, 244, 220,0) 100%)"
          backgroundImage="linear-gradient(rgba(255, 239, 204,0.9), rgba(255, 239, 204,0) 100%)"
          // backgroundImage="linear-gradient(rgba(128,128,128,1), rgba(128,128,128,0) 100%)"
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
      <Box px={4}>
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
