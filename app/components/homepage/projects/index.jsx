'use client';
import React from "react";
import ProjectCard from "./project-card";
import Particle from "../../Particle";

function Projects() {
  return (
    <div className="relative bg-[#0f0c18] pt-40 pb-10" style={{ backgroundImage: 'var(--section-background-color)' }}>
    <Particle />
    <div className="container mx-auto py-10">
      <h1 className="project-heading text-4xl font-bold text-center text-white mb-6">
        My Recent <strong className="text-purple-500">Works</strong>
      </h1>
      <p className="text-white text-center mb-8">
        Here are a few projects I've worked on recently.
      </p>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 p-2 pt-20 pb-20 pl-10 pr-10 h-auto">
          <ProjectCard
            imgPath="/chatify.png"
            alt="Chatify Image"
            isBlog={false}
            title="Chatify"
            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
            ghLink="https://github.com/soumyajit4419/Chatify"
            demoLink="https://chatify-49.web.app/"
          />
        </div>
        <div className="w-full md:w-1/3 p-2 pt-20 pb-20 pl-10 pr-10 h-auto">
          <ProjectCard
            imgPath="/chatify.png"
            alt="Chatify Image"
            isBlog={false}
            title="Chatify"
            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
            ghLink="https://github.com/soumyajit4419/Chatify"
            demoLink="https://chatify-49.web.app/"
          />
        </div>
        <div className="w-full md:w-1/3 p-2 pt-20 pb-20 pl-10 pr-10 h-auto">
          <ProjectCard
            imgPath="/chatify.png"
            alt="Chatify Image"
            isBlog={false}
            title="Chatify"
            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
            ghLink="https://github.com/soumyajit4419/Chatify"
            demoLink="https://chatify-49.web.app/"
          />
        </div>
     

          
          
        </div>
      </div>
    </div>
  );
}

export default Projects;
