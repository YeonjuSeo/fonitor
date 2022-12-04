export const TitleHeader = ({ text }: WarningHeaderType) => {
  return (
    <div className="mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 place-items-center border-white border-2 rounded-lg p-1 w-full border-opaicty-100">
      <div className=" p-3 text-white text-4xl font-medium flex justify-center items-center">
        {text}
      </div>
    </div>
  );
};

type WarningHeaderType = {
  text: string;
};
