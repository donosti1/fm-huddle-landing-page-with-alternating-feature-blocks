import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        color: "blackAlpha.900",
      },
      h1: {
        color: "white",
      },
    },
  },
  colors: {
    primary: {
      100: "hsl(193, 100%, 96%)",
      200: "hsl(208, 11%, 55%)",
      300: "hsl(192, 100%, 9%)",
      400: "hsl(322, 100%, 76%)",
      500: "hsl(322, 100%, 66%)",
    },
  },
  sizes: {
    container: {
      sm: "375px",
      md: "640px",
      xl: "1120px",
    },
  },
  fonts: {
    body: "'Open Sans', sans-serif",
  },
  components: {
    Button: {
      sizes: {
        lg: {
          fontSize: "md",
        },
      },
      variants: {
        outline: {
          px: 12,
          pt: 4,
          pb: 2,
          textTransform: "uppercase",
          borderColor: "black",
          borderRadius: "sm",
          letterSpacing: "2px",
          _hover: {
            color: "white",
            bg: "black",
          },
        },
        solid: {
          bg: "primary.500",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px",
          color: "white",
          w: 48,
          borderRadius: "full",
          _hover: {
            bg: "primary.400",
          },
        },
        "footer-link": {
          h: 8,
          color: "white",
          borderRadius: 0,
          paddingInlineStart: ["inherit", 0],
          paddingInlineEnd: ["inherit", 0],
          _hover: {textDecoration: "underline"},
        },
        "header-link": {
          color: "primary.700",
          fontWeight: "400",
          height: "100%",
        },
        "mobile-menu-link": {
          color: "primary.900",
          h: 10,
          fontSize: "lg",
          fontWeight: "300",
        },
      },
    },
    Heading: {
      baseStyle: {
        color: "primary.900",
      },
    },
    Modal: {
      baseStyle: {
        overlay: {
          bg: "linear-gradient(hsla(233, 26%, 24%,.6) 50%,hsla(0, 100%, 100%,.3))",
          maxHeight: "90vh",
          top: "10vh",
        },
        dialog: {
          maxHeight: "40%",
          top: "6vh",
          w: "90%",
        },
      },
    },
  },
});
