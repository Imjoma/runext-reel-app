const VideoArticleLoader = () => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center w-full h-screen`}
    >
      <p className={`h-8 bg-gray-200 animate-pulse w-24 mb-4`}></p>
      <div className="w-[270px] h-[480px] bg-gray-200 animate-pulse rounded-lg pointer-events-none"></div>
    </div>
  );
};

export default VideoArticleLoader;
