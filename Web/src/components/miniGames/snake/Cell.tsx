const defaultClass = "w-[min(50px,8vw)] aspect-square border-[1px]";

type CellProps = {
  y: number;
  x: number;
  snake: number[][];
  apple: number[];
};

function Cell({ y, x, snake, apple }: CellProps) {
  let customClass = defaultClass;

  if (snake.filter((pos) => pos[0] == y && pos[1] == x).length > 0)
    customClass += " bg-green-200";

  if (apple?.[0] == y && apple?.[1] == x) customClass += " bg-red-200";

  return <div className={customClass}></div>;
}

export default Cell;
