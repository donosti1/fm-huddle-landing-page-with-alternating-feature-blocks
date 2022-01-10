import React, {FunctionComponent} from "react";
import {Button, Stack, Text} from "@chakra-ui/react";

interface CTAProps {}

const CTA: FunctionComponent<CTAProps> = () => {
  return (
    <Stack
      alignItems="center"
      bgGradient="linear(to-b, white 50%, primary.300 50%)"
      paddingBottom={[8, 16]}
    >
      <Stack
        alignItems="center"
        bgColor="white"
        borderRadius="lg"
        boxShadow="rgba(0, 0, 0, 0.1) 0px -2px 4px"
        justifyContent="center"
        paddingX={[4, 8]}
        paddingY={[6, 12]}
        spacing={[2, 4]}
        width={["90%", "xl"]}
      >
        <Text
          color="primary.300"
          fontFamily="Poppins"
          fontSize={["md", "3xl"]}
          fontWeight="700"
          paddingBottom={2}
          textAlign="center"
        >
          Ready To Build Your Community?
        </Text>
        <Button variant="solid">Get Started For Free</Button>
      </Stack>
    </Stack>
  );
};

export default CTA;
