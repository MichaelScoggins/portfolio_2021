import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/src/styles/prism";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        {/* <code class={props.node.language}> */}
        <SyntaxHighlighter language={props.node.language} style={coldarkDark}>
          {props.node.code}
        </SyntaxHighlighter>
        {/* </code> */}
      </pre>
    ),
  },
};

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
      title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      "name": author->name,
      "authorImage": author->image
    }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost)
    return <div style={{ color: "indigo", fontWeight: 400 }}>Loading...</div>;

  return (
    <main className="bg-yellow-200 min-h-screen p-2 md:p-4 lg:p-12">
      <article className="container shadow-lg mx-auto bg-green-300 rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-gray-300 bg-opacity-80 rounded sm:p-2 md:p-4 lg:p-12">
              <h1 className="cursive text-3xl lg:text-5xl mb-4">
                {singlePost.title}
              </h1>
              <div className="flex justify-center text-gray-800">
                <img
                  src={urlFor(singlePost.authorImage).url()}
                  alt={singlePost.name}
                  className="w-10 h-10 rounded-full"
                />
                <p className="cursive flex items-center pl-2 text-2xl">
                  {singlePost.name}
                </p>
              </div>
            </div>
          </div>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className="w-full object-cover rounded-t bg-opacity-20"
            style={{ height: "300px" }}
          />
        </header>
        <div className="px-6 md:px-12 lg:px-48 py-12 lg:py-20 prose sm:prose-sm md:prose-lg sm:m-0 lg:prose-xl max-w-full text-indigo-700">
          <BlockContent
            blocks={singlePost.body}
            serializers={serializers}
            projectId="lbo3izt8"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
}
