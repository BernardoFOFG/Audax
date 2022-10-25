import "../styles/main.css";
export function Button(props) {
  return (
    <button className={"flex items-center px-20 py-4 bg-btn text-text-primary w-[310px] h-[50px] rounded-[68px]"}>
      {props.content}
    </button>
  );
}
