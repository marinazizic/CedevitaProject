import React, { useRef, useEffect } from "react";
import "./css/FindMore.css";
import Video from "./imgs/cedvid.mp4";

function FindMore() {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div className="FindMore" id="FindMore">
      <video ref={videoRef} src={Video} autoPlay muted loop id="video" />
      <div className="positioned">
        <h1 id="cenaslov">Ono nesto CE</h1>
        <a href="#about" id="saznaj">
          Saznaj više
        </a>
      </div>
    </div>
  );
}

export default FindMore;
