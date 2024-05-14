import { Circle } from "@chakra-ui/react";
import { useEffect } from "react";
function Wave(props) {
  useEffect(() => {
    console.log();
  }, []);
  return (
    <Circle
      id="wave"
      animation={"waveAnimation 10s infinite linear "}
      border={"1px solid red"}
      position={"absolute"}
      height={"100px"}
      width={"100px"}
      zIndex={-1}
      _before={{
        content: `""`,
        position: "absolute",
        width: "5px",
        height: "5px",
        top: "-3px",
        left: "calc(50% - 2.5px)",
        backgroundColor: "purple",
        borderRadius: "50%",
      }}
    ></Circle>
  );
}

export default Wave;
