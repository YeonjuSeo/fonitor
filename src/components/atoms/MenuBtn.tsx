import React, { MouseEventHandler } from "react";

const MenuBtn = ({ text, disabled, onClick }: MenuBtnProps) => {
  return (
    <button
      className={disabled ? UnavailableBtnStyle : AvailableBtnStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default MenuBtn;

type MenuBtnProps = {
  text: string | number;
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const AvailableBtnStyle =
  "w-full bg-white text-2xl font-medium px-2 py-4 rounded-lg shadow-xl";
const UnavailableBtnStyle =
  "w-full bg-gray-300 text-2xl font-medium px-2 py-4 rounded-lg shadow-xl";
