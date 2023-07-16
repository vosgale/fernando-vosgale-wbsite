import { ThemeProvider } from "styled-components";
import GlobalStyles, {
  GeneralInfosContainer,
  MainContainer,
} from "./styles/global-styles";
import dark from "./styles/themes/dark";
import Topbar from "./Components/Topbar";
import Introduction from "./sections/introduction";
import Aboutme from "./sections/aboutme";
import SplashScreen from "./Components/SplashScreen";
import { useState, useEffect } from "react";
import Experience from "./sections/experience";
import MainProjects from "./sections/mainProjects";
// import Repositories from "./sections/repositories";
// import Footer from "./sections/footer";
import { GradientBackground } from "./styles/styled-utils";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <GradientBackground/>
      <SplashScreen isLoading={isLoading} />
      {!isLoading && (
        <MainContainer>
          <Topbar />
          <Introduction />
          <GeneralInfosContainer>
            <Aboutme />
            <Experience />
            <MainProjects />
            {/* <Repositories />
            <Footer /> */}
          </GeneralInfosContainer>
        </MainContainer>
      )}
    </ThemeProvider>
  );
}

export default App;
