import { motion } from "framer-motion";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Container = styled(motion.section)`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 30;
  min-height: 100vh;
  justify-content: center;
`;

export const AnimatedContainer: React.FC<Props> = ({ children }) => {
  return (
    <Container
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      {children}
    </Container>
  );
};
