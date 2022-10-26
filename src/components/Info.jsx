import "../styles/main.css";

import { CardInfo } from "./CardInfo.jsx";

import System1 from "../assets/images/system1.png";
import System2 from "../assets/images/system2.svg";
import System3 from "../assets/images/system3.svg";
import System4 from "../assets/images/system4.svg";

export function Info() {
  return (
    <section className="flex flex-col mt-40" id="Funcionalidades">
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
