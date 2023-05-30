import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const EmotionRatioChart = (data: any) => {
  const [negativeEmoSum, setNegativeEmoSum] = useState(0);
  const [positiveEmoSum, setPositiveEmoSum] = useState(0);
  const emoInfo = data.data;

  useEffect(() => {
    const keys = Object.keys(emoInfo);
    let negSum = 0;
    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i];
      const value = emoInfo[key];
      negSum += value;
      console.log(`[${i}] negSum = ${negSum}`);
    }
    setNegativeEmoSum(negSum);
  }, []);
  useEffect(() => {
    setPositiveEmoSum(emoInfo.total - negativeEmoSum);
  }, [negativeEmoSum]);

  let pieData1 = {
    labels: ["부정", "긍정"],
    datasets: [
      {
        data: [negativeEmoSum, positiveEmoSum],
        backgroundColor: [
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 255, 255, 0.2)",
        ],
        borderColor: ["rgba(153, 102, 255, 1)", "rgba(255, 255, 255, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="relative ">
      <div className="text-white text-lg mr-16 absolute bottom-0 right-0 mt-5">
        유효 감정 별 비율(횟수)
      </div>
      <Pie className="" data={pieData1} options={options1} />
    </div>
  );
};

export default EmotionRatioChart;

export const options1 = {
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
    },
    title: {
      display: true,
      text: "Result Chart",
    },
  },
};
