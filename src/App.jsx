import { Header } from "./layout/Header.jsx";
import { Hero } from "./layout/Hero.jsx";
import { Conheca } from "./layout/Conheca.jsx";
import { Funcionalidades } from "./layout/Funcionalidades.jsx";
import { Contato } from "./layout/Contato.jsx";
import { Footer } from "./layout/Footer.jsx";


import "./styles/main.css";

export function App() {
  return (
    <>
      <div className="bg-primary font-inter overflow-x-hidden">
        <div
          className="flex flex-col items-center overflow-x-hidden"
          id="Inicio"
        >
          <div className="2xl:w-[1440px] xl:w-[1024px] lg:w-[924px] md:w-[640px] sm:w-[575px] xsm:w-[375px] 2xl:mt-16 mx-auto mt-8">
            <Header />
            <Hero />
            <Conheca />
            <Funcionalidades />
          </div>
          <div className="w-screen mx-0 mt-0 bg-[url('../public/bgClient.png')] bg-cover">
            <Contato />
          </div>
        </div>
      </div>
      <hr className="xl:w-[1180px] lg:w-[768px] mx-auto border-b-1 border-spacing-1 border-secondary" />
      <Footer />
    </>
  );
}
