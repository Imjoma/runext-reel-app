import Image from "next/image";

const VideoArticleStatus = ({ font, name, icon, videoFullSize }) => {
  const isVideoFullSize = !videoFullSize
    ? "translate-y-12 opacity-0"
    : "translate-y-0 opacity-100 delay-200 duration-300";
  return (
    <div
      className={`${font} ${isVideoFullSize}  w-full text-red-500 absolute bottom-[134px] left-0  px-6 flex flex-col space-y-6`}
    >
      <p className={`  text-[32px] `}>{name}</p>

      <div className="flex flex-row items-center space-x-2">
        <Image src={icon} alt="video play icon button" className="" />
        <p className={`  text-base  `}>0:20</p>
      </div>
      {/* Progress Bar */}
      <div className="relative flex w-full ">
        <div className="w-full h-1 bg-white rounded-full opacity-20"></div>
        <div className="absolute left-0 w-1/5 h-1 bg-white rounded-full opacity-60"></div>
      </div>
    </div>
  );
};

export default VideoArticleStatus;
