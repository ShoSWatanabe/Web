import { useState, useEffect } from "react";

import Cell from "./Cell.tsx";

const emptyBoard = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 2, 0, 0],
  [0, 0, 0, 0],
];

type gameProps = {
  setShowGame: React.Dispatch<React.SetStateAction<boolean>>;
};

function Game2048({ setShowGame }: gameProps) {
  const [board, setBoard] = useState(emptyBoard);
  const [done, setDone] = useState(0);

  const process = (n1: number, n2: number, n3: number, n4: number) => {
    let newN1 = 0;
    let newN2 = 0;
    let newN3 = 0;
    let newN4 = 0;

    if (n3 == n4 && n4 != 0) {
      newN4 = 2 * n4;

      if (n1 == n2 && n2 != 0) {
        newN3 = 2 * n2;
      } else {
        newN3 = n2;
        newN2 = n1;
      }
    } else if (n4 == n2 && n3 == 0 && n2 != 0) {
      newN4 = 2 * n4;
      newN1 = n1;
    } else if (n3 == n1 && n2 == 0 && n1 != 0) {
      newN3 = 2 * n3;
      newN4 = n4;
    } else if (n1 == n4 && n1 != 0 && n2 == 0 && n3 == 0) {
      newN4 = 2 * n4;
    } else if (n3 == n2 && n3 != 0) {
      newN3 = 2 * n3;
      newN4 = n4;
      newN2 = n1;
    } else if (n1 == n2 && n1 != 0) {
      newN2 = 2 * n2;
      newN3 = n3;
      newN4 = n4;
    } else {
      const nonZero = [n4, n3, n2, n1].filter((n) => n !== 0);
      newN4 = nonZero?.[0] ? nonZero?.[0] : 0;
      newN3 = nonZero?.[1] ? nonZero?.[1] : 0;
      newN2 = nonZero?.[2] ? nonZero?.[2] : 0;
      newN1 = nonZero?.[3] ? nonZero?.[3] : 0;
    }

    const nonZero = [newN4, newN3, newN2, newN1].filter((n) => n !== 0);
    newN4 = nonZero?.[0] ? nonZero?.[0] : 0;
    newN3 = nonZero?.[1] ? nonZero?.[1] : 0;
    newN2 = nonZero?.[2] ? nonZero?.[2] : 0;
    newN1 = nonZero?.[3] ? nonZero?.[3] : 0;

    return [newN1, newN2, newN3, newN4];
  };

  const rotateClockwise = (matrix: number[][]) => {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = i; j < matrix[0].length; j++) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }
    return matrix.map((row) => row.reverse());
  };

  const rotateCounterClockwise = (matrix: number[][]) => {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = i; j < matrix[0].length; j++) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }
    return matrix.reverse();
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (gameLost(board)) return;
      let result = [];
      if (e.key == "ArrowRight") {
        result = board.map((row) => process(row[0], row[1], row[2], row[3]));
      } else if (e.key == "ArrowLeft") {
        result = board.map((row) =>
          process(row[3], row[2], row[1], row[0]).reverse(),
        );
      } else if (e.key == "ArrowDown") {
        result = rotateClockwise(
          rotateCounterClockwise([...board.map((row) => [...row])]).map((row) =>
            process(row[0], row[1], row[2], row[3]),
          ),
        );
      } else if (e.key == "ArrowUp") {
        result = rotateCounterClockwise(
          rotateClockwise([...board.map((row) => [...row])]).map((row) =>
            process(row[0], row[1], row[2], row[3]),
          ),
        );
      } else return;

      if (
        JSON.stringify(board) !== JSON.stringify(result) &&
        board.flat().filter((n) => n == 0).length > 0
      ) {
        const randomBlock = Math.ceil(Math.random() * 2) * 2;
        let randLoc = [-1, -1];
        while (result?.[randLoc[0]]?.[randLoc[1]] != 0) {
          const randX = Math.floor(Math.random() * 4);
          const randY = Math.floor(Math.random() * 4);
          randLoc = [randY, randX];
        }
        result[randLoc[0]][randLoc[1]] = randomBlock;
      }

      if (gameLost(result)) setDone(-1);
      else if (gameWon(result)) setDone(1);

      setBoard(result);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [board]);

  const gameWon = (result: number[][]) =>
    result.some((row) => row.some((col) => col === 2048));

  const gameLost = (result: number[][]) => {
    if (gameWon(result)) {
      return false;
    }

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4 - 1; j++) {
        if (result[i][j] === result[i][j + 1]) {
          return false;
        }
        if (result[j][i] === result[j + 1][i]) {
          return false;
        }
        if (result[i][j] == 0) return false;
      }
    }
    if (result[3][3] == 0) return false;
    return true;
  };

  return (
    <>
      <div className="flex justify-center flex-col items-center fixed top-0 left-0 w-full h-[100vh] bg-white">
        {done == -1 && (
          <div className="fixed w-50 h-50 z-10 bg-blue-200 flex items-center justify-center">
            YOU LOST
          </div>
        )}

        {done == 1 && (
          <div className="fixed w-50 h-50 z-10 bg-red-200 flex items-center justify-center">
            YOU WON
          </div>
        )}
        <h1 className="mb-3">Use arrow keys to make 2048!</h1>
        <div className="flex flex-col border-[2px]">
          {board.map((row, y) => (
            <div key={y} className="flex">
              {row.map((_, x) => (
                <div
                  key={x}
                  className="flex w-[min(130px,20vw)] aspect-square justify-center items-center "
                >
                  <Cell y={y} x={x} board={board} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <button
          className="cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-[1rem] mt-3"
          onClick={() => setShowGame(false)}
        >
          Close
        </button>
      </div>
    </>
  );
}

export default Game2048;
