import React, { useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Image from 'next/image';

function ProjectCard(props) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative max-w-sm rounded overflow-hidden shadow-lg bg-[#0d1224] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl  hover:border-2 hover:border-blue-500">
      <div className="overflow-hidden">
        {imgError ? (
          <div className="w-full h-72 flex items-center justify-center bg-gray-200">
            <span className="text-gray-500">{props.alt}</span>
          </div>
        ) : (
          <Image
            className="w-full"
            src={props.imgPath}
            alt={props.alt}
            width={500}
            height={500}
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-white text-base text-justify">
          {props.description}
        </p>
        <div className="mt-4">
          <a
            className="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-semibold text-sm rounded-md hover:bg-blue-700 transition-colors duration-300"
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="mr-2" /> {props.isBlog ? "Blog" : "GitHub"}
          </a>
          {!props.isBlog && props.demoLink && (
            <a
              className="inline-flex items-center px-4 py-2 ml-4 bg-blue-500 text-white font-semibold text-sm rounded-md hover:bg-blue-700 transition-colors duration-300"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgWebsite className="mr-2" /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
