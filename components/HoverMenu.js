import { Box } from "@chakra-ui/react";

const HoverMenu = ({ menuTrigger, menuItems }) => {
  return (
    <Box position="relative" role="group">
      {menuTrigger}
      <Box
        visibility="hidden"
        opacity={0}
        transition="opacity 200ms"
        _groupHover={{ opacity: 1, visibility: "visible" }}
        _groupFocusWithin={{ opacity: 1, visibility: "visible" }}
        position="absolute"
        right="0"
        minWidth="300px"
        backgroundColor="primaryLight"
        p={3}
        zIndex="100"
        textAlign="right"
        display="flex"
        flexDirection="column"
        gap={2}
      >
        {menuItems}
      </Box>
    </Box>
  );
};

export default HoverMenu;
