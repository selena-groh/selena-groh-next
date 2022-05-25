import Head from "next/head";
import Header from "/components/layout/Header";
import Footer from "/components/layout/Footer";
import { Flex, Container } from "@chakra-ui/react";

export default function Layout({ children, title = "" }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Selena Groh` : "Selena Groh"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Serif:opsz,wght@8..144,100;8..144,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Flex minHeight="100vh" flexDirection="column">
        <Header />
        <Container
          flexGrow="1"
          py={{ base: 8, md: 16 }}
          px={4}
          maxWidth="1000px"
        >
          {children}
        </Container>
        <Footer />
      </Flex>
    </>
  );
}
