import React from "react";
import Image from 'next/image';
import CardProject from "@/Components/UI/CardProject";

export const MyBriefcase = () => {
  return (
    <div className="flex flex-row justify-center align-middle self-center h-full items-center gap-3 flex-wrap">
      <CardProject 
        role="Software Engineer"
        company="Tech Corp"
        date="Jan 2020 - Present"
        description="Developed and maintained web applications using React and Node.js, collaborating with cross-functional teams to deliver high-quality software solutions."
        keywords={['React', 'Node.js', 'JavaScript']} 
        image={`https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-photography-no-photo-vector-png-image_40966498.jpg`}
      />

      <CardProject 
        role="Software Engineer"
        company="Tech Corp"
        date="Jan 2020 - Present"
        description="Developed and maintained web applications using React and Node.js, collaborating with cross-functional teams to deliver high-quality software solutions."
        keywords={['React', 'Node.js', 'JavaScript']} 
        image={`https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-photography-no-photo-vector-png-image_40966498.jpg`}
      />
    </div>
  );
};
