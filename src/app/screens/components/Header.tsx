import React, {useEffect, useState} from "react";
import {
  Button,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Icon,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

import Logo from "./Logo";
const Header = () => {
  return (
    <Stack justifyContent="center" paddingBottom={[2, 0]} paddingTop={[2, 8]} width="100%">
      <Container height={["auto", "100%"]} maxWidth={["container.sm", "container.xl"]} zIndex="100">
        <Stack
          alignContent="center"
          alignItems="center"
          as="header"
          className="Header"
          direction="row"
          height={["auto", "100%"]}
          justifyContent="space-between"
        >
          <Stack alignItems="center" h={10} justifyContent="center" w={[24, 48]}>
            <Logo identifier="header" />
          </Stack>
          <Button variant="header-button">Try It Free</Button>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Header;
