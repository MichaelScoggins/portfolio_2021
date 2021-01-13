import React from "react";
import image from "../moonman_relaxer.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Lost In Space"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1
          style={{ color: "yellow" }}
          className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name"
        >
          Aloha. I'm Michael!
        </h1>
      </section>
    </main>
  );
}
