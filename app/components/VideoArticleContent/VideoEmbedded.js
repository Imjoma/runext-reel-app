"use client";
import { useEffect, useState, useRef } from "react";

import ReactPlayer from "react-player/youtube";

const VideoEmbedded = ({
  videoFullSize,
  activeIndex,
  idx,
  link,
  currentPlayer,
}) => {
  const [playVideo, setPlayVideo] = useState(
    activeIndex === idx ? true : false
  );
  const [mountPlayer, setMountPlayer] = useState(false);
  const [mountList, setMountList] = useState(currentPlayer);
  const videoRef = useRef(null);

  useEffect(() => {
    setMountList((state) => [...state, activeIndex + 2, activeIndex - 2]);
    if (videoRef.current && mountPlayer && activeIndex === idx) {
      videoRef.current?.seekTo(0, "seconds");
    }

    if (videoFullSize && mountPlayer === true) {
      //  ...
      if (activeIndex === idx) {
        setPlayVideo(true); // ... play state
      }
      if (activeIndex !== idx) {
        setPlayVideo(false); // ... pause state
      }
      //  ...
    } else {
      setMountPlayer(true);
    }
  }, [activeIndex]);

  console.log(idx, videoRef.current);

  const maxRender = mountList.includes(idx) && (
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${link}`}
      width={`100%`}
      height={`100%`}
      playing={playVideo}
      loop={true}
      ref={videoRef}
      volume={0.4}
    />
  );

  return (
    <div className={`pointer-events-none absolute w-full h-full bg-black`}>
      {mountPlayer ? (
        maxRender
      ) : (
        <p className="text-center text-white">not included</p>
      )}
    </div>
  );
};

export default VideoEmbedded;
