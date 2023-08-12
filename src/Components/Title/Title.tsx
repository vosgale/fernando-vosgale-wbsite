import { Styledh2 } from "./styles";

interface TitleProps {
  number?: number | string;
  text: string;
  alignEnd?: boolean;
}
export const Title = ({ number, text, alignEnd }: TitleProps) => {
  return (
    <Styledh2
      
      initial={{ opacity: 0, left: "-100px" }}
      viewport={{ once: true }}
      alignEnd={alignEnd}
      whileInView={{ opacity: 1, right: "0", left: 'unset' }}
      transition={{ duration: 1 }}
    >
      {number && <span>{number}.</span>}
      {text}
    </Styledh2>
  );
};
