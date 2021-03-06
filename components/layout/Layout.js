import Head from "next/head";
import Header from "/components/layout/Header";
import Footer from "/components/layout/Footer";
import { Flex, Container } from "@chakra-ui/react";
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Serif:opsz,wght@8..144,100;8..144,400;8..144,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Flex minHeight="100vh" flexDirection="column">
        <SkipNavLink>Skip to content</SkipNavLink>
        <Header />
        <main>
          <Container
            flexGrow="1"
            py={{ base: 8, md: 16 }}
            px={4}
            maxWidth="1000px"
          >
            <SkipNavContent />
            {children}
          </Container>
        </main>
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
