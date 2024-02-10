import Head from "next/head";
import Header from "/components/layout/Header";
import Footer from "/components/layout/Footer";
import { Box, Flex } from "@chakra-ui/react";
import { SkipNavLink, SkipNavContent } from "@chakra-ui/skip-nav";

const Layout = ({ children, title = "" }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Selena Groh` : "Selena Groh"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
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
    </>
  );
};

export default Layout;
