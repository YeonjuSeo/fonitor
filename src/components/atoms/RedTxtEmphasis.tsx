const RedTxtEmphasis = ({ text }: RedTxtEmphasisProps) => {
  return <span className="text-red-600">{text}</span>;
};

export default RedTxtEmphasis;

type RedTxtEmphasisProps = {
  text: string | number;
};
