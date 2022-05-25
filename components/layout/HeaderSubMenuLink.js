import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const HeaderSubMenuLink = ({ href, children }) => (
  <NextLink href={href} passHref>
    <Link variant="inverse">{children}</Link>
  </NextLink>
);

export default HeaderSubMenuLink;
