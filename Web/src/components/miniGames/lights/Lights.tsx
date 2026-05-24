import { useState } from "react";

type gameProps = {
  setShowLights: React.Dispatch<React.SetStateAction<boolean>>;
};
function Lights({ setShowLights }: gameProps) {
  const initialGrid = [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ];
  const generateRandomGrid = () => {
    let randGrid = initialGrid.map((row) => [...row]);
    randGrid.forEach((row, y) => {
      row.forEach((_, x) => {
        randGrid[y][x] = Math.random() > 0.5 ? false : true;
      });
    });
    return randGrid;
  };
  const [grid, setGrid] = useState(generateRandomGrid());
  const [won, setWon] = useState(false);
  const clicked = (x: number, y: number) => {
    if (won || checkWin()) {
      setWon(true);
      return;
    }
    // Instead of modifying the row directly:
    let newGrid = grid.map((row) => [...row]); // Create a brand new grid with brand new rows
    newGrid[y][x] = !newGrid[y][x];

    if (x - 1 >= 0) {
      newGrid[y][x - 1] = !newGrid[y][x - 1];
    }
    if (x + 1 < 5) {
      newGrid[y][x + 1] = !newGrid[y][x + 1];
    }
    if (y - 1 >= 0) {
      newGrid[y - 1][x] = !newGrid[y - 1][x];
    }
    if (y + 1 < 5) {
      newGrid[y + 1][x] = !newGrid[y + 1][x];
    }

    setGrid(newGrid);
  };

  const checkWin = () => {
    let state = true;
    grid.forEach((row) => {
      row.forEach((cell) => {
        if (cell == false) state = false;
      });
    });
    return state;
  };

  const reset = () => {
    setGrid(generateRandomGrid());
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col fixed top-0 left-0 w-full h-[100vh] bg-white">
        <h1 className="mb-3">Try and make all the tiles a single colour!</h1>
        {grid.map((row, y) => (
          <div className="flex" key={y}>
            {row.map((cell, x) => (
              <div
                className={
                  cell
                    ? "bg-red-400 border-[2px] border-black w-[min(17vw,17vh)] aspect-square"
                    : "bg-red-200 border-[2px] border-black w-[min(17vw,17vh)] aspect-square"
                }
                onClick={() => clicked(x, y)}
                key={x}
              ></div>
            ))}
          </div>
        ))}
        <div className="flex justify-center gap-4 mt-3">
          <button
            className="cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-[1rem]"
            onClick={reset}
          >
            Reset
          </button>
          <button
            className="cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-[1rem]"
            onClick={() => setShowLights(false)}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default Lights;
