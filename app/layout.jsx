import React from "react";
import { Providers } from "./providers";
import { fonts } from "./fonts";
import Layout from "components/layout/Layout";

export const metadata = {
  title: {
    template: "%s | Selena Groh",
    default: "Selena Groh", // a default is required when creating a template
  },
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en" className={fonts.robotoSerif.variable}>
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}

// import Document, { Html, Head, Main, NextScript } from "next/document";

// export default class MyDocument extends Document {
//   render() {
//     return (
//       <Html lang="en">
//         <Head>
//           <link rel="preconnect" href="https://fonts.googleapis.com" />
//           <link
//             rel="preconnect"
//             href="https://fonts.gstatic.com"
//             crossOrigin=""
//           />
//           <link
//             href="https://fonts.googleapis.com/css2?family=Roboto+Serif:opsz,wght@8..144,100;8..144,400;8..144,600&family=Roboto:300,400,500,700&display=swap"
//             rel="stylesheet"
//           />
//         </Head>
//         <body>
//           <ColorModeScript
//             initialColorMode={chakraTheme.config.initialColorMode}
//           />
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }
