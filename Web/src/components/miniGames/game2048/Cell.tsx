type Cellrops = {
  y: number;
  x: number;
  board: number[][];
};

function Cell({ y, x, board }: Cellrops) {
  let customClass =
    "w-full h-full flex justify-center items-center border-[1px] text-[2rem]";

  if (board[y][x] == 2) customClass += " bg-yellow-100";
  if (board[y][x] == 4) customClass += " bg-yellow-200";
  if (board[y][x] == 8) customClass += " bg-yellow-300";
  if (board[y][x] == 16) customClass += " bg-yellow-500";
  if (board[y][x] == 32) customClass += " bg-red-300";
  if (board[y][x] == 64) customClass += " bg-red-400";
  if (board[y][x] == 128) customClass += " bg-yellow-700";

  return (
    <>
      <div className={customClass}>{board[y][x] != 0 ? board[y][x] : ""}</div>
    </>
  );
}
export default Cell;
