import "../styles/main.css";

import { Button } from "../components/Button";
import heroImage from "../assets/images/heroImage.png";
export function Hero() {
  return (
    <section className="flex justify-between gap-[17px] items-center lg:mt-[18px] xsm:mt-16 xsm:flex-col-reverse md:flex-row ">
      <div className="flex flex-col md:w-[550px] xsm:w-auto xsm:items-center md:items-start">
        <h2 className="text-text-primary xsm:text-lg xsm:text-3rg xsm:text-center sm:text-start lg:text-2xl font-bold leading-tight mb-[15px]">
          Esse texto é uma headline super legal
        </h2>
        <p className="text-text-secondary lg:w-[537px] h-[108px] md:[437px] leading-normal font-normal xsm:text-center md:text-start lg:text-md xsm:text-xsm md:mb-[22px]">
          E esse texto aqui acompanha o título. Já que eu preciso falar muito,
          vou falar sobre Emas. Considerada a maior ave do continente americano,
          a ema pode chegar a medir 1,70 m de altura! Impressionante, não é?
        </p>
        <Button content="Isso aqui é um CTA" />
      </div>
      <div>
        <img src={heroImage} className="mr-4" alt="Notebook Image" />
      </div>
    </section>
  );
}
