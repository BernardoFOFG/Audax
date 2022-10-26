import "../styles/main.css";

import { Button } from "../components/Button";
import heroImage from '../assets/images/heroImage.svg'
export function Hero() {
  return (
    <section className="flex justify-between gap-[17px] items-center mt-[18px]">
      <div className="flex flex-col w-[550px] h-[315px] ">
        <h2 className="text-text-primary text-2xl font-bold leading-tight mb-[15px]">Esse texto é uma headline super legal</h2>
        <p className="text-text-secondary w-[537px] h-[108px] leading-normal font-normal text-md mb-[22px]">
          E esse texto aqui acompanha o título. Já que eu preciso falar muito,
          vou falar sobre Emas. Considerada a maior ave do continente americano,
          a ema pode chegar a medir 1,70 m de altura! Impressionante, não é?
        </p>
        <Button content="Isso aqui é um CTA"/>
      </div>
      <div>
        <img src={heroImage} className="mr-4" alt="Amizade" />
      </div>
    </section>
  );
}
