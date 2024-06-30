import { Box, Circle } from "@chakra-ui/react";
import "./animations.css";
import { useEffect, useState } from "react";

function Cloud(props) {
  const delay = Math.random() * 15000 + 5000;
  const [bgC, setbgC] = useState("grey");
  useEffect(() => {
    setInterval(() => {
      setbgC("yellow");
      let timeout = setTimeout(() => {
        setbgC("grey");
        clearTimeout(timeout);
      }, 100);
    }, delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      position={"absolute"}
      top={props.top}
      left={props.movingRight ? "0px" : "calc(100% - 100px)"}
      animation={`${
        props.movingRight ? "cloudMovingRight" : "cloudMovingLeft"
      } 30s linear infinite alternate-reverse`}
    >
      <CloudPart bgC={bgC} top={"30px"} left={"25px"} timing={"2s"}></CloudPart>
      <CloudPart bgC={bgC} top={"50px"} timing={"3s"}></CloudPart>
      <CloudPart bgC={bgC} top={"50px"} left={"35px"} timing={"1s"}></CloudPart>
      <Lightening bgC={bgC}></Lightening>
    </Box>
  );
}

function CloudPart(props) {
  return (
    <Circle
      width={"50px"}
      height={"50px"}
      animation={`bounce ${props.timing} infinite linear alternate-reverse`}
      backgroundColor={props.bgC}
      position={"absolute"}
      top={props.top ?? props.top}
      left={props.left ?? props.left}
      boxShadow={`0px 0px 10px 5px ${props.bgC}`}
    ></Circle>
  );
}

function Lightening(props) {
  return (
    <Box
      position={"absolute"}
      width={"10px"}
      height={"40px"}
      backgroundColor={props.bgC === "grey" ? "transparent" : props.bgC}
      top={"90px"}
      left={"30px"}
      transform={"rotate(45deg) scale(0.8) translateY(-3px)"}
    >
      <Box
        width={"inherit"}
        height={"20px"}
        bgColor={"inherit"}
        position={"absolute"}
        top={"25px"}
        left={"5.5px"}
        transform={"rotate(-135deg)"}
        _before={{
          content: `""`,
          position: "absolute",
          top: "-10px",
          left: "0px",
          width: "1px",
          height: "1px",
          border: "6px solid",
          transform: "rotate(-1deg)",
          borderColor: `transparent transparent ${
            props.bgC === "grey" ? "transparent" : props.bgC
          } ${props.bgC === "grey" ? "transparent" : props.bgC}`,
        }}
      >
        <Box
          position={"absolute"}
          bgColor={props.bgC === "grey" ? "transparent" : props.bgC}
          height={"30px"}
          width={"12px"}
          transform={"rotate(-45deg)"}
          left={"-11px"}
          top={"-1px"}
          _before={{
            content: `""`,
            position: "absolute",
            top: "-30px",
            width: 0,
            height: 0,
            border: "solid",
            borderColor: `transparent transparent ${
              props.bgC === "grey" ? "transparent" : props.bgC
            } transparent`,
            borderWidth: "0px 6px 30px 6px",
          }}
          _after={{
            content: `""`,
            position: "absolute",
            top: "23px",
            border: "solid",
            borderColor: `${
              props.bgC === "grey" ? "transparent" : props.bgC
            } transparent transparent ${
              props.bgC === "grey" ? "transparent" : props.bgC
            }`,
            borderWidth: "10px",
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default Cloud;
