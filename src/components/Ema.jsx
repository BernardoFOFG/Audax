import "../styles/main.css";
import { CardEma } from "./CardEma";
import cardFicticio1 from "../assets/images/cardFicticio-1.svg";
import cardFicticio2 from "../assets/images/cardFicticio-2.svg";

export function Ema() {
  return (
    <section className="flex flex-col justify-center items-center text-text-primary xsm:pt-8" id="Conheca">
      <div className="text-center leading-normal">
        <h2 className="font-bold xsm:text-lg xsm:text-3rg lg:text-2xl md:mb-[22px] xsm:mb-[10px]">Conheça</h2>
        <p className="lg:w-[1021px] md:w-[768px] font-normal lg:text-rg md:text-md">
          Ema, também conhecida como nandu, nhandu, guaripé e xuri, é uma ave da
          família Rheidae nativa da América do Sul. Apesar de possuir grandes
          asas, é uma ave não voadora.
        </p>
      </div>
      <div className="flex lg:flex-row xsm:flex-col lg:gap-8 xsm:gap-4 xsm:w-auto mt-10">
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
