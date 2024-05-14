import { VStack } from "@chakra-ui/react";
import Socials from "./profile/components/socials";

function Footer() {
  return (
    <VStack paddingTop={"100px"} backgroundColor={"black"} color={"white"}>
      <Socials></Socials>
      <small>Copyrights Mohamed Mabrouk</small>
    </VStack>
  );
}

export default Footer;
