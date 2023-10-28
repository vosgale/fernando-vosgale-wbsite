import {
  DesktopMenu,
  IconContainer,
  MobileMenu,
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
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menu = ["Sobre", "Experiência", "Projetos", "Repositórios"];
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
          {menu.map((item, index) => (
            <motion.li
              key={item}
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
      <MobileMenu>
        <AnimatePresence>
          {mobileMenuOpen && (
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
                {menu.map((item) => (
                  <motion.li
                    key={item}
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
                    <a>{item}</a>
                  </motion.li>
                ))}
                <div className="themeContainer">
                  <ThemeButton
                    active={theme === "dark"}
                    onClick={() =>  {setTheme("dark"); setMobileMenuOpen(false)}}
                  >
                    <DarkIcon />
                  </ThemeButton>
                  <ThemeButton
                    active={theme === "light"}
                    onClick={() =>  {setTheme("light"); setMobileMenuOpen(false)}}
                  >
                    <LightIcon />
                  </ThemeButton>
                </div>
              </>
            </motion.ul>
          )}
        </AnimatePresence>
      </MobileMenu>
    </>
  );
};
