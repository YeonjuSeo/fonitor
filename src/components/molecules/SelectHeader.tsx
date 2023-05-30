import DecisionBtn, { ButtonType } from "@components/atoms/DecisionBtn";
import { customerInfoState } from "@recoil/customer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

export const SelectHeader = ({
  title,
  cancelTxt,
  okTxt,
}: SelectHeaderProps) => {
  const navigate = useNavigate();
  const customerInfo = useRecoilValue(customerInfoState);

  const sendProcessEndTime = () => {
    let timezoneOffset = new Date().getTimezoneOffset() * 60000;
    let timezoneDate = new Date(Date.now() - timezoneOffset);

    axios
      .put(
        `${process.env.REACT_APP_BE_API_END_POINT}/customer/${customerInfo.customerId}`,
        {
          endTime: timezoneDate.toISOString(),
        }
      )
      .then((resp) => console.log(resp.statusText))
      .catch((err) => console.log(err));
  };
  const sendVideo = () => {};

  return (
    <div className="mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 grid grid-cols-3 grid-flow-row gap-4 place-items-center border-white border-2 rounded-lg p-1 w-full border-opaicty-100">
      {cancelTxt !== "" && (
        <div className="col-start-1 col-span- w-full">
          <DecisionBtn
            type={ButtonType.Cancel}
            text={cancelTxt}
            onClick={() => {
              navigate(-1);
            }}
          />
        </div>
      )}
      {title !== "" && (
        <div className="text-white text-4xl font-medium flex justify-center items-center">
          {title}
        </div>
      )}
      {okTxt !== "" && (
        <DecisionBtn
          type={ButtonType.Ok}
          text={okTxt}
          onClick={() => {
            if (title === "비밀번호") {
              sendProcessEndTime();
              sendVideo();
              navigate("/processing", { state: { type: "거래처리" } });
            }
          }}
        />
      )}
    </div>
  );
};

export type SelectHeaderProps = {
  title: string;
  cancelTxt: string;
  okTxt: string;
};
