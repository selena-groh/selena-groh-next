import { Box } from "@chakra-ui/react";

const HoverMenu = ({ menuTrigger, menuItems }) => {
  return (
    <Box position="relative" role="group">
      {menuTrigger}
      <Box
        visibility="hidden"
        opacity={0}
        // Opacity duration 200ms, visbility duration 0ms but only after the fadeout (200ms)
        transition="opacity 200ms, visibility 0ms 200ms"
        _groupHover={{
          opacity: 1,
          visibility: "visible",
          // Opacity duration 200ms, visbility duration 0ms immediately before fade in
          transition: "opacity 200ms, visibility 0ms",
        }}
        _groupFocusWithin={{
          opacity: 1,
          visibility: "visible",
          // Opacity duration 200ms, visbility duration 0ms immediately before fade in
          transition: "opacity 200ms, visibility 0ms",
        }}
        position="absolute"
        right="0"
        minWidth="300px"
        borderRadius="0 0 8px 8px"
        boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
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
