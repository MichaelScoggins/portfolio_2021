import React from "react";
import largeImg from "../moonman_relaxer.jpg";
import smallImg from "../astronot_gna_make_it.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={smallImg}
        srcSet={`${smallImg} 300w, ${largeImg} 1000w`}
        alt="astronaut"
        className="absolute object-cover w-full h-full"
      />
    </main>
  );
}
