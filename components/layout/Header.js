import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import HoverMenu from "components/HoverMenu";
import HeaderLink from "components/layout/HeaderLink";
import HeaderSubMenuLink from "components/layout/HeaderSubMenuLink";

const Header = () => {
  const subMenuLinks = [
    {
      name: "Bookshelf CSS",
      href: "/bookshelf-css",
      rel: "noopener noreferrer",
      target: "_blank",
      prefetch: false,
    },
    {
      name: "Guess Who, Stardew?",
      href: "/guess-who-stardew",
      rel: "noopener noreferrer",
      target: "_blank",
      prefetch: false,
    },
    {
      name: "Guess Who, Anne?",
      href: "/guess-who-anne",
      rel: "noopener noreferrer",
      target: "_blank",
      prefetch: false,
    },
    {
      name: "Spelling Bee",
      href: "/spelling-bee",
      rel: "noopener noreferrer",
      target: "_blank",
      prefetch: false,
    },
    {
      name: "Wordle",
      href: "/wordle",
      rel: "noopener noreferrer",
      target: "_blank",
      prefetch: false,
    },
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
          <Link href="/" _hover={{ textUnderline: "none" }} variant="inverse">
            Selena Groh
          </Link>
        </Heading>
        <Spacer />
        <Box display="flex" alignItems="stretch">
          <HoverMenu
            menuTrigger={<HeaderLink href="/projects">Projects</HeaderLink>}
            menuItems={subMenuLinks.map(({ name, href, ...linkProps }) => (
              <HeaderSubMenuLink key={name} href={href} {...linkProps}>
                {name}
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
