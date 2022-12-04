import { Fragment } from "react";
import DeicisionBtn, { ButtonType } from "@components/atoms/DecisionBtn";
import { useNavigate } from "react-router-dom";
import TextEmbeddedBtn from "@components/atoms/TextEmbeddedBtn";
const WarningCall = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="w-full">
        <div className="mb-8 font-bold text-4xl">
          보이스피싱 문의를 전달해드릴까요?
        </div>
        <div className="mb-8 font-semibold text-xl">
          '네' 버튼을 선택할 시 자동으로 관련 부처에 문의사항이 전달되며, <br />
          30분 안으로 관계자가 고객님을 방문할 예정입니다.
          <br />
          계속 거래를 하시려면 <TextEmbeddedBtn text="아니오" /> 버튼을 눌러
          주세요.
        </div>
      </div>

      <div className="w-full flex grid grid-cols-2 gap-32 px-16">
        <DeicisionBtn
          type={ButtonType.Ok}
          text="네"
          onClick={() => {
            navigate("/processing", { state: { type: "전화연결" } });
          }}
        />
        <DeicisionBtn
          type={ButtonType.Cancel}
          text="아니오"
          onClick={() => {
            navigate("/processing", { state: { type: "현금수취" } });
          }}
        />
      </div>
    </Fragment>
  );
};

export default WarningCall;
