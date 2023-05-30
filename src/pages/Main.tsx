import { useNavigate } from "react-router-dom";
import { ATMLayout } from "../components/templates/ATMLayout";
import MenuBtn from "@components/atoms/MenuBtn";
import { useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";
import { userInfoState } from "@recoil/user";
import { customerInfoState } from "@recoil/customer";
import { IoIosSettings } from "react-icons/io";

const Main = () => {
  const navigate = useNavigate();
  const userInfo = useRecoilValue(userInfoState);
  // const setCustomerInfo = useSetRecoilState(customerInfoState);
  const [customerInfo, setCustomerInfo] = useRecoilState(customerInfoState);

  const handleStartWithdraw = (e: any) => {
    startVideoRecording();
    addCustomer();
    startImgCapturing();
  };

  const startVideoRecording = () => {
    document.getElementById("record_btn")!.click();
  };

  const startImgCapturing = () => {
    document.getElementById("capture_btn")!.click();
  };

  const addCustomer = () => {
    let timezoneOffset = new Date().getTimezoneOffset() * 60000;
    let timezoneDate = new Date(Date.now() - timezoneOffset);
    axios
      .post(`${process.env.REACT_APP_BE_API_END_POINT}/customer`, {
        atmId: userInfo.atmId,
        startTime: timezoneDate.toISOString(),
        endTime: "",
      })
      .then((resp) => {
        console.log("addCustomer result.data = " + resp.data);
        setCustomerInfo(() => ({
          isVictim: customerInfo.isVictim,
          customerId: resp.data,
          video: "",
          imgs: [],
        }));
        navigate("/menu", { state: { type: "매체선택" } });
      })
      .catch((err) => console.log(err));
  };

  return (
    <ATMLayout>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="text-gray-600 absolute right-0 mr-5 text-xl"
      >
        <IoIosSettings />
      </button>
      <main className="mt-16 justify-between items-between grid grid-cols-4 grid-flow-row gap-5 place-items-center">
        {MainMenuList.map((e, i) => (
          <MenuBtn
            key={e + i}
            text={e}
            disabled={e !== "예금인출" ?? true}
            onClick={(e) => {
              handleStartWithdraw(e);
            }}
          />
        ))}
        <div className="row-start-1 row-span-4 col-start-2 col-span-2 h-full grid grid-rows-4 w-full gap-4">
          <div className="bg-orange-400 rounded-lg p-2 h-full row-start-1 row-span-1 flex flex-col justify-center items-center font-semibold text-xl">
            만원,오만원권만 입출금 가능
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
