import DeicisionBtn, { ButtonType } from "@components/atoms/DecisionBtn";
import { Fragment, MouseEventHandler } from "react";
import RedTxtEmphasis from "@components/atoms/RedTxtEmphasis";
import TextEmbeddedBtn from "@components/atoms/TextEmbeddedBtn";
const WarningMeet = ({ onClick }: WarningMeetType) => {
  return (
    <Fragment>
      <div className="w-full">
        <div className="mb-8 font-bold text-4xl">
          출금 후 <br />
          모르는 사람과 만나기로 약속하셨습니까?
        </div>
        <ul
          style={{ listStyleType: "square" }}
          className="mb-8 font-semibold text-xl px-4"
        >
          <li>
            정부기관(검찰, 경찰, 금감원 등)에서 범죄에 연루되었다며
            <RedTxtEmphasis text=" 안전한 곳에 돈을 보관하기 위해 " />
            현금을 인출해 만나자고 하는 경우
          </li>
          <li>
            <RedTxtEmphasis text="저금리 대출" />을 진행하려면{" "}
            <RedTxtEmphasis text="기존 대출금을 상환" />
            해야한다며 현금을 인출해 만나자고 하는 경우
          </li>
          <li>
            <RedTxtEmphasis text="소액결제/택배조회" /> 등 문자를 받고
            확인전화를 하자 정보가 노출 되었다며{" "}
            <RedTxtEmphasis text="기존 계좌의 돈을 안전한 곳에 보관" />
            하기 위해 현금을 인출해 만나자고 하는 경우
          </li>
          <br />
          해당하신다면 <TextEmbeddedBtn text="네" />, 그렇지 않다면{" "}
          <TextEmbeddedBtn text="아니오" />를 선택해주세요.
        </ul>
      </div>

      <div className="w-full flex grid grid-cols-2 gap-32 px-16">
        <DeicisionBtn type={ButtonType.Ok} text="네" onClick={onClick} />
        <DeicisionBtn
          type={ButtonType.Cancel}
          text="아니오"
          onClick={onClick}
        />
      </div>
    </Fragment>
  );
};

export default WarningMeet;

type WarningMeetType = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};
