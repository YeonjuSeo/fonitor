import { ValidEmotionType } from "@recoil/video";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { useEffect } from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ValidEmotionRatioChart = (data: any) => {
  const emoInfo = data.data;

  useEffect(() => {
    console.log(
      `[ValidRatio] ${emoInfo} sadness: ${emoInfo.sadness} total: ${emoInfo.total}`
    );
  }, []);
  const pieData2 = {
    labels: ["분노", "짜증", "반감", "불안", "혼란", "슬픔", "괴로움"],
    datasets: [
      {
        data: [
          emoInfo.anger,
          emoInfo.annoyance,
          emoInfo.disapproval,
          emoInfo.disquietment,
          emoInfo.confusion,
          emoInfo.sadness,
          emoInfo.suffering,
        ],
        backgroundColor: [
          "rgba(255, 255, 255, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 255, 255, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="relative ">
      <div className="text-white text-lg absolute bottom-0 right-0 mt-5 ">
        유효 감정 판단 결과(횟수)
      </div>
      <Pie className="" data={pieData2} options={options1} />
    </div>
  );
};

export default ValidEmotionRatioChart;

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
