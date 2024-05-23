import { HStack, Heading } from "@chakra-ui/react";

function Title(props) {
  return (
    <HStack width={"100vw"} maxWidth={"100%"} justifyContent={"start"}>
      <Heading
        fontSize={"2.5em"}
        textShadow={"0px 0px 3px rgb(41 88 141 / 100%)"}
        paddingLeft={"30px"}
      >
        {props.title}
      </Heading>
    </HStack>
  );
}

export default Title;
