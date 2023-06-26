import { Styledh2 } from "./styles";

interface TitleProps {
  number: number | string;
  text: string;
}
export const Title = ({ number, text }: TitleProps) => {
  return (
    <Styledh2
      initial={{ opacity: 0, left: "-1000px", letterSpacing: "100px" }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, left: "0", letterSpacing: "15px" }}
      transition={{ duration: 1 }}
    >
      <span>{number}.</span>
      {text}
    </Styledh2>
  );
};
