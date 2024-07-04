import { HStack, VStack } from "@chakra-ui/react";
import ProfilePicture from "./components/ProfilePicture";
import ProfileDescription from "./components/ProfileDescription";
import Dots from "../dots";
import RainStorm from "./components/RainStorm";

function ProfileSection() {
  return (
    <VStack
      id="profile"
      color={"white"}
      backgroundColor={"black"}
      padding={{ base: "30px", md: "45px", xl: "70px" }}
      paddingTop={"120px"}
      minHeight={"100vh"}
      justifyContent={"center"}
      alignItems={"space-between"}
      position={"relative"}
      overflow={"hidden"}
    >
      <HStack
        zIndex={1}
        dir="rtl"
        justifyContent={"space-between"}
        flexDirection={{ lg: "row", md: "column", base: "column" }}
      >
        <ProfilePicture></ProfilePicture>
        <ProfileDescription></ProfileDescription>
      </HStack>
      <RainStorm />
      <Dots
        columns={8}
        rows={5}
        top={{ base: "30%", md: "0px" }}
        left="1%"
      ></Dots>
    </VStack>
  );
}

export default ProfileSection;
