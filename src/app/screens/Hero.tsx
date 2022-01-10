import React from "react";
import {Button, Container, Image, Heading, Stack, Text} from "@chakra-ui/react";

import Header from "./components/Header";

const Hero: React.FC = () => {
  return (
    <Stack
      alignItems="center"
      backgroundColor="primary.100"
      backgroundImage={["url('/assets/bg-hero-mobile.svg')", "url('/assets/bg-hero-desktop.svg')"]}
      backgroundPosition={["50%  0%", "50%  0%"]}
      backgroundRepeat={["no-repeat", "no-repeat"]}
      backgroundSize={["contain", "contain"]}
      h={["auto", "100vh"]}
      justifyContent={["space-between"]}
      paddingBottom={[6, 16]}
      spacing={[12, 0]}
    >
      <Header />

      <Container maxWidth="container.xl">
        <Stack direction={["column", "row"]} spacing={[16, 0]}>
          <Stack flex={[1, 2]} justifyContent={["center"]} spacing={[12, 6]}>
            <Text
              color="primary.300"
              fontFamily="Poppins"
              fontSize={["xl", "4xl"]}
              fontWeight="700"
              paddingBottom={2}
              textAlign={["center", "left"]}
            >
              Build The Community Your Fans Will Love
            </Text>
            <Text color="primary.300" fontSize={["sm", "sm"]} textAlign={["center", "left"]}>
              Huddle re-imagines the way we build communities. You have a voice, but so does your
              audience. Create connections with your users as you engage in genuine discussion.
            </Text>
            <Button variant="solid">Get Started For Free</Button>
          </Stack>
          <Stack alignItems={["center", "flex-end"]} flex={[1, 3]}>
            <Image src="/assets/illustration-mockups.svg" width={["100%", "80%"]} />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Hero;
