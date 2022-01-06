import React from "react";
import {Button, Container, Grid, Icon, Image, Stack, Text} from "@chakra-ui/react";
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from "react-icons/fa";

import Logo from "./components/Logo";
const firstMenu = ["About Us", "Contact", "Blog"];
const secondMenu = ["Careers", "Support", "Privacy Policy"];

const CustomMenuItem = ({menuItems}: {menuItems: string[]}) => {
  const productMenuList = menuItems.map((mi) => (
    <Button
      key={mi}
      fontSize="sm"
      fontWeight="500"
      justifyContent={["center", "flex-start"]}
      variant="footer-link"
    >
      {mi}
    </Button>
  ));

  return (
    <Stack alignItems={["center", "flex-start"]} spacing={[2, 2]}>
      {productMenuList}
    </Stack>
  );
};
const SocialNetworks = () => {
  const item = [
    {id: 0, icon: FaFacebook, iconLabel: "Facebook"},
    {id: 1, icon: FaYoutube, iconLabel: "Youtube"},
    {id: 2, icon: FaTwitter, iconLabel: "Twitter"},
    {id: 3, icon: FaPinterest, iconLabel: "Pinterest"},
    {id: 4, icon: FaInstagram, iconLabel: "Instagram"},
  ];
  const icons = item.map((it) => (
    <Button key={it.id} aria-label={it.iconLabel} variant="unstyled">
      <Icon _hover={{color: "primary.300"}} as={it.icon} color="white" height={6} width={6} />
    </Button>
  ));

  return (
    <Stack direction="row" justifyContent={["center", "flex-end"]} spacing={0}>
      {icons}
    </Stack>
  );
};

const Footer = () => {
  return (
    <Stack
      alignItems={["center", "flex-start"]}
      backgroundColor="primary.300"
      paddingBottom={[8, 16]}
      paddingTop={[8, 8]}
      role="contentinfo"
    >
      <Container maxWidth="container.xl">
        <Grid rowGap={[6, 8]} templateColumns={["repeat(1,1fr)", "repeat(4,1fr)"]} width="100%">
          <Stack
            alignItems={["center", "flex-start"]}
            justifyContent="space-between"
            spacing={[6, 0]}
          >
            <Logo fill="white" identifier="footer" />
          </Stack>
          <Stack direction={["column", "row"]} gridColumn={["1", "2/4"]} spacing={[0, 24]}>
            <CustomMenuItem menuItems={firstMenu} />
            <CustomMenuItem menuItems={secondMenu} />
          </Stack>
          <Stack
            alignItems={["center", "flex-end"]}
            justifyContent="space-between"
            spacing={[6, 0]}
          >
            <SocialNetworks />
          </Stack>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Footer;
