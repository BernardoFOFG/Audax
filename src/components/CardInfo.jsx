import "../styles/main.css";

export function CardInfo(props) {
  return (
    <div className="flex flex-1 justify-center gap-12 items-center even:flex-row-reverse">
      <div className="flex flex-col gap-[15px] items-center w-[550px]">
        <h2 className="w-[400px] font-bold text-2xl leading-tight text-text-primary">
          {props.title}
        </h2>
        <p className="w-[400px] h-[108px] text-md text-text-secondary">
          {props.description}
        </p>
      </div>

      <div>
        <img src={props.img} alt={props.alt} />
      </div>
    </div>
  );
}
