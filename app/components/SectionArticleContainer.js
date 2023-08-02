"use client";

import { useEffect, useState, useContext, useRef } from "react";
import { IconContext } from "../context/IconContext";

import Image from "next/image";
import zoomIconButton from "../../public/assets/zoomIconButton.svg";
import closeIconButtonLight from "../../public/assets/closeIconButtonLight.svg";

import VideoArticleLoader from "./SkeletonLoader/VideoArticleLoader";

import { contestant } from "../constants/contestant";

import VideoArticleItem from "./VideoArticleItem";

import { Anton } from "next/font/google";
const anton = Anton({ weight: "400", subsets: ["latin"] });

import { Antonio } from "next/font/google";
const antonio = Antonio({ weight: "400", subsets: ["latin"] });

import { register } from "swiper/element/bundle";
register();

const SectionArticleContainer = () => {
  const swiperElRef = useRef(null);
  const hasZoomButton = useRef(false);

  const { iconTheme, iconContextToggler } = useContext(IconContext);

  const [videoFullSize, setVideoFullSize] = useState(false);
  const [sectionScroll, setSectionScroll] = useState(true);

  const [mySwiper, setMySwiper] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState([0, 1, 2]);

  const handleToggleIconTheme = () => {
    setVideoFullSize((state) => !state);

    iconContextToggler();
  };

  const renderFullScreenButton = !hasZoomButton.current && (
    <Image
      src={!videoFullSize && !iconTheme ? zoomIconButton : closeIconButtonLight}
      alt="zoom icon button"
      className="z-50 cursor-pointer fixed
bottom-[56px] left-1/2 -translate-x-1/2"
      onClick={handleToggleIconTheme}
    />
  );

  useEffect(() => {
    if (mySwiper) {
      swiperElRef.current.addEventListener("slidechange", (e) => {
        const currentIndex = e.detail[0].activeIndex;
        setActiveIndex(currentIndex);
        // ... set controlled components
        setCurrentPlayer([currentIndex - 1, currentIndex, currentIndex + 1]);
      });
    } else {
      setMySwiper(true);
    }
  }, [mySwiper]);

  return (
    <section className={`${anton.className}`}>
      {mySwiper && (
        <>
          <swiper-container
            ref={swiperElRef}
            direction="vertical"
            active-index={10}
            allow-slide-prev={sectionScroll}
            allow-slide-next={sectionScroll}
            style={{ height: "100vh" }}
          >
            {contestant.map((i, idx) => {
              return (
                <swiper-slide key={idx}>
                  <VideoArticleItem
                    key={i.id}
                    details={i}
                    idx={idx}
                    subFont={antonio.className}
                    setSectionScroll={setSectionScroll}
                    sectionScroll={sectionScroll}
                    videoFullSize={videoFullSize}
                    hasZoomButton={hasZoomButton}
                    activeIndex={activeIndex}
                    currentPlayer={currentPlayer}
                  />
                </swiper-slide>
              );
            })}
          </swiper-container>
          {renderFullScreenButton}
        </>
      )}
      {!mySwiper && <VideoArticleLoader />}

      {/* Toggler Button */}
    </section>
  );
};

export default SectionArticleContainer;
