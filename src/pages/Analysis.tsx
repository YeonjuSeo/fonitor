import { useRef, useState, useEffect } from "react";
import useVideoPlayer from "@hooks/useVideoPlayer";
import { MdPause, MdPlayArrow } from "react-icons/md";
import { VideoMockData } from "@recoil/video";
import VideoListItemBtn from "@components/atoms/VideoListItemBtn";
import axios from "axios";
import { userInfoState } from "@recoil/user";
import { useRecoilValue } from "recoil";
import EmotionRatioChart from "@components/molecules/EmotionRatioChart";
import ValidEmotionRatioChart from "@components/molecules/ValidEmotionRatioChart";

const Analysis = () => {
  const videoElement = useRef(null);
  const [videoList, setVideoList] = useState(VideoMockData);
  const [whichIsClicked, setWhichIsClicked] = useState(0);
  const userInfo = useRecoilValue(userInfoState);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
  } = useVideoPlayer(videoElement);

  const getVideoData = () => {
    const params = { username: userInfo.username };
    axios
      .get(
        `${process.env.REACT_APP_BE_API_END_POINT}/users/${userInfo.username}/lists`,
        {
          params,
        }
      )
      .then((resp) => {
        setVideoList(resp.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getVideoData();
  }, []);

  return (
    <div className="flex bg-gray-900 w-full h-full">
      <div className="bg-gray-700 w-72 flex justify-center py-5 px-2 overflow-scroll h-screen ">
        <div className="flex flex-col items-end ">
          {videoList.map((video, i) => (
            <VideoListItemBtn
              isVictim={video.victim}
              isClicked={whichIsClicked === i ? true : false}
              startTime={video.startTime}
              onClick={() => {
                setWhichIsClicked(i);
              }}
            />
          ))}
        </div>
      </div>
      {videoList.map(
        (video, i) =>
          whichIsClicked === i && (
            <div className="p-2 w-10/12 flex flex-col items-center h-screen overflow-scroll">
              <div className="flex text-white font-semibold justify-around w-full mt-6 mb-3">
                <div>신한 은행 / 이화여자대학교 지점</div>
                <div>{video.atmId}</div>
                <div>
                  {video.startTime}/{video.endTime}
                </div>
              </div>
              <main className="flex flex-col justify-between items-center w-full px-10 py-10 ">
                <div className="container px-10 flex justify-center ">
                  <div className="video-wrapper flex flex-col w-2/3">
                    <video
                      src={video.filePath}
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
                      <select
                        className="velocity"
                        value={playerState.speed}
                        onChange={(e) => handleVideoSpeed(e)}
                      >
                        <option value="0.50">0.50x</option>
                        <option value="1">1x</option>
                        <option value="1.25">1.25x</option>
                        <option value="2">2x</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 py-5 w-3/4 ">
                  <EmotionRatioChart data={video.emotions} />
                  <ValidEmotionRatioChart data={video.emotions} />
                </div>
              </main>
            </div>
          )
      )}
    </div>
  );
};

export default Analysis;
