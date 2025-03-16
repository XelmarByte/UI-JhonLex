import React, { useState } from "react";
import { BtnViewProfile } from "./BtnViewProfile";
import BtnSignOut from "./BtnSignOut";
import BtnConfig from "./BtnConfig";
import BtnSupport from "./BtnSupport";
import BtnDocument from "./BtnDocument";
import ThemeModeToggle from "../ThemeModeToggle";


const BtnProfile: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Opciones a mostrar en formato de grid
  const options = [
    {
      name: "Nexus[GD]",
      image:
        "https://yt3.googleusercontent.com/yrKx3G87CrFSMQOD7j0F7ovyqqxTfAU9-gKt9euaFQ7g1U9UNz7ChyIEIPnbjrWItsfjjC9QWw=s900-c-k-c0x00ffffff-no-rj",
      description: "Jugador Casual",
    },
  ];

  return (
    <div className="relative inline-block">
      {/* Botón con la foto de perfil */}
      <div
        className="flex items-center focus:outline-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <img
          src="https://yt3.googleusercontent.com/yrKx3G87CrFSMQOD7j0F7ovyqqxTfAU9-gKt9euaFQ7g1U9UNz7ChyIEIPnbjrWItsfjjC9QWw=s900-c-k-c0x00ffffff-no-rj"
          alt="Foto de perfil"
          className="h-10.5 w-10.5 rounded-lg "
        />
      </div>

      {/* Contenedor desplegable en formato grid */}
      {isExpanded && (
        <div className="absolute right-0 mt-2 w-64 bg-secondary border-gray-200 rounded-md shadow-md p-4 gap-4 text-foreground flex-col">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex flex-col bg-secondary p-2 rounded-md cursor-pointer w-full gap-4"
            >
              <div className="flex">
                <img
                  src={option.image}
                  className="w-15 h-auto rounded-full"
                ></img>
                <div className="flex flex-col gap-1 text-left pl-2  ">
                  <span>
                    <b>{option.name}</b>
                  </span>
                  <span>{option.description}</span>
                </div>
              </div>
              <BtnViewProfile />
              <div className="text-foreground flex flex-col gap-3">
                <BtnConfig/>
                <BtnSupport/>
                <BtnDocument/>
              </div>
              <hr className="" />
              <BtnSignOut />
              <hr className="" />
              <div className="flex flex-row items-center justify-between">
                <p>Mode Toggle 👉</p>
                <ThemeModeToggle/>
                </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BtnProfile;
