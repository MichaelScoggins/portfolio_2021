import React from "react";
import landscapeImg from "../moonman_relaxer.jpg";
// import { slide as Menu } from "react-burger-menu";
// import portraitImg from "../virtual_dom_cropped.jpg";

export default function Home() {
  return (
    <main>
      <picture>
        {/* <source srcset={landscapeImg} media="(min-width: 500px)" /> */}
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
      </section>
    </main>
  );
}
