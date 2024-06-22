'use client';
import React from "react";
import ProjectCard from "./project-card";
import Particle from "../../Particle";

function Projects() {
  return (
    <div className="relative bg-[#0f0c18] pt-20 pb-6" style={{ backgroundImage: 'var(--section-background-color)' }}>
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>
    <Particle />
    <div className="container mx-auto py-10">
      <h1 className="project-heading text-4xl font-bold text-center text-white mb-6">
        My Recent <strong className="text-purple-500">Projects</strong>
      </h1>
      <p className="text-white text-center mb-4">
        Here are a few projects I've worked on recently.
      </p>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 pt-10 pb-10 pl-10 pr-10 h-auto">
          <ProjectCard
            imgPath="/chatify.png"
            alt="Chatify Image"
            isBlog={false}
            title="Auto Orchestration"
            description="This project aims to automate the deployment, scaling, and operations of application containers using Docker and Kubernetes. The focus is to create a robust DevOps lifecycle that accommodates the company's need for scaling due to the increasing demand for their product. Key components include implementing a Git workflow, automating builds with CodeBuild, containerizing the application, and deploying it on a Kubernetes cluster using Jenkins and Terraform."
            ghLink="https://github.com/Shradha3001/Auto-Orchestration"
            demoLink="#/"
          />
        </div>
        <div className="w-full md:w-1/3 p-2 pt-10 pb-10 pl-10 pr-10 h-auto">
          <ProjectCard
            imgPath="/chatify.png"
            alt="Chatify Image"
            isBlog={false}
            title="Project Getway Using AWS"
            description="Developed a comprehensive Employee Profile Management System for Company, facilitating new employees to input their personal information and upload photos, while allowing existing employees to retrieve their details. This project enhances Company’s HR processes by simplifying employee data management and ensuring quick access to accurate information, thus improving overall operational efficiency."
            ghLink="https://github.com/Shradha3001/Profile-Gateway-using-AWS"
            demoLink="https://chatify-49.web.app/"
          />
        </div>
        <div className="w-full md:w-1/3 p-2 pt-10 pb-10 pl-10 pr-10 h-auto">
          <ProjectCard
            imgPath="/chatify.png"
            alt="Chatify Image"
            isBlog={false}
            title="Chatify"
            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
            ghLink="https://github.com/Shradha3001/Auto-Orchestration"
            demoLink="https://chatify-49.web.app/"
          />
        </div>
     

          
          
        </div>
      </div>
    </div>
  );
}

export default Projects;
