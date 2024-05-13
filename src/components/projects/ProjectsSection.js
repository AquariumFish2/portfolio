import { Grid, Heading, VStack } from "@chakra-ui/react";
import ProjectCard from "./components/ProjcetCard";

function ProjectSection() {
  return (
    <VStack id="projects" overflowX={"hidden"} padding={30}>
      <Heading padding={30} alignSelf={"flex-start"}>
        Most Recent:
      </Heading>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2,1fr)" }}
        templateRows={{ base: "repeat(4fr)", md: "repeat(2,1fr)" }}
        gap={30}
      >
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </Grid>
    </VStack>
  );
}

export default ProjectSection;
