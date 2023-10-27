import { ThemeProvider } from "styled-components";
import GlobalStyles, {
  GeneralInfosContainer,
  MainContainer,
} from "./styles/global-styles";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import Topbar from "./Components/Topbar";
import Introduction from "./sections/introduction";
import Aboutme from "./sections/aboutme";
import SplashScreen from "./Components/SplashScreen";
import { useState, useEffect } from "react";
import Experience from "./sections/experience";
import MainProjects from "./sections/mainProjects";
import Repositories from "./sections/repositories";
import Footer from "./sections/footer";
import Skills from "./sections/skills";
import './i18n'
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const savedTheme = window.localStorage.getItem("theme") as
    | "dark"
    | "light"
    | null;
  const [theme, setDarkTheme] = useState<"dark" | "light">(
    savedTheme || "dark"
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  const handleChangeTheme = (theme: "light" | "dark") => {
    window.localStorage.setItem("theme", theme);
    setDarkTheme(theme);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <GlobalStyles />
      <SplashScreen isLoading={isLoading} />
      <Topbar theme={theme} setTheme={handleChangeTheme} />
      {!isLoading && (
        <MainContainer>
          <GeneralInfosContainer>
            <Introduction />
            <Aboutme />
            <Experience />
            <MainProjects />
            <Repositories />
            <Skills />
            <Footer />
          </GeneralInfosContainer>
        </MainContainer>
      )}
    </ThemeProvider>
  );
}

export default App;
