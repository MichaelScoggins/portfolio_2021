import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import buildings from "../buildings.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
      }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author)
    return (
      <div style={{ color: "indigo", fontWeight: 400, marginTop: 20 }}>
        Loading...
      </div>
    );

  return (
    <main className="">
      <img
        src={buildings}
        alt="Buildings"
        className="absolute w-full h-full object-cover"
      />
      <div
        id="about-container"
        className="p-4 lg:p-10 lg:pt-40 container mx-auto relative"
      >
        <section
          id="about-section"
          className="bg-green-800 rounded-lg shadow-2xl flex p-10"
        >
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt={author.name}
          />
          <div id="author-name" className="flex flex-col justify-center">
            <h1 className="cursive text-lg lg:text-5xl text-green-300 mb-4">
              Hey there, I'm{" "}
              <span className="text-green-100">{author.name}!</span>
            </h1>
            <div
              id="author-bio"
              className="text-base lg:text-lg prose lg:prose-xl text-white"
            >
              <BlockContent
                blocks={author.bio}
                projectId="lbo3izt8"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
