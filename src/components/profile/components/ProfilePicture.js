import { Avatar, Circle } from "@chakra-ui/react";
import profile from "../../../assets/profile.jpg";

function ProfilePicture() {
  return (
    <Circle
      border={"30px solid rgba(120,200,255,0.4)"}
      boxShadow={"0px 0px 10px 10px rgba(120,200,255,0.2)"}
    >
      <Circle border={"30px solid rgba(120,200,255,0.6)"}>
        <Avatar
          src={profile}
          minWidth={{ xl: "300px", lg: "280px", md: "240px", base: "220px" }}
          minHeight={{ xl: "300px", lg: "280px", md: "240px", base: "220px" }}
        ></Avatar>
      </Circle>
    </Circle>
  );
}

export default ProfilePicture;
