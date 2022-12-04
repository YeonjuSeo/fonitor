import { useLocation, useNavigate } from "react-router-dom";
import { ATMLayout } from "../components/templates/ATMLayout";
import ProgressCircles from "@components/organisms/ProgressCircles";
import { Fragment } from "react";

const Processing = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { type: string };
  const type = state.type;

  setTimeout(() => {
    if (type === "거래처리") {
      // [TODO] 50만원 미만이면 안뜸
      navigate("/warning");
    } else if (type === "현금수취") {
      navigate("/notification", { state: { type: "현금수취" } });
    } else if (type === "전화연결") {
      navigate("/notification", { state: { type: "전화연결" } });
    }
  }, 4000);
  return (
    <ATMLayout>
      <div className="bg-white rounded-lg p-2 h-1/3 my-12 w-2/3">
        <div className="border-black border-2 rounded-lg flex flex-col justify-center h-full p-5">
          {type === "거래처리" && (
            <Fragment>
              <div className="font-semibold text-2xl">처리중</div>
              <br />
              <br />
              <div className="font-semibold text-xl">
                잠시만 기다려 주십시오
              </div>
            </Fragment>
          )}
          {type === "현금수취" && (
            <Fragment>
              <div className="font-semibold text-2xl">처리중</div>
              <br />
              <br />
              <div className="font-semibold text-xl">
                지금 현금을 세고 있습니다 <br />
                잠시만 기다려 주십시오
              </div>
            </Fragment>
          )}
          {type === "전화연결" && (
            <Fragment>
              <div className="font-semibold text-2xl">
                담당 부서에 상황을 전달하는 중입니다...
              </div>
              <br />
              <br />
              <div className="font-semibold text-xl">
                현재 위치한 지점 내에서 대기해주시기 바랍니다
              </div>
            </Fragment>
          )}
        </div>
      </div>

      <ProgressCircles />
    </ATMLayout>
  );
};

export default Processing;
