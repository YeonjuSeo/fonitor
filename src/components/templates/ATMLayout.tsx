import { isCapturingState, recordChunkState } from "@recoil/video";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import Webcam from "react-webcam";
import { useRecoilState, useRecoilValue } from "recoil";
import { customerInfoState } from "@recoil/customer";

export const ATMLayout = ({ children }: ATMLayoutProps) => {
  const webcamRef = React.useRef<Webcam & HTMLVideoElement>(null);
  const mediaRecorderRef = React.useRef<MediaRecorder | null>(null);
  const [imgSrc, setImgSrc] = React.useState<string | null>(null);
  const [isCapturing, setIsCapturing] = useRecoilState(isCapturingState);
  const [recordedChunks, setRecordedChunks] = useRecoilState(recordChunkState);
  const customerInfo = useRecoilValue(customerInfoState);
  const capture = React.useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }
  }, [webcamRef, setImgSrc]);

  const handleDataAvailable = React.useCallback(
    ({ data }: any) => {
      if (data.size > 0) {
        setRecordedChunks((prev: string | any[]) => {
          const result = prev.concat(data);
          return result;
        });
      }
    },
    [setRecordedChunks]
  );

  const handleStartCaptureClick = React.useCallback(() => {
    setIsCapturing(true);

    if (webcamRef.current!.stream) {
      if (!mediaRecorderRef.current) {
        mediaRecorderRef.current = new MediaRecorder(
          webcamRef.current!.stream!,
          {
            mimeType: "video/webm",
          }
        );
        mediaRecorderRef.current.addEventListener(
          "dataavailable",
          handleDataAvailable
        );
      }
      if (mediaRecorderRef.current!.state === "inactive") {
        mediaRecorderRef.current!.start();
      } else if (mediaRecorderRef.current!.state === "paused") {
        mediaRecorderRef.current!.resume();
      }
    }
  }, [setIsCapturing, handleDataAvailable]);

  const handleStopCaptureClick = React.useCallback(() => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current!.stop();
    }
    setIsCapturing(false);
  }, [mediaRecorderRef, webcamRef, setIsCapturing]);

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      // 생성된 url을 서버로 보내게 됨
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.setAttribute("style", "display:none");
      // a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      // a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
      sendRecordedVideo(blob);
    }
  }, [recordedChunks, setRecordedChunks]);

  const captureRepeatedly = () => {
    setInterval(() => {
      capture();
      sendCapturedImg();
    }, 1000);
  };
  const sendCapturedImg = () => {
    axios
      .post(`${process.env.REACT_APP_BE_API_END_POINT}/customerimages`, {
        customerId: customerInfo.customerId,
        url: imgSrc,
      })
      .then((resp) => console.log(resp.statusText))
      .catch((err) => console.log(err));
  };

  const sendRecordedVideo = (blob: Blob) => {
    let formData = new FormData();

    let fileName = `${new Date()}.webm`;
    let file = new File([blob], fileName);
    formData.append("customerId", customerInfo.customerId.toString());
    formData.append("file", file);
    console.log(formData);

    axios
      .post(
        `${process.env.REACT_APP_BE_API_END_POINT}/${customerInfo.customerId}/videos`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((resp) => console.log(resp.statusText))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setInterval(() => {
      if (isCapturing === true) {
        if (!mediaRecorderRef.current) {
          handleStartCaptureClick();
        }
      }
    }, 1000);
  }, [handleStartCaptureClick, isCapturing]);

  useEffect(() => {
    handleDownload();
  }, [recordedChunks.length]);

  return (
    <div className="p-2 flex flex-col items-center h-screen bg-gradient-to-r from-purple-400 to-indigo-500">
      {children}
      <div className="absolute bottom-0 right-0 text-purple-500 ">
        <button id="capture_btn" onClick={captureRepeatedly}>
          Capture photo
        </button>
        {recordedChunks.length > 0 && (
          <button id="download_btn" onClick={handleDownload}>
            Download
          </button>
        )}
        {isCapturing ? (
          <button id="record_btn" onClick={handleStopCaptureClick}>
            Stop Capture
          </button>
        ) : (
          <button id="record_btn" onClick={handleStartCaptureClick}>
            Start Capture
          </button>
        )}
        <div className="w-52">
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
        </div>
      </div>
    </div>
  );
};

type ATMLayoutProps = {
  children: React.ReactNode;
};
