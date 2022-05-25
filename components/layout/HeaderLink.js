import NextLink from "next/link";
import { Box, Link } from "@chakra-ui/react";

const HeaderLink = ({ href, children }) => (
  <Box display="flex" alignItems="center" height="100%" px={6}>
    <NextLink href={href} passHref>
      <Link variant="inverse">{children}</Link>
    </NextLink>
  </Box>
);

export default HeaderLink;
