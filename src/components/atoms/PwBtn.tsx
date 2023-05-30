import React, { MouseEventHandler } from "react";

const PwBtn = ({ text, onClick }: PwBtnProps) => {
  return (
    <button
      className="w-full bg-white text-2xl font-medium p-2 rounded-lg "
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default PwBtn;

type PwBtnProps = {
  text: string | number;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
