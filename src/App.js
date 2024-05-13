import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/header";
import Footer from "./components/footer";
import ProfileSection from "./components/profile/ProfileSection";
import ProjectSection from "./components/projects/ProjectsSection";
import CertificatesSection from "./components/certificates/CertificatesSection";

function App() {
  document.body.classList.add("smooth-scrolling");

  return (
    <ChakraProvider>
      <Header></Header>
      <ProfileSection></ProfileSection>
      <ProjectSection></ProjectSection>
      <CertificatesSection></CertificatesSection>
      <Footer></Footer>
    </ChakraProvider>
  );
}

export default App;
