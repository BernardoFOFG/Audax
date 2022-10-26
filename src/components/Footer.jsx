import "../styles/main.css";

import { navLinks } from "./infos";

import logoAzul from "../assets/images/logoAzul.svg";
export function Footer() {
  return (
    <footer className="flex justify-between w-[1128px] mx-auto mt-[61px] mb-20">
      <div className="">
        <img src={logoAzul} alt="Logo azul" />
      </div>

      <div className="">
        <ul className="flex gap-[31px] list-none">
          {navLinks.map((nav) => (
            <li key={nav.id} className="font-medium text-xsm leading-relaxed tracking-wide text-text-secondary">
              <a href={`#${nav.id}`}>{nav.titulo}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
