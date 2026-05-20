import { title } from "process";
import React from "react";
type Props = {
  title?: string;
  screen ?: boolean;
  children: React.ReactNode;
};

const Section = ({ title,screen = true, children }: Props) => {
  const screenStyle = screen ? "h-full":"min-h-screen";
  return (
    <section
      id={title}
      className={`${screenStyle} w-full flex md:items-center justify-center md:justify-end snap-center`}
    >
      <div className=" self-center h-11/12 w-11/12 md:w-5/6 md:min-h-11/12 backdrop-blur-sm bg-white/10 rounded-2xl overflow-y-auto m-5">
        {children}
      </div>
    </section>
  );
};

export default Section;
