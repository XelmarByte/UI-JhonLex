import React from "react";
import { ChevronDown } from "lucide-react";
import { BtnMyNetwork } from "./BtnMyNetwork";


const pagesOptions: { title: string; href: string; description: string }[] = [
  {
    title: "ALBUMS",
    href: "/",
    description: "",
  },
  {
    title: "CELEBRATION",
    href: "/",
    description: "",
  },
  {
    title: "MESSAGING",
    href: "/",
    description: "",
  },
  {
    title: "PROFILE",
    href: "/",
    description: "",
  },
  {
    title: "EVENTS",
    href: "/",
    description: "",
  },
  {
    title: "GROUPS",
    href: "/",
    description: "",
  },
  {
    title: "POST VIDEOS",
    href: "/",
    description: "",
  },
  {
    title: "BLOG",
    href: "/",
    description: "",
  },
];
const accountOptions: { title: string; href: string; description: string }[] = [
  {
    title: "CREATE PAGE",
    href: "/",
    description: "",
  },
  {
    title: "SETTINGS",
    href: "/",
    description: "",
  },
  {
    title: "NOTIFICATIONS",
    href: "/",
    description: "",
  },
  {
    title: "HELP CENTER",
    href: "/",
    description: "",
  },
  {
    title: "AUTENTICATION",
    href: "/",
    description: "",
  },
  {
    title: "OFFLINE",
    href: "/",
    description: "",
  },
  {
    title: "PRIVACY AND TERMS",
    href: "/",
    description: "",
  },
];

const Dropdown: React.FC = () => {
  return (
    <div className="flex flex-row gap-2">
      <div className="relative inline-block group">
        {/* Dropdown button: */}
        <button className="text-foreground group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-primary focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent ">
          Pages
          <ChevronDown
            className="relative top-[1px] ml-1 h-3 w-3 transition-transform duration-200 group-hover:rotate-180"
            aria-hidden="true"
          />
        </button>

        {/* Contenedor de la lista: */}
        <ul className="absolute hidden group-hover:block bg-muted rounded-md shadow-md w-max py-2 px-1 text-foreground ">
          {pagesOptions.map((component) => (
            <li
              key={component.title}
              title={component.title}
              className="flex flex-col p-2 hover:secondary gap-1 rounded "
            >
              <a href={component.href} className="flex justify-left text-sm hover:text-primary ">{component.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative inline-block group">
        {/* Dropdown button: */}
        <button className="text-foreground group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-primary focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent ">
          Account
          <ChevronDown
            className="relative top-[1px] ml-1 h-3 w-3 transition-transform duration-200 group-hover:rotate-180"
            aria-hidden="true"
          />
        </button>

        {/* Contenedor de la lista: */}
        <ul className="absolute hidden group-hover:block bg-muted rounded-md shadow-md w-max py-2 px-1 text-foreground ">
          {accountOptions.map((component) => (
            <li
              key={component.title}
              title={component.title}
              className="flex flex-col p-2 hover:secondary gap-1 rounded "
            >
              <a href={component.href} className="flex justify-left text-sm hover:text-primary ">{component.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <BtnMyNetwork />
    </div>
  );
};

export default Dropdown;
