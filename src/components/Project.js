import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      sourceCode,
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
        <h2 className="text-lg text-indigo-700 flex justify-center mb-12">
          Welcome to my Project Page! I will be adding more projects, and
          there's many more already available on{" "}
          <a
            className="text-red-500 font-bold underline ml-1"
            href="https://github.com/michaelscoggins"
          >
            my GitHub
          </a>
          .
        </h2>
        <section className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-8 lg:p-16">
                <h3 className="text-gray-800 sm:text-xl md:text-xl lg:text-3xl font-bold mb-2 hover:text-red-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Company</strong>:{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-base lg:text-lg text-gray-900 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-lg lg:text-xl"
                  >
                    View The Project{" "}
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                  </a>
                  <br />
                  <br />
                  <a
                    href={project.sourceCode}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-indigo-700 font-bold hover:underline hover:text-indigo-500 text-lg lg:text-xl cursor-pointer"
                  >
                    View The Code{" "}
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
