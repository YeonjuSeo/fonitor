import { useRef } from "react";
import video2 from "@assets/video.mp4";
import useVideoPlayer from "@hooks/useVideoPlayer";
import { MdPause, MdPlayArrow } from "react-icons/md";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Analysis = () => {
  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
  } = useVideoPlayer(videoElement);

  const returnNewChart = () => {
    return <Bar options={options} data={data} />;
  };
  return (
    <div className="p-2 flex flex-col items-center h-screen bg-gray-900">
      <div className="flex text-white font-semibold justify-around w-full mt-6 mb-3">
        <div>신한 은행 / 이화여자대학교 지점</div>
        <div>No.e021fz</div>
        <div>2022.11.21 17:56:02</div>
      </div>
      <main className="justify-between items-between">
        {/* <main className="justify-between items-between grid grid-cols-2 grid-flow-row gap-4 place-items-center"> */}
        <div className="container">
          <div className="video-wrapper">
            <video
              src={video2}
              ref={videoElement}
              onTimeUpdate={handleOnTimeUpdate}
            />
            <div className="controls flex items-center px-3">
              <div className="actions flex items-center">
                <button onClick={togglePlay}>
                  {!playerState.isPlaying ? (
                    <MdPlayArrow className="text-4xl text-white" />
                  ) : (
                    <MdPause className="text-4xl text-white" />
                  )}
                </button>
              </div>

              <input
                className="mx-2 form-range bg-transparent w-full h-2 p-0 rounded-lg appearance-none cursor-pointer dark:bg-gray-200"
                type="range"
                min="0"
                max="100"
                value={playerState.progress}
                onChange={(e) => handleVideoProgress(e)}
              />
              {/* <select
                className="velocity"
                value={playerState.speed}
                onChange={(e) => handleVideoSpeed(e)}
              >
                <option value="0.50">0.50x</option>
                <option value="1">1x</option>
                <option value="1.25">1.25x</option>
                <option value="2">2x</option>
              </select> */}
            </div>
          </div>
        </div>
        <div className="h-1/6 w-full">
          <Bar options={options} data={data} />
          {/* <Bar options={options} data={data2} height={300} /> */}
        </div>
        <div className="h-1/6 w-full">
          {/* <Bar options={options} data={data3} /> */}
          {/* <Bar options={options} data={data2} height={300} /> */}
        </div>
      </main>
    </div>
  );
};

export default Analysis;

const labels = ["유효 감정 빈도"];

export const data = {
  labels,
  datasets: [
    {
      label: "유효 감정",
      data: [578],
      backgroundColor: "#3C39C0",
    },
    {
      label: "그외",
      data: [341],
      backgroundColor: "rgb(75, 192, 192)",
    },
  ],
};

const labels2 = ["감정 빈도"];

export const data3 = {
  labels2,
  datasets: [
    {
      label: "유효 감정",
      data: [578],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "그외",
      data: [341],
      backgroundColor: "rgb(75, 192, 192)",
    },
  ],
};
export const data2 = {
  labels2,
  datasets: [
    {
      label: "애정",
      data: [0],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "분노",
      data: [14],
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      label: "짜증",
      data: [103],
      backgroundColor: "rgb(53, 162, 235)",
    },
    // {
    //   label: "기대",
    //   data: [124],
    //   backgroundColor: "rgb(255, 99, 132)",
    // },
    // {
    //   label: "혐오",
    //   data: [17],
    //   backgroundColor: "rgb(75, 192, 192)",
    // },
    // {
    //   label: "자신감",
    //   data: [44],
    //   backgroundColor: "rgb(53, 162, 235)",
    // },
    // {
    //   label: "반감",
    //   data: [98],
    //   backgroundColor: "rgb(255, 99, 132)",
    // },
    // {
    //   label: "단절",
    //   data: [122],
    //   backgroundColor: "rgb(75, 192, 192)",
    // },
    // {
    //   label: "불안",
    //   data: [312],
    //   backgroundColor: "rgb(53, 162, 235)",
    // },
    // {
    //   label: "고통",
    //   data: [2],
    //   backgroundColor: "rgb(255, 99, 132)",
    // },
    // {
    //   label: "평화",
    //   data: [1],
    //   backgroundColor: "rgb(75, 192, 192)",
    // },
    // {
    //   label: "기쁨",
    //   data: [0],
    //   backgroundColor: "rgb(53, 162, 235)",
    // },
    // {
    //   label: "슬픔",
    //   data: [22],
    //   backgroundColor: "rgb(255, 99, 132)",
    // },
    // {
    //   label: "감성",
    //   data: [0],
    //   backgroundColor: "rgb(75, 192, 192)",
    // },
    // {
    //   label: "괴로움",
    //   data: [29],
    //   backgroundColor: "rgb(53, 162, 235)",
    // },
    // {
    //   label: "놀람",
    //   data: [31],
    //   backgroundColor: "rgb(255, 99, 132)",
    // },
    // {
    //   label: "동정",
    //   data: [0],
    //   backgroundColor: "rgb(75, 192, 192)",
    // },
    // {
    //   label: "동경",
    //   data: [0],
    //   backgroundColor: "rgb(53, 162, 235)",
    // },
  ],
};

export const options = {
  maintainAspectRatio: false,
  indexAxis: "y" as const,
  plugins: {
    title: {
      display: false,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  scales: {
    x: {
      display: false,
      stacked: true,
      grace: 5,
    },
    y: {
      stacked: true,
    },
  },
};
