import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { Ema } from "./components/Ema.jsx";
import { Info } from "./components/Info.jsx";
import { Clip } from "./components/Clip.jsx";
import "./styles/main.css";

export function App() {
  return (
    <div className="bg-primary w-full font-inter border-b-4 border">
      <div className="flex flex-col items-center">
        <div className="w-[1440px]  mx-auto mt-16 border border-1">
          <Header />
          <Hero />
          <Ema />
          <Info />
          <Clip />
        </div>
      </div>
    </div>
  );
}
