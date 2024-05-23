import { Grid,  VStack } from "@chakra-ui/react";
import { projects } from "../../data/data";
import ProjectCard from "./components/ProjcetCard";
import Title from "../Title";

function ProjectSection() {
  console.log(projects);
  return (
    <VStack
      id="projects"
      overflowX={"hidden"}
      padding={30}
      gap="30px"
      marginBottom={"60px"}
    >
      <Title title={"Projects"}></Title>
      <Grid templateColumns={{ base: "1fr",lg:"1fr 1fr" }} gap={"10px"}>
        {projects.map((pro) => (
          <ProjectCard project={pro}></ProjectCard>
        ))}
      </Grid>
    </VStack>
  );
}

export default ProjectSection;
