import { motion } from "framer-motion";
import styled from "styled-components";
interface FlexContainer {
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
}
export const Text = styled(motion.p)`
  letter-spacing: 0.1em;
  line-height: 24px;
  font-size: clamp(11px, 0.8vw, 16px);
  color: ${(props) => props.theme.colors.secondary};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 30;
`;

export const Flex = styled.div<{ flexProps?: FlexContainer }>`
  display: flex;
  flex-direction: ${(props) => props.flexProps?.flexDirection || "row"};
  align-items: ${(props) => props.flexProps?.alignItems || "flex-start"};
  justify-content: ${(props) => props.flexProps?.justifyContent || "flex-start"};
  width: 100%;
`;
