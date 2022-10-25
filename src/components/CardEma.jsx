import "../styles/main.css";

export function CardEma(props) {
  return (
    <div className="flex flex-col w-[463px] bg-white text-primary rounded-lg px-8 text-center">
      <h3 className="font-bold text-md mt-[50px] leading-7 mb-4">{props.title}</h3>
      <p className="font-normal text-xsm leading-6">{props.description}</p>
      <img
        className="h-[377px] flex items-center"
        src={props.src}
        alt={props.alt}
      />
    </div>
  );
}
