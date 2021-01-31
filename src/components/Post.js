import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import groq from "groq";

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        groq`*[_type == "post"] | order(publishedAt desc){
      title,
      slug,
      publishedAt,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-green-300 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive mb-2">
          Blog Posts
        </h1>
        <h2 className="text-lg text-indigo-700 flex justify-center mb-12">
          Byte-Sized Bits of JavaScript
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="flex h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="relative flex justify-start items-start">
                      <h4 className="text-base font-blog px-3 py-4 bg-gray-600 text-red-100 bg-opacity-75 rounded">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </h4>
                    </span>
                    <span className="absolute right-0 h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
