import React from "react";
import {Container, Image, Stack, Text} from "@chakra-ui/react";

interface IFeature {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}
const featureItems = [
  {
    id: 0,
    title: "Grow Together",
    imageUrl: "grow-together",
    description:
      "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
  },
  {
    id: 1,
    title: "Flowing Conversations",
    description:
      "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow. ",
    imageUrl: "flowing-conversation",
  },
  {
    id: 2,
    title: "Your Users",
    description:
      "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
    imageUrl: "your-users",
  },
];
const FeatureItem = (props: IFeature) => {
  const imageSrcUrl = `assets/illustration-${props.imageUrl}.svg`;

  return (
    <Stack
      alignItems="center"
      bgColor="white"
      borderRadius="lg"
      boxShadow="rgba(100, 100, 100, 0.1) -2px -2px 4px, rgba(0, 0, 0, 0.1) -2px 2px 4px, rgba(0, 0, 0, 0.1) 2px -2px 4px ,rgba(0, 0, 0, 0.1) 2px 2px 4px"
      direction={["column-reverse", props.id % 2 == 0 ? "row" : "row-reverse"]}
      justifyContent="center"
      paddingLeft={[8, 32]}
      paddingRight={[8, 8]}
      paddingY={[8, 12]}
      spacing={[16, 0]}
    >
      <Stack flex={1} spacing={[4, 2]}>
        <Text
          color="primary.300"
          fontSize={["lg", "2xl"]}
          fontWeight="700"
          textAlign={["center", "left"]}
        >
          {props.title}
        </Text>
        <Text color="primary.200" fontSize={["sm", "md"]} textAlign={["center", "left"]}>
          {props.description}
        </Text>
      </Stack>
      <Stack alignItems={["center", props.id % 2 == 0 ? "flex-end" : "flex-start"]} flex={1}>
        <Image src={imageSrcUrl} w={80} />
      </Stack>
    </Stack>
  );
};
const FeaturesGallery = () => {
  return (
    <Stack paddingY={[8, 32]}>
      <Container maxWidth="container.xl">
        <Stack spacing={8}>
          {featureItems.map((mi) => (
            <FeatureItem key={mi.id} {...mi} />
          ))}
        </Stack>
      </Container>
    </Stack>
  );
};
const Features: React.FC = () => {
  return <FeaturesGallery />;
};

export default Features;
