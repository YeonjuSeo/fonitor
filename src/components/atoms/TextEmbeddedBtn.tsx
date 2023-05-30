import React from "react";

const TextEmbeddedBtn = ({ text }: TextEmbeddedBtnProps) => {
  return (
    <span>
      <span className={BtnStyleList.get(text)}>{text}</span>
    </span>
  );
};

export default TextEmbeddedBtn;

type TextEmbeddedBtnProps = {
  text: string;
};

const BtnStyleList = new Map<string, string>([
  [
    "기타",
    "bg-orange-400 text-lg font-medium py-1 px-6 rounded-lg text-center shadow-lg",
  ],
  [
    "확인",
    "bg-green-500 text-lg font-medium py-1 px-6 rounded-lg text-center shadow-lg",
  ],
  [
    "네",
    "bg-green-500 text-lg font-medium py-1 px-6 rounded-lg text-center shadow-lg",
  ],
  [
    "아니오",
    "bg-red-500 text-lg font-medium py-1 px-4 rounded-lg text-center shadow-lg",
  ],
]);
