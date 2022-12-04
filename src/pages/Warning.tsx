import { ATMLayout } from "../components/templates/ATMLayout";
import { TitleHeader } from "@components/molecules/TitleHeader";
import WarningContainer from "@components/organisms/WarningContainer";

const Warning = () => {
  return (
    <>
      <ATMLayout>
        <TitleHeader text="🚨 보이스피싱 위험 감지 🚨" />
        <WarningContainer type="AA" />
      </ATMLayout>
    </>
  );
};

export default Warning;
