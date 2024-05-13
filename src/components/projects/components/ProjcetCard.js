import { GridItem, Heading, Image, Text, VStack } from "@chakra-ui/react";
import test from "../../../assets/profile.jpg";

function ProjectCard() {
  return (
    <GridItem
      width={{ md: "40vw", base: "80vw" }}
      border={"1px solid #e9e9e9"}
      borderRadius={"3xl"}
      paddingBottom={10}
    >
      <VStack>
        <Image
          src={test}
          maxHeight={"70vh"}
          width={"100%"}
          objectFit={"cover"}
          objectPosition={"0% 0%"}
          borderTopRightRadius={"3xl"}
          borderTopLeftRadius={"3xl"}
        ></Image>
        <Heading>Test Project</Heading>
        <Text>Test Details </Text>
      </VStack>
    </GridItem>
  );
}

export default ProjectCard;
