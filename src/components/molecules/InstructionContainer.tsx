import React, { MouseEventHandler } from "react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import RedTxtEmphasis from "@components/atoms/RedTxtEmphasis";
import TextEmbeddedBtn from "@components/atoms/TextEmbeddedBtn";
const InstructionContainer = ({ type }: InstructionContainerType) => {
  const returnInstructionContent = () => {
    if (type === "매체선택") {
      return (
        <React.Fragment>
          <h1 className="font-semibold text-2xl">
            원하시는 거래를 선택하여 주십시오
          </h1>
          <br />
          <h2 className="font-semibold text-lg">
            *통장 및 무매체 거래는 창구에서 거래신청하신 계좌만 가능합니다
          </h2>
          <h3 className="font-semibold text-lg">
            *바이오 등록은 스마트 라운지 설치점에서 가능합니다
          </h3>
        </React.Fragment>
      );
    } else if (type === "금액선택") {
      return (
        <React.Fragment>
          <h1 className="font-semibold text-2xl">
            찾으실 금액의 버튼을 하나만
            <br /> 눌러 주십시오
          </h1>
          <h1 className="font-semibold text-2xl">
            해당 금액이 없으면 <br />
            <TextEmbeddedBtn text="기타" /> 버튼을 눌러 주십시오
          </h1>
          <br />
          <h3 className="font-semibold text-lg">
            현금은 100만원까지 지급 가능합니다
          </h3>
        </React.Fragment>
      );
    } else if (type === "비밀번호") {
      return (
        <React.Fragment>
          <h1 className="font-semibold text-2xl">
            <RedTxtEmphasis
              text="[주의]반드시 비밀번호는 타인이나 카메라 등에 노출되지 않도록 손이나
            책 등으로 가린 후 입력하십시오"
            />
          </h1>
          <br />
          <h1 className="font-semibold text-lg">
            <RedTxtEmphasis text="4자리 비밀번호" />를 눌러 주십시오
          </h1>
        </React.Fragment>
      );
    }
  };

  return (
    <div className="bg-white rounded-lg p-2 h-full">
      <div className="border-black border-2 rounded-lg flex flex-col justify-center  h-full p-5">
        {returnInstructionContent()}
      </div>
    </div>
  );
};

export default InstructionContainer;

type InstructionContainerType = {
  type: string;
};
