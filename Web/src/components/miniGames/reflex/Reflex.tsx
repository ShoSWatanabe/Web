import { useState, useEffect } from "react";

const wordList = [
  "quail",
  "suborn",
  "alcove",
  "apostate",
  "macabre",
  "occluded",
  "desiccant",
  "waft",
  "plethora",
];

const getRandomWord = () => {
  return wordList[Math.floor(Math.random() * wordList.length)];
};

type gameProps = {
  setShowReflex: React.Dispatch<React.SetStateAction<boolean>>;
};

function Reflex({ setShowReflex }: gameProps) {
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(Date.now());
  const [time, setTime] = useState(0);
  const [resultTime, setResultTime] = useState(0);
  const [IsInGame, setIsInGame] = useState(true);

  const [target, setTarget] = useState(getRandomWord());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((Date.now() - startTime) / 1000);
    }, 50);

    return () => clearInterval(interval);
  }, [startTime]);

  useEffect(() => {
    if (input === target) {
      setIsInGame(false);
      setResultTime((Date.now() - startTime) / 1000);
    }
  }, [input, startTime]);

  const reset = () => {
    setTarget(getRandomWord());
    setStartTime(Date.now());
    setIsInGame(true);
    setInput("");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-[100vh] bg-white">
      <div className="flex flex-col items-center mt-[20vh]">
        <p>Please enter the following word as fast as possible</p>
        <h1 className="font-bold">{target}</h1>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="border-[2px] rounded-[1rem] px-3 py-2"
        />
        <p>
          Time elapsed:&nbsp;
          {IsInGame ? time : resultTime}&nbsp; seconds
        </p>

        <div className="flex justify-center gap-4 mt-3">
          <button
            className="cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-[1rem]"
            onClick={reset}
          >
            Reset
          </button>
          <button
            className="cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-[1rem]"
            onClick={() => setShowReflex(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reflex;
