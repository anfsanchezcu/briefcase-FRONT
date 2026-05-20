"use client";
import React, { useState } from "react";

const Dashboard = () => {
  const buttonStyles =
    "hover:scale-101 cursor-default hover:bg-sky-400/30  px-3 py-1 bg-sky-500/20 text-sky-200 rounded-full text-xl border border-sky-400/30";

  const [activeScreen, setactiveScreen] = useState("option");
  const [Option, setOption] = useState("");
  const [Operation, setOperation] = useState("");

  const ScreenOptions = () => {
    return (
      <>
        <h1 className="font-semibold  text-xl mb-5">DASHBOARD | OPTIONS</h1>
        <button
          className={`${buttonStyles}`}
          onClick={() => setactiveScreen("operation")}
        >
          Experiences
        </button>
        <button
          className={`${buttonStyles}`}
          onClick={() => setactiveScreen("operation")}
        >
          Projects
        </button>
      </>
    );
  };

  const ScreenOperations = () => {
    return (
      <>
        <h1 className="font-semibold  text-xl mb-5">DASHBOARD | OPERATIONS</h1>
        <button className={`${buttonStyles}`}>Crear Nuevo</button>
        <button className={`${buttonStyles}`}>Editar</button>
        <button className={`${buttonStyles}`}>Eliminar</button>
        
        <button
          className={` ${buttonStyles} bg-amber-50 m-5 `}
          onClick={() => setactiveScreen("option")}
        >
          Atras
        </button>
      </>
    );
  };
  const screens = {
    option: <ScreenOptions />,
    operation: <ScreenOperations />,
  };

  return (
    <section className="h-screen flex items-center justify-center  w-full bg-purple-950">
      <div className="w-11/12 h-11/12 rounded-2xl border-[1px] backdrop-blur-sm border-sky-400/30 gap-2 flex flex-col justify-center items-center">
        {activeScreen != "" && screens[activeScreen]}
      </div>
    </section>
  );
};

export default Dashboard;
