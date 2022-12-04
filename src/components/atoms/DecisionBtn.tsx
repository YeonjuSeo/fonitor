import { MouseEventHandler } from "react";

export enum ButtonType {
  Normal,
  Cancel,
  Ok,
}

const DeicisionBtn = ({ type, text, onClick }: DeicisionBtnProps) => {
  return (
    <button className={BtnStyleList.get(type)} onClick={onClick}>
      {text}
    </button>
  );
};

export default DeicisionBtn;

type DeicisionBtnProps = {
  type: ButtonType;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const BtnStyleList = new Map<ButtonType, string>([
  [ButtonType.Cancel, "w-full bg-red-500 text-4xl font-medium p-2 rounded-lg"],
  [ButtonType.Ok, "w-full bg-green-500 text-4xl font-medium p-2 rounded-lg"],
]);
