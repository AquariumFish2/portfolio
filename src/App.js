import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/header";
import Footer from "./components/footer";
import ProfileSection from "./components/profile/ProfileSection";
import ProjectSection from "./components/projects/ProjectsSection";
import CertificatesSection from "./components/certificates/CertificatesSection";
import { Helmet } from "react-helmet";

function App() {
  document.body.classList.add("smooth-scrolling");

  return (
    <ChakraProvider>
      <Helmet>
        <title>My Portfolio</title>
        <meta property="og:title" content="My Portfolio" />
        <meta
          property="og:description"
          content="Check out my portfolio to see my projects and skills."
        />
        <meta
          property="og:image"
          content="https://aquariumfish2.github.io/portfolio/assets/profile.jpg"
        />
        <meta
          property="og:url"
          content="https://aquariumfish2.github.io/portfolio/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
      <Header></Header>
      <ProfileSection></ProfileSection>
      <ProjectSection></ProjectSection>
      <CertificatesSection></CertificatesSection>
      <Footer></Footer>
    </ChakraProvider>
  );
}

export default App;
