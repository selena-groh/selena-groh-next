import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import { fonts } from "./fonts";
import Layout from "components/layout/Layout";

export const metadata = {
  title: {
    template: "%s | Selena Groh",
    default: "Selena Groh", // a default is required when creating a template
  },
  description:
    "Hi, I'm Selena. I'm a software developer, maker, and stage manager based in Boston, MA.",
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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
