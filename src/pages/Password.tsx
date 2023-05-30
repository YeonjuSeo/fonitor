import { useState, useEffect } from "react";
import { SelectHeader } from "@components/molecules/SelectHeader";
import { ATMLayout } from "@components/templates/ATMLayout";
import InstructionContainer from "@components/molecules/InstructionContainer";
import PwBtn from "@components/atoms/PwBtn";

const Password = () => {
  const [pw, setPw] = useState("");
  const [isEnterFinished, setIsEnterFinished] = useState(false);
  useEffect(() => {
    if (pw.length === 4) {
      setIsEnterFinished(true);
    }
  }, [pw]);

  return (
    <ATMLayout>
      {isEnterFinished ? (
        <SelectHeader title="비밀번호" cancelTxt="취소" okTxt="확인" />
      ) : (
        <SelectHeader title="비밀번호" cancelTxt="취소" okTxt="" />
      )}

      <main className="grid grid-cols-2 grid-flow-row gap-5 place-items-center">
        <div className="h-full">
          <InstructionContainer type="비밀번호" />
        </div>
        <div className="grid grid-cols-4 grid-lows-4 grid-flow-row gap-5 place-items-center">
          {pwBoardList.map((e, i) => (
            <PwBtn
              key={e + "번" + i}
              text={e}
              onClick={() => {
                if (e !== "*") {
                  setPw(pw + e);
                }
              }}
            />
          ))}
          <div className="row-start-4 col-start-1 col-span-2 w-full">
            <PwBtn text="재배열" onClick={() => {}} />
          </div>

          <PwBtn text="⬅️" onClick={() => {}} />
          <PwBtn text="정정" onClick={() => {}} />
        </div>
      </main>
      <div className="flex items-center">
        <div className="font-bold mr-4">비밀번호</div>
        <input
          className="bg-transparent h-12 text-4xl mt-2"
          type="password"
          value={pw}
        />
      </div>
    </ATMLayout>
  );
};

export default Password;

const pwBoardList = [1, "*", 2, 3, 4, 5, 6, 7, "*", 8, 9, 0];
