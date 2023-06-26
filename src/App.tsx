import { ThemeProvider } from "styled-components";
import GlobalStyles, {
  GeneralInfosContainer,
  GradientBackground,
  MainContainer,
} from "./styles/global-styles";
import dark from "./styles/themes/dark";
import Topbar from "./Components/Topbar";
import Introduction from "./sections/introduction";
import Aboutme from "./sections/aboutme";
import SplashScreen from "./Components/SplashScreen";
import { useState, useEffect } from "react";
import Experience from "./sections/experience";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />

      <SplashScreen isLoading={isLoading} />
      {!isLoading && (
        <MainContainer>
          <GradientBackground />
          <Topbar />
          <Introduction />
          <GeneralInfosContainer>
            {/* <Aboutme /> */}
            {/* <Experience /> */}
          </GeneralInfosContainer>
        </MainContainer>
      )}
    </ThemeProvider>
  );
}

export default App;
