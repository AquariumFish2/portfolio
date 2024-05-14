import { HStack, IconButton } from "@chakra-ui/react";
import { socials } from "../../../data/data";
function Socials() {
  return (
    <HStack
      zIndex={1000}
      paddingTop={5}
      justifyContent={"center"}
      alignItems={"center"}

    >
      {socials.map((social) => (
        <a href={social.url} rel="noreferrer" target="_blank">
          <IconButton
            icon={social.icon()}
            backgroundColor={"black"}
            color={"white"}
            border={"1px solid "}
            _hover={{ backgroundColor: "#4d94bf40" }}
          ></IconButton>
        </a>
      ))}
    </HStack>
  );
}

export default Socials;
