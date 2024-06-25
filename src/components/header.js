import { HStack, Box, Heading, Center } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import debounce from "lodash.debounce"; // Import debounce function
import { Link as ScrollLink } from "react-scroll";

function Header() {
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollPosition = window.scrollY;
      setVisible(prevScrollPosition > currentScrollPosition);
      setPrevScrollPosition(currentScrollPosition);
    }, 100); // Debounce for 100 milliseconds

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPosition]);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={visible ? "translateY(0)" : "translateY(-100%)"}
      transitionProperty="transform"
      transitionDuration=".4s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#00000090"
      zIndex={1000}
      ref={headerRef}
      id="header"
      overflowX={"hidden"}
      color={"white"}
    >
      <HStack
        width={"100vw"}
        justifyContent={"space-between"}
        paddingX={"30px"}
        paddingY="10px"
      >
        <Heading fontFamily={"cursive"} fontSize={{ md: "2em" }}>
          Portfolio
        </Heading>
        <HStack height={"100%"}>
          <HeaderItem name="Profile" path="profile"></HeaderItem>
          <HeaderItem name="Projects" path="projects"></HeaderItem>
          <HeaderItem name="Certificates" path="certs"></HeaderItem>
        </HStack>
      </HStack>
    </Box>
  );
}

function HeaderItem(props) {
  return (
    <ScrollLink
      min-width={"30px"}
      to={props.path}
      smooth={true}
      style={{cursor:"pointer"}}
    >
      <Center
        paddingX={"5px"}
        height={"50px"}
        _hover={{ backgroundColor: "white", color: "black" }}
        transitionDuration={".3s"}
      >
        {props.name}
      </Center>
    </ScrollLink>
  );
}

export default Header;
