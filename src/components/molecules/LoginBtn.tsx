import React, { MouseEventHandler } from "react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FiUser } from "react-icons/fi";
const LoginBtn = ({ type, onClick }: LoginBtnType) => {
  return (
    <button
      className="bg-gray-700 rounded w-48 h-64 flex flex-col justify-center items-center"
      onClick={onClick}
    >
      {type === "고객" ? (
        <FiUser className="text-white text-6xl " />
      ) : (
        <MdOutlineAdminPanelSettings className="text-white text-6xl" />
      )}

      <div className="text-white font-semibold mt-4">{type}</div>
    </button>
  );
};

export default LoginBtn;

type LoginBtnType = {
  type: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
