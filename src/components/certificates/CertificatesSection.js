import { useState } from "react";
import { certs } from "../../data/data";
import { Center, HStack, Image, Box, IconButton } from "@chakra-ui/react";
import { bouncy } from "ldrs";
import { useSwipeable } from "react-swipeable";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

bouncy.register();

// Default values shown

function CertificatesSection() {
  const [imgOpacity, setImageOpacity] = useState(1);
  const alt = (
    <Box height={"75vh"}>
      <Center>
        <l-bouncy size="45" speed="1.75" color="black"></l-bouncy>
      </Center>
    </Box>
  );

  const nextCert = () => {
    setImageOpacity(0);
    setTimeout(() => {
      setImages([...images.slice(1), images[0]]);
      setImageOpacity(1);
    }, 500);
  };

  const prevCert = () => {
    setImageOpacity(0);
    setTimeout(() => {
      setImages([images[images.length - 1], ...images.slice(0, -1)]);
      setImageOpacity(1);
    }, 500);
  };

  const [images, setImages] = useState(
    certs.map((url) => {
      return (
        <Image
          src={url}
          alt={alt}
          key={url}
          width={{ base: "85vw", lg: "50vw" }}
          objectFit={"cover"}
        ></Image>
      );
    })
  );

  const swipeHandlers = useSwipeable({
    onSwipedLeft: (e) => {
      nextCert();
    },
    onSwipedRight: (e) => {
      prevCert();
    },
  });
  return (
    <Box position={"relative"} overflowX={"hidden"}>
      <div {...swipeHandlers}>
        <Center
          position={"relative"}
          marginTop={"100px"}
          height={{ base: "60vh", md: "95vh" }}
          opacity={imgOpacity}
          transition={"0.5s"}
        >
          {images[0]}
        </Center>
      </div>
      <HStack
        position={"absolute"}
        top={{ base: "15%", md: "55%", lg: "55%" }}
        justifyContent={{ base: "flex-end", md: "space-between" }}
        width={"calc(100vw - 20px)"}
        paddingX={"30px"}
      >
        <CertButton
          type={"prev"}
          onClick={prevCert}
          icon={<FaAngleLeft />}
        ></CertButton>
        <CertButton
          type={"next"}
          onClick={nextCert}
          icon={<FaAngleRight />}
        ></CertButton>
      </HStack>
    </Box>
  );
}

function CertButton(props) {
  return (
    <IconButton
      onClick={props.onClick}
      zIndex={2}
      margin={0}
      icon={props.icon}
      color={"white"}
      backgroundColor={"black"}
      _hover={{backgroundColor:"#00000090"}}
    ></IconButton>
  );
}

export default CertificatesSection;
