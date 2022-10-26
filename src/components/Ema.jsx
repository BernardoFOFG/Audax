import "../styles/main.css";
import { CardEma } from "./CardEma";
import { navLinks } from "./infos";

import cardFicticio1 from "../assets/images/cardFicticio-1.svg";
import cardFicticio2 from "../assets/images/cardFicticio-2.svg";

export function Ema() {
  return (
    <section className="flex flex-col justify-center items-center text-text-primary" id="Conheca">
      <div className="text-center leading-normal">
        <h2 className="font-bold text-2xl mb-[22px]">Conheça</h2>
        <p className="w-[1021px] font-normal text-rg ">
          Ema, também conhecida como nandu, nhandu, guaripé e xuri, é uma ave da
          família Rheidae nativa da América do Sul. Apesar de possuir grandes
          asas, é uma ave não voadora.
        </p>
      </div>
      <div className="flex flex-row gap-8 mt-10">
        <CardEma
          title="99% dos dados adicionados sem fonte não possuem veracidade."
          description="Inclusive esse texto aqui, que não possui fundo científico algum e é 100% errado. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          src={cardFicticio1}
          alt="imagemFicticia"
        />
        <CardEma
          title="Aumento de 24% em vendas"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          src={cardFicticio2}
          alt="imagemFicticia"
        />
      </div>
    </section>
  );
}
