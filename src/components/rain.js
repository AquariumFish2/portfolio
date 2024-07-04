import { Circle, Box } from "@chakra-ui/react";
import "./animations.css";
import { useState, useEffect } from "react";

function Rain() {
  const [rainDropsPositions, setRainDropsPositions] = useState([]);

  useEffect(() => {
    let rain = [];
    let time = Math.random() * 20000;
    console.log(time);
    for (let i = 0; i < 10; i++) {
      rain.push({ pos: Math.random(), delay: Math.random() });
    }
    setTimeout(() => {
      setRainDropsPositions(rain);
    }, time);
  }, []);

  return (
    <Box position={"absolute"} height={"100%"}>
      {rainDropsPositions.map((p) => {
        return (
          <RainDrop
            positionXaxis={p.pos}
            delayRand={p.delay}
            key={p.delay}
          ></RainDrop>
        );
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
      backgroundColor={"rgba(120,200,255,0.5)"}
      position={"absolute"}
      animation={`rain 1s ${props.delayRand}s linear infinite`}
      transform={"rotate(45deg)"}
      left={props.positionXaxis * 120 + "vw"}
      top={0}
    ></Circle>
  );
}