import { Header } from "./layout/Header.jsx";
import { Hero } from "./layout/Hero.jsx";
import { Conheca } from "./layout/Conheca.jsx";
import { Funcionalidades } from "./layout/Funcionalidades.jsx";
import { Contato } from "./layout/Contato.jsx";
import { Footer } from "./components/Footer.jsx";

import "./styles/main.css";

export function App() {
  return (
    <>
      <div className="bg-primary font-inter overflow-hidden">
        <div className="flex flex-col items-center">
          <div className="w-[1440px] mx-auto mt-16">
            <Header />
            <Hero />
            <Conheca />
            <Funcionalidades />
          </div>
          <div className="w-screen mx-0 mt-0 bg-bgClient bg-cover">
            <Contato />
          </div>
        </div>
      </div>
      <hr className="w-[1180px] mx-auto border-b-1 border-spacing-1 border-secondary" />
      <Footer />
    </>
  );
}
