import { useEffect } from "react";
import { Circle, Grid, GridItem } from "@chakra-ui/react";

function Dots(props) {
  const dots = [];
  for (let i = 0; i < props.rows; i++) {
    for (let x = 0; x < props.columns; x++) {
      dots.push(`${i}-${x}`);
    }
  }
  useEffect(() => {}, []);
  return (
    <Grid
      position={"absolute"}
      top={props.top}
      left={props.left}
      templateColumns={{
        base: `repeat(${props.columns},${100 / props.columns}vw)`,
      }}
      templateRows={{ base: `repeat(${props.rows},10vw)` }}
      zIndex={0}
      maxHeight={"calc(100vh)"}
      overflowY={"hidden"}
    >
      {dots.map((dot) => (
        <GridItem
          key={dot}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={30}
          height={30}
        >
          <Circle
            minHeight={1}
            minW={1}
            backgroundColor={"#4d94bf40"}
            boxShadow={"0px 0px 4px 2px #4d94bf90"}
            _hover={{
              backgroundColor: "#4d94bf",
              boxShadow: "0px 0px 4px 2px #4d94bf",
            }}
          ></Circle>
        </GridItem>
      ))}
    </Grid>
  );
}

export default Dots;
