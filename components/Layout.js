import Head from "next/head";
import Header from "/components/Header";
import Footer from "/components/Footer";
import Container from "@mui/material/Container";

export default function Layout({ children, title = "" }) {
  return (
    <>
      <Head>
        <title>{title} | Selena Groh</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Container
        maxWidth="md"
        // TODO: fix min height to make footer always at bottom
        // sx={{ my: 4, minHeight: "calc(100vh - 64px - 24px - 64px)" }}
        sx={{ my: 4 }}
      >
        {children}
      </Container>
      <Footer />
    </>
  );
}
