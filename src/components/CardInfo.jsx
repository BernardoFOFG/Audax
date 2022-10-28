import "../styles/main.css";

export function CardInfo(props) {
  return (
    <div className="flex justify-center lg:gap-12 items-center 2xl:w-[1440px] md:w-auto lg:even:flex-row-reverse  flex-row xsm:flex-col md:flex-row">
      <div className="flex flex-col gap-[15px] items-center lg:w-[550px] xsm:w-auto">
        <h2 className="lg:w-[400px] xsm:w-auto xsm:text-lg xsm:text-3rg lg:text-2xl font-bold leading-tight text-text-primary">
          {props.title}
        </h2>
        <p className="lg:w-[400px] xsm:w-auto h-[108px] lg:text-md xsm:text-xsm text-text-secondary xsm:text-center md:text-start">
          {props.description}
        </p>
      </div>

      <div>
        <img src={props.img} alt={props.alt} />
      </div>
    </div>
  );
}
