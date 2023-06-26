import { DesktopMenu, MobileMenu, TopbarContainer } from "./styles";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IMAGES from "../../Images";
export const Topbar = () => {
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
    <TopbarContainer>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", duration: 2 }}
        src={IMAGES.logo}
      />
      <DesktopMenu>
        {menu.map((item, index) => (
          <motion.li
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
      <MobileMenu>
        <Hamburger
          toggle={() => setMobileMenuOpen(!mobileMenuOpen)}
          toggled={mobileMenuOpen}
          size={25}
          duration={0.8}
        />
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
              {menu.map((item) => (
                <motion.li
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
            </motion.ul>
          )}
        </AnimatePresence>
      </MobileMenu>
    </TopbarContainer>
  );
};
