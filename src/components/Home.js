import React from "react";
import landscapeImg from "../moonman_relaxer.jpg";
import portraitImg from "../virtual_dom_cropped.jpg";

export default function Home() {
  return (
    <main>
      <picture>
        <source srcset={landscapeImg} media="(min-width: 500px)" />
        <img
          src={portraitImg}
          alt="shoot for the stars chill on the moon"
          className="absolute object-cover w-full h-full"
        />
      </picture>
    </main>
  );
}
