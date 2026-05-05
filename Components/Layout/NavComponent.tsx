import Button from "@/Components/UI/Button";
import {
  Apple,
  BriefcaseBusiness,
  Contact,
  Folder,
  Form,
  GraduationCap,
  Hand,
  Home,
} from "lucide-react";
import React from "react";

const NavComponent = () => {
  const sizeIcon = 18;

  const homeIcon = <Home size={sizeIcon} color="#fff" />;
  const briefcase = <BriefcaseBusiness size={sizeIcon} color="#fff" />;
  const folderIcon = <Folder size={sizeIcon} color="#fff" />;
  const graduationCapIcon = <GraduationCap size={sizeIcon} color="#fff" />;
  const formIcon = <Contact size={sizeIcon} color="#fff" />;

  const style ="w-min h-fit p-2 shadow-lg shadow-sky-400/50 rounded-3xl flex gap-5 backdrop-blur-sm bg-white/10";
  const movilStyle = "flex-row justify-center";
  const desktopStyle =
    "md:items-center md:flex-col";

  return (
    <div className="fixed w-full md:w-min h-fit md:h-svh flex justify-center items-center z-50 bottom-5 md:bottom-0 md:left-5">
      <nav className={`${style} ${movilStyle} ${desktopStyle} `}>
        <Button icon={homeIcon} type={false} link="#AboutMe" />
        <Button icon={briefcase} type={false} link="#Experience" />
        <Button icon={folderIcon} type={false} link="#MyBriefcase" />
        <Button icon={graduationCapIcon} type={false} link="#Education" />
        <Button icon={formIcon} type={false} link="#GetInTouch" />
      </nav>
    </div>
  );
};

export default NavComponent;
