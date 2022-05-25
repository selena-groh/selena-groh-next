import { LinkBox } from "@chakra-ui/react";

const LinkBoxCard = ({ children, ...rest }) => (
  <LinkBox
    as="article"
    p="5"
    borderWidth="1px"
    rounded="md"
    transition="border-color 200ms"
    _hover={{ borderColor: "gray.400" }}
    {...rest}
  >
    {children}
  </LinkBox>
);

export default LinkBoxCard;
