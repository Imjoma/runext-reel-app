export const currentNameToggler = (videoFullSize, name, infoCard) => {
  return !videoFullSize ? (
    <p
      className={`${
        infoCard ? "scale-[200%]" : ""
      } text-[32px] pb-4 duration-300 ease-out origin-top z-[60] select-none`}
    >
      {name.toUpperCase()}
    </p>
  ) : (
    ""
  );
};

export const gradientFilter = (
  <div className="absolute bottom-0 w-full pointer-events-none opacity-40 h-1/2 bg-gradient-to-b from-transparent to-black"></div>
);

export const videoItemContentOnDefault = (subFont, playIconButton, Image) => {
  return (
    <>
      <p
        className={`${subFont} absolute top-6 left-1/2 -translate-x-1/2 text-lg text-white select-none`}
      >
        About
      </p>

      <Image
        src={playIconButton}
        alt="video play icon button"
        className="absolute top-4 left-4"
      />
    </>
  );
};
