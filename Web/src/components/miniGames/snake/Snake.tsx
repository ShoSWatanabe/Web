import { useEffect, useRef, useState } from "react";
import Cell from "./Cell.tsx";

const n = 11;
const defaultBoard = Array(n)
  .fill(undefined)
  .map(() => Array(n).fill(0));

const defaultSnake = [[5, 5]];
let timeout = 0;

type SnakeProps = {
  setShowSnake: React.Dispatch<React.SetStateAction<boolean>>;
};

function Snake({ setShowSnake }: SnakeProps) {
  const [board, _] = useState(defaultBoard);
  const [snake, setSnake] = useState(defaultSnake);
  const [apple, setApple] = useState<number[]>([]);
  const [gameStart, setGameStart] = useState(false);
  const [direction, setDirection] = useState("up");
  const [gameLost, setGameLost] = useState(false);
  const [score, setScore] = useState<number>(0);
  const [highscore, setHighscore] = useState(
    localStorage.getItem("highscore")
      ? Number(localStorage.getItem("highscore"))
      : 0,
  );

  useEffect(() => {
    if (score > highscore) {
      setHighscore(score);
      localStorage.setItem("highscore", String(score));
    }
  }, [score]);

  useEffect(() => {
    spawnApple(defaultSnake);
  }, []);

  const spawnApple = (snake: number[][]) => {
    while (true) {
      const randX = Math.floor(Math.random() * n);
      const randY = Math.floor(Math.random() * n);

      if (!snake.some((pos) => pos[0] == randY && pos[1] == randX)) {
        setApple([randY, randX]);
        break;
      }
    }
  };

  const directionRef = useRef(direction);
  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);
  const appleRef = useRef(apple);
  useEffect(() => {
    appleRef.current = apple;
  }, [apple]);

  useEffect(() => {
    const id = setInterval(() => {
      if (gameStart) {
        setSnake((prev) => {
          const newSnake = prev.map((row) => [...row]);
          let newHead = [];
          const currentDir = directionRef.current;

          if (currentDir == "up") {
            newHead = [prev[0][0] - 1, prev[0][1]];
          } else if (currentDir == "down") {
            newHead = [prev[0][0] + 1, prev[0][1]];
          } else if (currentDir == "left") {
            newHead = [prev[0][0], prev[0][1] - 1];
          } else {
            newHead = [prev[0][0], prev[0][1] + 1];
          }

          const hitSelf = prev.some(
            (pos) => pos[0] === newHead[0] && pos[1] === newHead[1],
          );
          if (!checkValid(newHead[0], newHead[1]) || hitSelf) {
            setGameLost(true);
            setGameStart(false);
          }

          const currApple = appleRef.current;
          if (currApple?.[0] == newHead[0] && currApple?.[1] == newHead[1]) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
              setScore((s) => s + 1);
              spawnApple(newSnake);
            }, 10);
          } else {
            newSnake.pop();
          }
          newSnake.unshift(newHead);

          return newSnake;
        });
      }
    }, 200);

    return () => clearInterval(id);
  }, [gameStart]);

  const checkValid = (y: number, x: number) => {
    if (y < 0 || x < 0 || y >= n || x >= n) return false;
    return true;
  };

  useEffect(() => {
    const eventHandler = (event: KeyboardEvent) => {
      if (event.key == "ArrowRight" && direction != "left")
        setDirection("right");
      if (event.key == "ArrowLeft" && direction != "right")
        setDirection("left");
      if (event.key == "ArrowDown" && direction != "up") setDirection("down");
      if (event.key == "ArrowUp" && direction != "down") setDirection("up");
    };

    window.addEventListener("keydown", eventHandler);
    return () => removeEventListener("keydown", eventHandler);
  }, [direction]);

  const reset = () => {
    setGameStart(false);
    setSnake(defaultSnake);
    spawnApple(defaultSnake);
    setGameLost(false);
    setDirection("up");
    setScore(0);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen bg-gray-400 flex flex-col justify-center items-center z-10">
        {gameLost && (
          <div className="fixed w-50 h-50 bg-red-300">
            <div className="flex justify-center items-center w-full h-full">
              YOU LOST
            </div>
          </div>
        )}
        {!gameStart && (
          <h1 className="fixed top-[6%]">
            Click on board to start & use arrow keys to move
          </h1>
        )}
        <div className="flex justify-around w-[50%]">
          <div>Score: {score}</div>
          <div>Highscore: {highscore}</div>
        </div>
        <div
          className="flex flex-col bg-white"
          onClick={() => setGameStart(true)}
        >
          {board.map((row, y) => (
            <div key={y} className="flex">
              {row.map((_, x) => (
                <Cell key={x} y={y} x={x} snake={snake} apple={apple} />
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-3">
          <button
            className="cursor-pointer hover:bg-gray-300 px-3 py-2 rounded-[1rem]"
            onClick={reset}
          >
            Reset
          </button>
          <button
            className="cursor-pointer hover:bg-gray-300 px-3 py-2 rounded-[1rem]"
            onClick={() => setShowSnake(false)}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default Snake;
