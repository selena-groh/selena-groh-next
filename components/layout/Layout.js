"use client";

import Header from "/components/layout/Header";
import Footer from "/components/layout/Footer";
import { Box, Flex } from "@chakra-ui/react";
import { SkipNavLink, SkipNavContent } from "@chakra-ui/skip-nav";

const Layout = ({ children }) => {
  return (
    <Flex minHeight="100vh" flexDirection="column">
      <SkipNavLink>Skip to content</SkipNavLink>
      <Header />
      <Box as="main" flexGrow="1">
        <SkipNavContent />
        <Box
          mt={{ base: 6, md: 8 }}
          mb={{ base: 12, md: 16 }}
          display="grid"
          gridTemplateColumns={{
            base: "1fr min(1000px, 90%) 1fr",
            lg: "1fr min(1000px, 96%) 1fr",
          }}
          sx={{
            "& > *": {
              gridColumn: "2",
            },
          }}
        >
          {children}
        </Box>
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
