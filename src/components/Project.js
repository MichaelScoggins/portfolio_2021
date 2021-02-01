import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import groq from "groq";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        groq`
    *[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      sourceCode,
      sampleImage,
      tags
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-green-300 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive mb-2">
          My Projects
        </h1>
        <div className="flex justify-center">
          <h2 className="text-lg text-indigo-700 justify-center mb-12">
            Welcome to my Project Page! I will be adding more projects, and
            there's many more already available on{" "}
            <a
              className="text-red-600 hover:text-red-500 font-bold hover:underline"
              href="https://github.com/michaelscoggins"
            >
              my GitHub
            </a>
            .
          </h2>
        </div>
        <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <div id="article-container" className="w-full">
                <article
                  id="project"
                  className="rounded-lg shadow-xl p-8 lg:p-16 bg-cover"
                  style={{
                    backgroundImage: `url(${
                      project.sampleImage && urlFor(project.sampleImage)
                    })`,
                  }}
                >
                  <div id="project-text-container">
                    <h3 className="text-yellow-300 text-xl md:text-2xl lg:text-3xl font-bold mb-2 hover:text-blue-500">
                      <a
                        href={project.link}
                        alt={project.title}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.title}
                      </a>
                    </h3>
                    <span>
                      <strong className="text-white sm:text-xs project-text">
                        <span className="text-green-300">Tech Stack: </span>
                        {project.tags.join(", ")}
                      </strong>
                    </span>
                    <div
                      id="project-details-container"
                      className="text-gray-200 text-xs space-x-4"
                    >
                      <span className="project-text">
                        <strong className="font-bold">Finished on</strong>:{" "}
                        {new Date(project.date).toLocaleDateString()}
                      </span>
                      <p className="project-text my-6 text-base lg:text-lg text-gray-200 leading-relaxed">
                        {project.description}
                      </p>
                      <a
                        href={project.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-red-500 font-bold hover:underline hover:text-red-400 text-base md:text-lg lg:text-xl z-50"
                      >
                        View The Project{" "}
                        <span role="img" aria-label="right pointer">
                          👉
                        </span>
                      </a>
                      <br />
                      <a
                        href={project.sourceCode}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-green-300 font-bold hover:underline hover:text-green-200 text-base md:text-lg lg:text-xl cursor-pointer"
                      >
                        View The Code{" "}
                        <span role="img" aria-label="right pointer">
                          👉
                        </span>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            ))}
        </section>
      </section>
    </main>
  );
}
