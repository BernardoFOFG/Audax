import "../styles/main.css";

import { navLinks } from "../components/infos.js";
import logoBranca from "../assets/images/logoBranca.svg";

export function Header() {
  return (
    <header className="w-full flex justify-between text-text-primary p-4">
      <img src={logoBranca} alt="Logo DATANOW" />
      <ul className="flex gap-[31px] list-none">
        {navLinks.map((nav) => (
          <li key={nav.id} className="font-medium text-sm tracking-wide">
            <a href={`#${nav.id}`}>{nav.titulo}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}
