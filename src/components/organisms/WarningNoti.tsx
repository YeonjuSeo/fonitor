import DeicisionBtn, { ButtonType } from "@components/atoms/DecisionBtn";
import { Fragment, MouseEventHandler } from "react";
import TextEmbeddedBtn from "@components/atoms/TextEmbeddedBtn";
const WarningNoti = ({ onClick }: WarningNotiType) => {
  return (
    <Fragment>
      <div className="w-full">
        <div className="mb-8 font-bold text-4xl">
          고객님께서는 <br />
          보이스피싱 위험군으로 판단되었습니다.
        </div>
        <p className="mb-8 font-semibold text-xl">
          공공기관 및 금융기관 직원으로부터 현금 전달 요구 또는 현금으로 대출금
          상환 등을 요구 받으면 100% 보이스피싱 입니다.
          <br />
          검찰, 경찰, 금감원 등은 절대 현금을 요구하지도 보관하지 않으며,
          유선으로 개인정보나 금융거래를 요구하지 않습니다. 금융사는 저리 대출
          광고 문자를 보내지 않습니다.
          <br />
          <br />
          거래를 진행하시려면 <TextEmbeddedBtn text="확인" /> 버튼을 눌러주세요.
        </p>
      </div>

      <div className="w-1/3">
        <DeicisionBtn type={ButtonType.Ok} text="확인" onClick={onClick} />
      </div>
    </Fragment>
  );
};

export default WarningNoti;

type WarningNotiType = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};
