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
        backgroundColor="primary"
        p={6}
        zIndex="100"
        textAlign="right"
      >
        {menuItems.map((item, index) => (
          <Box key={index} py={2}>
            {item}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HoverMenu;
