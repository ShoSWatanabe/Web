import { useState } from "react";
import ProjectBlock from "../../../components/HelperBlocks/ProjectBlock";
import myWebMain from "../../../assets/projects/Comp/myWeb/myWebMain.png";
import Snake from "../../../components/miniGames/snake/Snake";
import Game2048 from "../../../components/miniGames/game2048/Game2048";
import Lights from "../../../components/miniGames/lights/Lights";
import Reflex from "../../../components/miniGames/reflex/Reflex";

function MyWebsite({ isMobile }: { isMobile: boolean }) {
  const [showSnake, setShowSnake] = useState(false);
  const [show2048, setShow2048] = useState(false);
  const [showLights, setShowLights] = useState(false);
  const [showReflex, setShowReflex] = useState(false);

  return (
    <ProjectBlock
      isMobile={isMobile}
      title="This website :)"
      skills="Frontend (ReactJS)"
      image={myWebMain}
    >
      <h2>Overview:</h2>
      <p className="text-sm text-gray-700">
        This frontend was initialised using vite and coded in React + Typecript
        (using Tailwind as a CSS framework). I made this website so that I can
        use what I have learnt in COMP6080 (Frontend) to make something useful.
        You can check out the github{" "}
        <a
          href="https://github.com/ShoSWatanabe/Web/tree/main"
          className="underline hover:text-gray-400"
          target="_blank"
        >
          here
        </a>
        .
      </p>
      <br />
      <p className="text-sm text-gray-700">
        You can also play some mini games that I made while learning frontend
        here:
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-3 my-3">
        <div
          className="cursor-pointer bg-gray-100 flex-1 px-4 py-2 rounded-[1rem] hover:shadow-sm text-center"
          onClick={() => setShowSnake(true)}
        >
          Snake
        </div>
        <div
          className="cursor-pointer bg-gray-100 flex-1 px-4 py-2 rounded-[1rem] hover:shadow-sm text-center"
          onClick={() => setShow2048(true)}
        >
          2048
        </div>
        <div
          className="cursor-pointer bg-gray-100 flex-1 px-4 py-2 rounded-[1rem] hover:shadow-sm text-center"
          onClick={() => setShowLights(true)}
        >
          Lights
        </div>
        <div
          className="cursor-pointer bg-gray-100 flex-1 px-4 py-2 rounded-[1rem] hover:shadow-sm text-center"
          onClick={() => setShowReflex(true)}
        >
          Reflex
        </div>
      </div>
      {showSnake && <Snake setShowSnake={setShowSnake} />}
      {show2048 && <Game2048 setShowGame={setShow2048} />}
      {showLights && <Lights setShowLights={setShowLights} />}
      {showReflex && <Reflex setShowReflex={setShowReflex} />}
    </ProjectBlock>
  );
}

export default MyWebsite;
