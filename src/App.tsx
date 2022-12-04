import React from "react";
import logo from "./logo.svg";
import { Router } from "./Router";
import Webcam from "react-webcam";
import "./index.css";

function App() {
  const webcamRef = React.useRef<Webcam & HTMLVideoElement>(null);
  const [imgSrc, setImgSrc] = React.useState<string | null>(null);
  const capture = React.useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
      // do stuff with that screenshot :D
    }
  }, [webcamRef, setImgSrc]);
  return (
    <div className={name}>
      <Router />
      {/* <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture}>Capture photo</button>
      {imgSrc && <img src={imgSrc!} />} */}
    </div>
  );
}

export default App;

const name = "App hi";
