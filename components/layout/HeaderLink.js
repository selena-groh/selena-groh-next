import { Box } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

const HeaderLink = ({ href, children }) => (
  <Box display="flex" alignItems="center" height="100%" px={{ base: 2, sm: 6 }}>
    <Link href={href} variant="inverse">
      {children}
    </Link>
  </Box>
);

export default HeaderLink;
