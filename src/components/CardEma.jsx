import "../styles/main.css";

export function CardEma(props) {
  return (
    <div className="flex flex-col xsm:pt-[35px] md:pt-[50px] xsm:w-[363px] md:h-[595px] xsm:h-[450px] bg-white text-primary rounded-lg px-8 text-center">
      <h3 className="font-bold lg:text-md leading-7 mb-4">{props.title}</h3>
      <p className="font-normal lg:text-xsm leading-6">{props.description}</p>
      <img
        className="h-[377px] lg:w-[277px] flex items-center"
        src={props.src}
        alt={props.alt}
      />
    </div>
  );
}
