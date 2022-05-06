import { extendTheme } from "@chakra-ui/react";

// #6E1B45

const theme = extendTheme({
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Roboto Serif, serif",
    mono: "Menlo, monospace",
  },
  components: {
    Heading: {
      sizes: {
        "2xl": {
          fontWeight: "normal",
          marginBottom: "16px",
        },
        xl: {
          fontWeight: "light",
          marginBottom: "16px",
        },
        lg: {
          fontWeight: "light",
          marginBottom: "12px",
        },
      },
    },
    Link: {
      baseStyle: {
        _hover: { textDecorationThickness: "1px" },
      },
    },
  },
});

export default theme;
