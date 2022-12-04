import { FaChevronRight } from "react-icons/fa";

const ProgressCircles = () => {
  return (
    <div className="flex items-center">
      <div className="rounded-full h-40 w-40 flex items-center justify-center bg-white font-medium text-4xl">
        시작
      </div>
      <FaChevronRight className="mx-3 text-4xl text-white" />
      <div className="rounded-full h-40 w-40 flex items-center justify-center bg-white p-2">
        <div className="rounded-full h-full w-full flex items-center justify-center bg-orange-500 font-medium text-4xl">
          진행
        </div>
      </div>
      <FaChevronRight className="mx-3 text-4xl text-white" />
      <div className="rounded-full h-40 w-40 flex items-center justify-center bg-white font-medium text-4xl">
        종료
      </div>
    </div>
  );
};

export default ProgressCircles;
