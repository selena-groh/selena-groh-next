import NextLink from "next/link";
import { Box, Flex, Heading, Link, Spacer } from "@chakra-ui/react";
import HoverMenu from "components/HoverMenu";
import HeaderLink from "components/layout/HeaderLink";
import HeaderSubMenuLink from "components/layout/HeaderSubMenuLink";

const Header = () => {
  const subMenuLinks = [
    { name: "Bookshelf CSS", href: "/bookshelf-css" },
    { name: "Guess Who, Stardew?", href: "/guess-who-stardew" },
    { name: "Guess Who, Anne?", href: "/guess-who-anne" },
    { name: "Spelling Bee", href: "/spelling-bee" },
    { name: "Wordle", href: "/wordle" },
  ];

  return (
    <header>
      <Flex
        minWidth="max-content"
        alignItems="stretch"
        gap="2"
        bg="primary"
        px={{ base: 4, lg: 8 }}
      >
        <Heading mb={0} py={4}>
          <NextLink href="/" passHref>
            <Link _hover={{ textUnderline: "none" }} variant="inverse">
              Selena Groh
            </Link>
          </NextLink>
        </Heading>
        <Spacer />
        <Box display="flex" alignItems="stretch">
          <HoverMenu
            menuTrigger={<HeaderLink href="/projects">Projects</HeaderLink>}
            menuItems={subMenuLinks.map((subMenuLink) => (
              <HeaderSubMenuLink href={subMenuLink.href} key={subMenuLink.name}>
                {subMenuLink.name}
              </HeaderSubMenuLink>
            ))}
          />
          <HeaderLink href="/hobbies">Hobbies</HeaderLink>
        </Box>
      </Flex>
    </header>
  );
};

export default Header;
