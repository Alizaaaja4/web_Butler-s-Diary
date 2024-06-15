import video1 from "../assets/img/video/video1.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-4">
      <h1 className="h1 text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide">
        Welcome to <br />
        <span className="bg-gradient-to-r from-cs-light-red to-cs-white-smooth text-transparent bg-clip-text">
          Black Butler Tales
        </span>
      </h1>
      <p className="mt-10 text-md text-center text-neutral-500 max-w-4xl ">
        Immerse yourself in the captivating tales of the anime{" "}
        <span className="hover:text-cs-dark-purple">Kuroshitsuji (Black Butler)</span>.
        Delve into the intricate stories of{" "}
        <span className="hover:text-cs-dark-purple">loyalty, mystery, and supernatural</span>{" "}
        intrigue that unfold within the corridors of the Phantomhive estate. Explore the
        depths of characters like Ciel Phantomhive and his enigmatic butler, Sebastian
        Michaelis, as they navigate a{" "}
        <span className="hover:text-cs-dark-purple">world shrouded in darkness and secrets.</span>
      </p>

      <div className="flex mt-10 justify-center">
        {/* <video autoPlay loop  className="rounded-lg w-1/2 border border-cs-dark-purple shadow-cs-light-red mx-2 my-4">
          <source src={video1}  type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <video autoPlay loop  className="rounded-lg w-full border border-cs-dark-purple shadow-cs-dark-purple mx-2 my-4">
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
