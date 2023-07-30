import { useState, useEffect, useRef } from "react";

import Image from "next/image";

import playIconButton from "../../public/assets/video-play-icon.svg";
import closeIconButtonDark from "../../public/assets/closeIconButtonDark.svg";

import {
  currentNameToggler,
  gradientFilter,
  videoItemContentOnDefault,
} from "./VideoArticleContent/VideoArticleContent";
import VideoArticleStatus from "./VideoArticleContent/VideoArticleStatus";
import VideoArticleInfoCard from "./VideoArticleContent/VideoArticleInfoCard";
import VideoEmbedded from "./VideoArticleContent/VideoEmbedded";

const VideoArticleItem = ({
  currentPlayer,
  activeIndex,
  hasZoomButton,
  setSectionScroll,
  videoFullSize,
  details,
  subFont,
  idx,
}) => {
  const [infoCard, setInfoCard] = useState(false);

  const { name, link } = details;

  const defaultThumbnailSize = !videoFullSize
    ? "w-[270px] h-[480px] rounded-lg box-shadow  cursor-pointer"
    : "w-full h-full ";

  const hideThumbnail =
    !videoFullSize || activeIndex !== idx
      ? "opacity-100 "
      : "opacity-0 delay-300";

  const cardHeaderContent = !videoFullSize
    ? videoItemContentOnDefault(subFont, playIconButton, Image)
    : "";

  const isInfoCardOpen = !infoCard
    ? " opacity-100"
    : " opacity-40 pointer-events-none translate-x-[60%] rotate-[6.97deg]";

  const handleOpenInfoCard = () => {
    if (videoFullSize === true) return null;
    if (infoCard === false) {
      setInfoCard(true);
      setSectionScroll(false);
      hasZoomButton.current = true;
    } else {
      setInfoCard(false);
      setSectionScroll(true);
      hasZoomButton.current = false;
    }
  };

  return (
    <article
      className={`relative flex flex-col items-center justify-center w-full h-screen`}
    >
      {/* Name */}
      {currentNameToggler(videoFullSize, name.en, infoCard)}

      {/* Card: Video + Thumbnail */}
      <div
        className={`${isInfoCardOpen} ${defaultThumbnailSize} z-40 relative duration-300 ease-out overflow-hidden`}
      >
        {videoFullSize && (
          <VideoEmbedded
            videoFullSize={videoFullSize}
            activeIndex={activeIndex}
            idx={idx}
            currentPlayer={currentPlayer}
            link={link}
          />
        )}

        <Image
          src={`https://i.ytimg.com/vi_webp/${link}/maxresdefault.webp`}
          fill
          alt={`RUNext, Hey it's me ${name.en} self introduction`}
          sizes="80vw"
          className={`${hideThumbnail} duration-300 absolute object-cover select-none`}
          priority
          draggable="false"
          onClick={() => handleOpenInfoCard()}
        />

        {/* Card Filter */}
        {!infoCard && gradientFilter}
        {/* Card Content */}
        {cardHeaderContent}
        {/* ... Remove: Video Player Status */}
        {/* <VideoArticleStatus
          name={details.name.en}
          font={subFont}
          icon={playIconButton}
          videoFullSize={videoFullSize}
        /> */}
      </div>

      {/* Card: Info */}
      <VideoArticleInfoCard
        details={details}
        font={subFont}
        infoCard={infoCard}
        handleOpenInfoCard={handleOpenInfoCard}
        videoFullSize={videoFullSize}
      />

      {/* Card: Button Toggler */}
      {infoCard && (
        <div>
          <Image
            src={closeIconButtonDark}
            alt="close icon button for infocard"
            className="absolute z-50 cursor-pointer
          bottom-[56px] left-1/2 -translate-x-1/2"
            onClick={() => handleOpenInfoCard()}
          />
        </div>
      )}
    </article>
  );
};

export default VideoArticleItem;
