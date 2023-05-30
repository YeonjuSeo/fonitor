import React from "react";
import {
  SelectHeader,
  SelectHeaderProps,
} from "@components/molecules/SelectHeader";
import { ATMLayout } from "@components/templates/ATMLayout";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import MenuBtn from "@components/atoms/MenuBtn";
import InstructionContainer from "@components/molecules/InstructionContainer";
import { useRecoilValue } from "recoil";
import { customerInfoState } from "@recoil/customer";
import axios from "axios";
import { useEffect } from "react";

const Menu = () => {
  const customerInfo = useRecoilValue(customerInfoState);

  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { type: string };
  const type = state.type;

  const handleNavigate = () => {
    if (type === "매체선택") {
      navigate("/menu", { state: { type: "금액선택" } });
    } else if (type === "금액선택") {
      navigate("/pw");
    }
  };

  const sendDebit = (debitMoney: number) =>
    axios
      .post(`${process.env.REACT_APP_BE_API_END_POINT}/result`, {
        customerId: customerInfo.customerId,
        withdraw: debitMoney,
      })
      .then((resp) => {
        console.log(resp.statusText);
        handleNavigate();
      })
      .catch((err) => console.log(err));

  useEffect(() => {
    document.getElementById("record_btn")!.click();
  }, []);

  return (
    <ATMLayout>
      <SelectHeader
        title={HeaderMap.get(type)!.title}
        cancelTxt={HeaderMap.get(type)!.cancelTxt}
        okTxt={HeaderMap.get(type)!.okTxt}
      />
      <main className="grid grid-cols-4 grid-flow-row gap-5 place-items-center">
        {type === "매체선택" &&
          MediumList.map((e, i) => (
            <MenuBtn
              key={e + i}
              disabled={e === "카드" ? false : true}
              text={e}
              onClick={handleNavigate}
            />
          ))}
        {type === "금액선택" && (
          <React.Fragment>
            {PricesList.map((price) => (
              <MenuBtn
                key={price + "만원"}
                text={price + "만원"}
                onClick={(e) => {
                  document.getElementById("record_btn")!.click();
                  sendDebit(price);
                }}
              />
            ))}
            <button className="w-full bg-orange-400 text-2xl font-medium p-2 rounded-lg shadow-xl">
              기타
            </button>
          </React.Fragment>
        )}
        <div className="row-start-1 row-span-6 col-start-2 col-span-2 h-full">
          <InstructionContainer type={type} />
        </div>
      </main>
    </ATMLayout>
  );
};

export default Menu;

const HeaderMap = new Map<string, SelectHeaderProps>([
  ["매체선택", { title: "매체선택", cancelTxt: "취소", okTxt: "" }],
  ["금액선택", { title: "금액선택", cancelTxt: "취소", okTxt: "" }],
]);

const MediumList = [
  "바이오인증",
  "간편 앱출금",
  "창구 연계 출금",
  "Pay",
  "카드",
  "통장",
  "무매체",
  "모바일현금카드",
  "전자통장",
];

const PricesList = [3, 5, 10, 15, 20, 30, 40, 50, 60, 70, 100];
const pwBoardList = [1, "*", 2, 3, 4, 5, 6, 7, "*", 8, 9, 0];
