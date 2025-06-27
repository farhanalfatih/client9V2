import React from "react";
import video from "../assets/minecraft.mp4";

const VideoBanner = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video background */}
      <video
        src={video}
        className="absolute top-0 left-0 w-full h-full object-cover object-[20%_30%] z-0"
        autoPlay
        muted
        playsInline
        loop // optional: agar video terus berputar=7
      ></video>

      {/* Gradient Overlay */}
      <div className="absolute h-full w-full bg-gradient-to-b from-transparent to-white dark:to-black z-10"></div>

      {/* Glowing orbs */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] -translate-x-1/2 translate-y-1/2 rounded-full bg-white dark:bg-zinc-900 blur-3xl z-10"></div>
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-white dark:bg-zinc-900 blur-3xl z-10"></div>

      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-white p-4 text-center">
        <h1 className="text-5xl font-bold drop-shadow-lg text-black dark:text-white">Rank</h1>
        <p className="text-lg mt-4 max-w-xl drop-shadow-md text-black dark:text-white">
            pilihh paket Rank yg kamu inginkan, dan rasakan pengalaman bermain yang lebih seru!
        </p>
      </div>
    </div>
  );
};

export default VideoBanner;
