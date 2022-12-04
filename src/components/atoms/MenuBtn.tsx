import React, { MouseEventHandler } from "react";

const MenuBtn = ({ text, onClick }: MenuBtnProps) => {
  return (
    <button
      className="w-full bg-white text-2xl font-medium px-2 py-4 rounded-lg shadow-xl"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MenuBtn;

type MenuBtnProps = {
  text: string | number;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
