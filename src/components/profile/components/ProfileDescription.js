import { Heading, VStack, Text } from "@chakra-ui/react";

function ProfileDescription() {
  return (
    <VStack>
      <Heading
        textShadow={"0px 0px 10px rgb(41 88 141 / 100%)"}
        fontSize={{ xl: "3.5em", lg: "3.2em", md: "3em", base: "2em" }}
      >
        Mohamed Mabrouk
      </Heading>
      <Text fontSize={"1.8em"}>Front-End Developer</Text>
      <Text fontSize={"1.5em"} color={"rgb(126 185 251)"}>
        React Specialized
      </Text>
    </VStack>
  );
}

export default ProfileDescription;
