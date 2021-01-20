import React from "react";
import largeImg from "../moonman_relaxer.jpg";
import smallImg from "../astronot_gna_make_it.jpg";

export default function Home() {
  return (
    <main>
      {/* <img
        src={smallImg}
        srcSet={`${smallImg} 100w, ${largeImg} 1280w`}
        alt="astronaut"
        className="absolute object-cover w-full h-full"
      /> */}
      <picture>
        <source srcset={largeImg} media="(min-width: 1200px)" />
        {/* <source srcset="medium.jpg" media="(min-width: 800px)" /> */}
        <img
          src={smallImg}
          alt="astronaut"
          className="absolute object-cover w-full h-full"
        />
      </picture>
    </main>
  );
}
