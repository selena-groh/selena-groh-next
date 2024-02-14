import { Link } from "@chakra-ui/next-js";

const HeaderSubMenuLink = ({ href, children }) => (
  <Link href={href} variant="inverse">
    {children}
  </Link>
);

export default HeaderSubMenuLink;
