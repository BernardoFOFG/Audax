import "../styles/main.css";

import { navLinks } from "../components/infos.js";
import logoBranca from "../../public/logoBranca.svg";

export function Header() {
  return (
    <header className="w-full md:flex-row xsm:flex-col flex items-center md:justify-between xsm:justify-center text-text-primary lg:py-4 md:py-4 md:px-0 xsm:gap-4">
      <img src={logoBranca} alt="Logo DATANOW"/>
      <ul className="flex justify-center md:gap-[31px] xsm:gap-[16px] list-none">
        {navLinks.map((nav) => (
          <li key={nav.id} className="font-medium text-sm tracking-wide">
            <a href={`#${nav.id}`}>{nav.titulo}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}
