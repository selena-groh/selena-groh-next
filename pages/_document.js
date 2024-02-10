import Document, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import chakraTheme from "src/theme";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Serif:opsz,wght@8..144,100;8..144,400;8..144,600&family=Roboto:300,400,500,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <ColorModeScript
            initialColorMode={chakraTheme.config.initialColorMode}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
