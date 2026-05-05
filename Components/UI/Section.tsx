import { title } from "process";
import React from "react";
type Props = {
  title?: string;
  children: React.ReactNode;
};

const Section = ({ title, children }: Props) => {
  return (
    <section
      id={title}
      className="h-screen w-full flex md:items-center justify-center md:justify-end snap-center"
    >
      <div className="h-4/5 w-11/12 md:w-5/6 md:h-11/12 backdrop-blur-sm bg-white/10 rounded-2xl overflow-y-auto m-5">
        {children}
      </div>
    </section>
  );
};

export default Section;
