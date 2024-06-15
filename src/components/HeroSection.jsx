// import { useState } from "react";
import video1 from "../assets/img/video/video1.mp4";

const HeroSection = () => {
  // const [playing, setPlaying] = useState(false);

  // const togglePlay = () => {
  //   setPlaying(!playing);
  //   const video = document.getElementById("heroVideo");

  //   if (playing) {
  //     video.pause();
  //   } else {
  //     video.play();
  //   }
  // };

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-4">
      <h1 className="h1 text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide">
        Welcome to <br />
        <span className="bg-gradient-to-r from-cs-light-red to-cs-white-smooth text-transparent bg-clip-text">
          Black Butler Tales
        </span>
      </h1>
      <p className="mt-10 text-md text-center text-neutral-500 max-w-4xl">
        Immerse yourself in the captivating tales of the anime{" "}
        <span className="text-cs-dark-purple hover:text-cs-light-red">Kuroshitsuji (Black Butler)</span>.
        Delve into the intricate stories of{" "}
        <span className="text-cs-dark-purple hover:text-cs-light-red">loyalty, mystery, and supernatural</span>{" "}
        intrigue that unfold within the corridors of the Phantomhive estate. Explore the
        depths of characters like Ciel Phantomhive and his enigmatic butler, Sebastian
        Michaelis, as they navigate a{" "}
        <span className="text-cs-dark-purple hover:text-cs-light-red">world shrouded in darkness and secrets.</span>
      </p>

      <div className="flex mt-10 justify-center">
        <video
          id="heroVideo"
          className="rounded-lg w-full border border-cs-dark-purple shadow-cs-dark-purple mx-2 my-4"
          controls
          preload="metadata"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <button onClick={togglePlay} className="absolute top-100% left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          {playing ? "Pause" : "Play"}
        </button> */}
      </div>
    </div>
  );
};

export default HeroSection;
