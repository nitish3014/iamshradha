import React, { useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Image from 'next/image';
import Link from "next/link";

function ProjectCard(props) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative hover:scale-[1.15] cursor-pointer max-w-sm  rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 hover:border-violet-500 transition-all duration-500">
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
          
            <Link className="flex items-center justify-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={props.ghLink}
            >
              <BsGithub className="font-black text-2xl" /> 
              
            </Link>
            
       
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
