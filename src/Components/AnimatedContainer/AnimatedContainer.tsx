import { motion } from "framer-motion";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  autoHeight?: boolean;
}

const Container = styled(motion.section)<{ autoHeight?: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 30;
  min-height: ${(props) => (props.autoHeight ? "5vh" : "100vh")};
  justify-content: center;
`;

export const AnimatedContainer: React.FC<Props> = ({
  children,
  autoHeight,
}) => {
  return (
    <Container
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      autoHeight={autoHeight}
      transition={{ duration: 1, delay: 0.3 }}
    >
      {children}
    </Container>
  );
};
