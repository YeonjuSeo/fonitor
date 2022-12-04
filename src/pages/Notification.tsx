import { TitleHeader } from "@components/molecules/TitleHeader";
import { useLocation, useNavigate } from "react-router-dom";
import { SelectHeaderProps } from "../components/molecules/SelectHeader";
import { ATMLayout } from "../components/templates/ATMLayout";

const Notification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { type: string };
  const type = state.type;

  setTimeout(() => {
    navigate("/main");
  }, 3000);
  return (
    <ATMLayout>
      <TitleHeader text={HeaderMap.get(type)!.title} />
      <div className="bg-white rounded-lg p-2 w-4/5 h-3/5">
        <div className="border-black border-2 rounded-lg flex flex-col justify-center items-center h-full p-5">
          <div className="font-semibold text-2xl">
            놓고 가시는 물건은 없는지 확인해 주십시오. <br /> 이용해 주셔서
            감사합니다.
          </div>
        </div>
      </div>
    </ATMLayout>
  );
};

export default Notification;

const HeaderMap = new Map<string, SelectHeaderProps>([
  ["매체선택", { title: "카드", cancelTxt: "취소", okTxt: "" }],
  ["현금수취", { title: "안내", cancelTxt: "", okTxt: "" }],
  ["전화연결", { title: "안내", cancelTxt: "", okTxt: "" }],
]);
