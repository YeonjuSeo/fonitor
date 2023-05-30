import React, { MouseEventHandler } from "react";
import { useEffect } from "react";

const VideoListItemBtn = ({
  isVictim,
  startTime,
  isClicked,
  onClick,
}: PwBtnProps) => {
  useEffect(() => {}, [isClicked]);
  return (
    <button
      className={isClicked ? ClickedListItemStyle : UnClickedListItemStyle}
      onClick={onClick}
    >
      {isVictim === true && <div>🚨</div>}
      <div>{startTime}</div>
    </button>
  );
};

export default VideoListItemBtn;

type PwBtnProps = {
  isVictim: boolean;
  isClicked: number | boolean;
  startTime: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const ClickedListItemStyle =
  "text-white flex text-lg my-3.5 font-medium underline";
const UnClickedListItemStyle = "text-white flex text-lg my-3.5 font-medium";
