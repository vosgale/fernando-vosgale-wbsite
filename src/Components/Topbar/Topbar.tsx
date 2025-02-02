import {
  DesktopMenu,
  IconContainer,
  LanguageButton,
  LanguageContainer,
  MobileMenu,
  MobileMenuFooter,
  ThemeButton,
  TopbarContainer,
} from "./styles";
import { Divide as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IMAGES from "../../Images";
import useScrollDirection from "../../hooks/useScrollDirection";
import { DarkIcon } from "../../Images/dark-icon";
import { LightIcon } from "../../Images/light-icon";
import { i18n } from "../../i18n";
import { useTranslation } from "react-i18next";
export const Topbar = ({
  setTheme,
  theme,
}: {
  setTheme: (theme: "dark" | "light") => void;
  theme: "dark" | "light";
}) => {
  const scrollDirection = useScrollDirection("down");
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const handleScroll = () => {
    setScrolledToTop(window.scrollY < 50);
  };
  const { t } = useTranslation("topbar");
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menu = [t("about"), t("experience"), t("projects")];
  const motionConfig = {
    MenuInitial: {
      transform: "translateY(-20px)",
      opacity: 0,
    },
    MenuAnimate: {
      transform: "translateY(0)",
      opacity: 1,
    },
  };

  const [language, setLanguage] = useState(i18n.language);

  return (
    <>
      <TopbarContainer
        style={{
          transform:
            scrollDirection === "down"
              ? "translateY(-80px)"
              : "translateY(0px)",
          backgroundColor: scrolledToTop
            ? "transparent"
            : theme === "dark"
            ? "#10101059"
            : "#e1e0e059",
          backdropFilter: scrolledToTop ? "none" : "blur(10px)",
        }}
      >
        <IconContainer>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "tween", duration: 2 }}
            src={IMAGES.logo}
          />

          <div className="themeContainer">
            <ThemeButton
              active={theme === "dark"}
              onClick={() => setTheme("dark")}
            >
              <DarkIcon />
            </ThemeButton>
            <ThemeButton
              active={theme === "light"}
              onClick={() => setTheme("light")}
            >
              <LightIcon />
            </ThemeButton>
          </div>

          <Hamburger
            toggle={() => setMobileMenuOpen(!mobileMenuOpen)}
            toggled={mobileMenuOpen}
            size={25}
            duration={0.8}
          />
        </IconContainer>

        <DesktopMenu>
          <LanguageContainer>
            <LanguageButton
              active={language === "ptBR"}
              onClick={() => {
                i18n.changeLanguage("ptBR");
                setLanguage("ptBR");
              }}
            >
              PT-BR
            </LanguageButton>
            <LanguageButton
              active={language === "en"}
              onClick={() => {
                i18n.changeLanguage("en");
                setLanguage("en");
              }}
            >
              EN
            </LanguageButton>
          </LanguageContainer>
          {menu.map((item, index) => (
            <motion.li
              key={item}
              onClick={() => handleScrollTo(String(index))}
              variants={motionConfig}
              initial="MenuInitial"
              animate="MenuAnimate"
              transition={{
                delay: index / 3,
                duration: "1",
              }}
            >
              <a>
                {index + 1}.{item}
              </a>
            </motion.li>
          ))}
        </DesktopMenu>
      </TopbarContainer>

      <MobileMenu onClick={() => setMobileMenuOpen(false)}>
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.ul
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{ duration: 0.4, type: "tween" }}
                className="menu-container"
              >
                <>
                  {menu.map((item, index) => (
                    <motion.li
                      key={item}
                      onClick={() => handleScrollTo(String(index))}
                      initial={{
                        opacity: 0,
                        transform: "translateY(30px)",
                      }}
                      animate={{
                        opacity: 1,
                        transform: "translateY(0)",
                      }}
                      exit={{
                        opacity: 0,
                        transform: "translateY(30px)",
                      }}
                      transition={{ duration: 0.8, type: "tween" }}
                    >
                      <a>
                        {" "}
                        {index + 1}.{item}
                      </a>
                    </motion.li>
                  ))}

                  <MobileMenuFooter>
                    <div className="mobileMenuFooter-item">
                      <LanguageButton
                        active={language === "ptBR"}
                        onClick={() => {
                          i18n.changeLanguage("ptBR");
                          setLanguage("ptBR");
                        }}
                      >
                        PT-BR
                      </LanguageButton>
                      <LanguageButton
                        active={language === "en"}
                        onClick={() => {
                          i18n.changeLanguage("en");
                          setLanguage("en");
                        }}
                      >
                        EN
                      </LanguageButton>
                    </div>
                    <div className="mobileMenuFooter-item">
                      <ThemeButton
                        active={theme === "dark"}
                        onClick={() => setTheme("dark")}
                      >
                        <DarkIcon />
                      </ThemeButton>
                      <ThemeButton
                        active={theme === "light"}
                        onClick={() => setTheme("light")}
                      >
                        <LightIcon />
                      </ThemeButton>
                    </div>
                  </MobileMenuFooter>
                </>
              </motion.ul>
            </>
          )}
        </AnimatePresence>
      </MobileMenu>
    </>
  );
};
