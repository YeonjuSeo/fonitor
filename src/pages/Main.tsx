import { useNavigate } from "react-router-dom";
import { ATMLayout } from "../components/templates/ATMLayout";
import MenuBtn from "@components/atoms/MenuBtn";

const Main = () => {
  const navigate = useNavigate();
  return (
    <ATMLayout>
      <main className="mt-16 justify-between items-between grid grid-cols-4 grid-flow-row gap-5 place-items-center">
        {MainMenuList.map((e) => (
          <MenuBtn
            text={e}
            onClick={() => {
              navigate("/menu", { state: { type: "매체선택" } });
            }}
          />
        ))}
        <div className="row-start-1 row-span-4 col-start-2 col-span-2 h-full grid grid-rows-4 w-full gap-4">
          <div className="bg-orange-400 rounded-lg p-2 h-full row-start-1 row-span-1 flex flex-col justify-center items-center font-semibold text-xl">
            <div>만원,오만원권만 입출금 가능</div>

            <div>[수표 출금 불가]</div>
          </div>
          <div className="rounded-lg p-2 h-full row-start-2 row-span-3 flex justify-center">
            <img className="w-3/5" src={require("../assets/commerce.png")} />
          </div>
        </div>
      </main>
    </ATMLayout>
  );
};

export default Main;

const MainMenuList = [
  "예금인출",
  "입금/무통장송금",
  "예금조회",
  "계좌이체",
  "전자화폐",
  "신용카드업무",
  "통장정리",
  "국고/지방새/등록금/법원",
];
