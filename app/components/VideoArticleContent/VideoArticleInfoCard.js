const VideoArticleInfoCard = ({
  details,
  font,
  infoCard,
  videoFullSize,
  handleOpenInfoCard,
}) => {
  const { fullName, age, mbti, nationality } = details;

  const info = [
    { Name: fullName },
    { Age: age },
    { MBTI: mbti },
    { Nationality: nationality },
  ];

  const isFullSize = !videoFullSize ? "z-50" : "";

  const isInfoCardMobile = !infoCard
    ? "-translate-x-full translate-y-[50px] sm:translate-x-0 sm:translate-y-0"
    : "translate-x-0 translate-y-0";

  const isInfoCardPC = infoCard ? "info-card-show" : "info-card-hide";

  return (
    <div
      className={`${isInfoCardMobile} ${isInfoCardPC} ${isFullSize} absolute flex items-start justify-center flex-col space-y-8 duration-300 ease-out`}
    >
      <div
        className={`${font} flex flex-col items-start px-8 py-12 space-y-5 bg-white rounded-lg w-[328px] box-shadow select-none`}
        onClick={() => handleOpenInfoCard()}
      >
        {info.map((i) => (
          <div className="flex flex-col space-y-1 " key={Object.keys(i)}>
            <p className="text-black opacity-40">{Object.keys(i)}:</p>
            <p>{Object.values(i)}</p>
          </div>
        ))}
      </div>
      <button
        className={`${font} ${
          !infoCard ? "opacity-0" : "opacity-100"
        } py-4 px-12 bg-[#313131] text-white rounded-full box-shadow`}
      >
        View More
      </button>
    </div>
  );
};

export default VideoArticleInfoCard;
