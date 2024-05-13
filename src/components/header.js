import { HStack, Box, Heading, Link, Center } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import debounce from "lodash.debounce"; // Import debounce function

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
      backgroundColor="#FB667A"
      zIndex={1000}
      ref={headerRef}
      overflowX={"hidden"}
    >
      <HStack
        id="header"
        backgroundColor={"black"}
        color={"white"}
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
  const handleClick = (anchor) => {
    console.log("clicked");
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Link
      min-width={"30px"}
      href={"#" + props.path}
      _hover={{ textDecoration: "none" }}
      onClick={(e) => handleClick(props.path)}
    >
      <Center
        paddingX={"5px"}
        height={"50px"}
        _hover={{ backgroundColor: "white", color: "black" }}
        transitionDuration={".3s"}
      >
        {props.name}
      </Center>
    </Link>
  );
}

export default Header;
