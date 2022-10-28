import "../styles/main.css";

import { CardInfo } from "./CardInfo.jsx";

import System1 from "../../public/system1.png";
import System2 from "../../public/system2.svg";
import System3 from "../../public/system3.png";
import System4 from "../../public/system4.png";

export function Info() {
  return (
    <section className="flex flex-col lg:mt-40 xsm:mt-20 lg:gap-0 xsm:gap-8" id="Funcionalidades">
      <CardInfo
        title="Lorem ipsum
    dolor sit amen"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."
        img={System1}
        alt="System 1"
      />
      <CardInfo
        title="Lorem ipsum
    dolor sit amen"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."
        img={System2}
        alt="System 2"
      />
      <CardInfo
        title="Lorem ipsum
    dolor sit amen"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."
        img={System3}
        alt="System 3"
      />
      <CardInfo
        title="Lorem ipsum
    dolor sit amen"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."
        img={System4}
        alt="System 4"
      />
    </section>
  );
}
