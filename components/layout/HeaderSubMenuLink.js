import { Link } from "@chakra-ui/next-js";

const HeaderSubMenuLink = ({ href, children, ...linkProps }) => (
  <Link href={href} variant="inverse" {...linkProps}>
    {children}
  </Link>
);

export default HeaderSubMenuLink;
