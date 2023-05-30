import WarningCall from "@components/organisms/WarningCall";
import { useState } from "react";
import WarningNoti from "@components/organisms/WarningNoti";
import WarningMeet from "@components/organisms/WarningMeet";
const WarningContainer = ({ type }: WarningContainerType) => {
  const [step, setStep] = useState(1);
  return (
    <div className="w-4/5 flex flex-col items-center justify-around bg-white rounded-lg p-8 py-20">
      {step === 1 && <WarningNoti onClick={() => setStep(2)} />}
      {step === 2 && <WarningMeet onClick={() => setStep(3)} />}
      {step === 3 && <WarningCall />}
    </div>
  );
};

export default WarningContainer;

type WarningContainerType = {
  type: string;
};
