import React from "react";
import {Button, Container, Grid, Icon, Image, Stack, Text} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";

import Logo from "./components/Logo";
const firstMenu = ["About Us", "Contact", "Blog"];
const secondMenu = ["Careers", "Support", "Privacy Policy"];

const CustomMenuItem = ({menuItems}: {menuItems: string[]}) => {
  const productMenuList = menuItems.map((mi) => (
    <Button
      key={mi}
      fontSize="sm"
      fontWeight="500"
      justifyContent={["flex-start", "flex-start"]}
      variant="footer-link"
    >
      {mi}
    </Button>
  ));

  return (
    <Stack flex={1} spacing={[2, 2]}>
      {productMenuList}
    </Stack>
  );
};
const SocialNetworks = () => {
  const item = [
    {id: 0, icon: FaFacebookF, iconLabel: "Facebook"},
    {id: 1, icon: FaTwitter, iconLabel: "Twitter"},
    {id: 2, icon: FaInstagram, iconLabel: "Instagram"},
  ];
  const icons = item.map((it) => (
    <Icon
      key={it.id}
      _hover={{
        color: "primary.500",
        cursor: "pointer",
        borderColor: "primary.500",
      }}
      as={it.icon}
      borderRadius="50%"
      borderWidth={1}
      color="white"
      height={8}
      padding={2}
      width={8}
    />
  ));

  return (
    <Stack direction="row" justifyContent={["center", "flex-end"]} spacing={4}>
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
        <Stack alignItems="flex-start" spacing={8}>
          <Stack alignItems="center" h={10} w={48}>
            <Logo identifier="footer" />
          </Stack>
          <Stack direction={["column", "row"]} spacing={[2, 2]} width="100%">
            <Stack color="white" flex={2}>
              <Stack direction="row" flex={2} spacing={8}>
                <Image alt="location" height={5} src="/assets/icon-location.svg" width={4} />
                <Text width={["100%", "76%"]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua
                </Text>
              </Stack>
              <Stack direction="row" spacing={6}>
                <Image alt="phone" height={5} src="/assets/icon-phone.svg" width={5} />
                <Text>Phone: +1-543-123-4567</Text>
              </Stack>
              <Stack direction="row" spacing={6}>
                <Image alt="location" height={5} src="/assets/icon-email.svg" width={5} />
                <Text>example@huddle.com</Text>
              </Stack>
            </Stack>
            <Stack direction={["column", "row"]} flex={2} paddingY={[8, 0]}>
              <CustomMenuItem menuItems={firstMenu} />
              <CustomMenuItem menuItems={secondMenu} />
            </Stack>
            <Stack direction="row" flex={1} justifyContent={["center", "inherit"]}>
              <SocialNetworks />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Footer;
