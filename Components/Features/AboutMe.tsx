import Button from "@/Components/UI/Button";
import React from "react";

const AboutMe = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center align-middle content-center text-center  p-3 gap-4 ">
      <div className="rounded-full w-36 aspect-square overflow-hidden shadow-lg shadow-sky-400/50">
        <img src="/assets/user.jpg" alt="Foto de perfil" />
      </div>
      <h1 className="font-black text-3xl">Hola, soy Andres Felipe!</h1>
      <h2 className="font-medium">Desarrollador Web</h2>
      <p className="text-gray-600 text-center w-11/12 md:w-4/5">
        Soy Ingeniero en Sistemas y Computación egresado de la Universidad Nacional de Colombia, donde adquirí una base sólida en programación, estructuras de datos, algoritmos y desarrollo de software.
      </p>
      <div className="flex flex-row gap-4">
        
        <Button title="Experiencia" link="#Experience" type={true} />
        <Button title="Descargar CV" link="/AndresFelipeSanchezCV.pdf" type={false} />
              
      </div>


    </div>
  );
};

export default AboutMe;
