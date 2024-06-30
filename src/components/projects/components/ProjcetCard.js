import {
  Box,
  GridItem,
  HStack,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import Project from "../../../data/project-class";
import Chip from "./chip";
import { BiWindowAlt } from "react-icons/bi";

function ProjectCard(props) {
  const project = new Project(props.project);

  return (
    <GridItem
      width={{ base: "80vw", lg: "40vw" }}
      border={"1px solid #e9e9e9"}
      borderRadius={"3xl"}
      paddingBottom={10}
    >
      <VStack justifyContent={"space-between"} height={"100%"}>
        <VStack>
          <Box position={"relative"}>
            <Image
              src={project.image}
              height={"70vh"}
              width={"100%"}
              objectFit={"cover"}
              objectPosition={"0% 0%"}
              borderTopRightRadius={"3xl"}
              borderTopLeftRadius={"3xl"}
            ></Image>
            <HStack
              width={"100%"}
              justifyContent={"center"}
              position={"absolute"}
              bottom={"30px"}
            >
              {project.technologies.map((tech) => (
                <Chip tech={tech} key={tech}></Chip>
              ))}
            </HStack>
          </Box>
          <VStack padding={"10px"}>
            <Heading>{project.title}</Heading>
            <Text color={"gray"}>{project.description} </Text>
          </VStack>
        </VStack>
        <HStack alignSelf={"flex-end"} paddingRight={"16px"}>
          <Link href={project.url} target="_blank">
            <HStack>
              <Text>Visit Site</Text>
              <BiWindowAlt></BiWindowAlt>
            </HStack>
          </Link>
        </HStack>
      </VStack>
    </GridItem>
  );
}

export default ProjectCard;
