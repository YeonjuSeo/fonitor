import DecisionBtn, { ButtonType } from "@components/atoms/DecisionBtn";
import { useNavigate } from "react-router-dom";

export const SelectHeader = ({
  title,
  cancelTxt,
  okTxt,
}: SelectHeaderProps) => {
  const navigate = useNavigate();

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
        // <div className="col-start-3 col-span-3 w-full">
        <DecisionBtn
          type={ButtonType.Ok}
          text={okTxt}
          onClick={() =>
            navigate("/processing", { state: { type: "거래처리" } })
          }
        />
        // </div>
      )}
    </div>
  );
};

export type SelectHeaderProps = {
  title: string;
  cancelTxt: string;
  okTxt: string;
};
