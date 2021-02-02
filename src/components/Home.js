import React from "react";
import landscapeImg from "../moonman_relaxer.jpg";
// import logo from "../webdev.png";

export default function Home() {
  return (
    <main>
      <picture>
        <img
          src={landscapeImg}
          alt="shoot for the stars chill on the moon"
          className="absolute object-cover w-full h-full"
        />
      </picture>
      <section className="relative flex justify-center pt-5 lg:pt-35 px-8">
        <h1 className="text-6xl text-blue-400 font-bold cursive leading-none lg:leading-snug">
          Welcome! I'm{" "}
          <span className="leading-snug rounded bg-green-300 text-white bg-opacity-80">
            Michael!
          </span>
        </h1>
        {/* <img
          id="home-main-logo"
          src={logo}
          alt="logo"
          className="sm:hidden md:block"
        /> */}
      </section>
    </main>
  );
}
