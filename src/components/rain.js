import { Circle, Box } from "@chakra-ui/react";
import "./animations.css";
const rainDropsPositions = [];

for (let i = 0; i < 100; i++) {
  rainDropsPositions.push({ pos: Math.random(), delay: Math.random() });
}

console.log(rainDropsPositions);

function Rain() {
  return (
    <Box position={"absolute"} height={"100%"}>
      {rainDropsPositions.map((p) => {
        return <RainDrop positionXaxis={p.pos} delayRand={p.delay}></RainDrop>;
      })}
    </Box>
  );
}

export default Rain;

function RainDrop(props) {
  return (
    <Circle
      height={"4px"}
      width={"2px"}
      backgroundColor={"rgba(120,200,255,1)"}
      position={"absolute"}
      animation={`rain 1s ${props.delayRand}s linear infinite`}
      transform={"rotate(30deg)"}
      left={props.positionXaxis * 100 + "vw"}
      top={0}
    ></Circle>
  );
}
