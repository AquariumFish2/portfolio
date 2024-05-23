import { Text } from "@chakra-ui/react";

function Chip(props) {
  return (
    <Text
      fontSize={".9em"}
      padding={"2px 12px"}
      backgroundColor={"black"}
      border={"1px solid white"}
      color={"white"}
      borderRadius={"15px"}
    >
      {props.tech}
    </Text>
  );
}

export default Chip;
