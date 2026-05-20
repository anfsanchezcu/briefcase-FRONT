import React from "react";
type Props = {
  role: string;
  company: string;
  date: string;
  description: string;
  keywords: string[];
};

const CardExperience = ({
  role,
  company,
  date,
  description,
  keywords,
}: Props) => {

  const RoleCompany = () => {
    return (
      <>
      <div className="flex flex-col md:flex-row gap-2">
        <h3 className="text-xl font-bold text-white">{role}  </h3>
        <p className="text-sky-300 font-medium content-center">{company} </p>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-sky-400 to-transparent md:flex-1"></div>
      </>
    );
  };

  const timeline = "border-l-2 border-sky-400/50 relative before:absolute before:-left-3 before:top-1 before:w-3 before:h-3 before:bg-sky-400/10 before:border-2 before:border-sky-400/50 before:rounded-full before:top-1/2 before:-translate-y-1/2";

  return (
    <article className={` w-full p-5 rounded-2xl  hover:shadow-sm hover:shadow-sky-400/50 transition-all duration-300 text-sm`}>
      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
        <RoleCompany />
      </div>
      
      <span className="text-sky-400 ">{date}</span>
      
      <p className="text-gray-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2">
        {keywords.map((keyword, index) => (
          <span
            key={index}
            className="hover:scale-101 cursor-default hover:bg-sky-400/30  px-3 py-1 bg-sky-500/20 text-sky-200 rounded-full text-xs border border-sky-400/30"
          >
            {keyword}
          </span>
        ))}
      </div>
    </article>
  );
};

export default CardExperience;
