import React from "react";
import CardExperience from "./CardExperience";

type Props = {
  title: string;
  description: string;
  github: string;
  demo: string;
  image: string;
};

const CardProject = ({demo, github, description, title, image}: Props) => {
  const HeaderProject = () => {
    return (
      <div className="h-40 w-52 md:h-44 md:w-60 overflow-hidden">
        <img className="w-full h-full object-cover object-center" src={image} alt={`project-${title}`} />
      </div>
    );
  };

  const BodyProject = () => {
    return (
      <div className=" p-3">
        <h3 className="text-white font-semibold text-xs md:text-sm">{title}</h3>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-40 w-52 md:h-44 md:w-60 rounded-2xl gap-2 border-[1px] border-amber-50/10 overflow-hidden ">
      <HeaderProject />
      <BodyProject />
    </div>
  );
};

export default CardProject;
