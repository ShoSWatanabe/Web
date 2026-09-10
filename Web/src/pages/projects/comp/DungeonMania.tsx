import { useState } from "react";
import ProjectBlock from "../../../components/HelperBlocks/ProjectBlock";
import dungeon from "../../../assets/projects/Comp/Dungeon/dungeonMain.png";
import simpleDungeon from "../../../assets/projects/Comp/Dungeon/simpleDungeon.mp4";
import doorDungeon from "../../../assets/projects/Comp/Dungeon/doorDungeon.mp4";
import advancedDungeon from "../../../assets/projects/Comp/Dungeon/advancedDungeon.mp4";
import orderDungeon from "../../../assets/projects/Comp/Dungeon/orderDungeon.mp4";
import boulderDungeon from "../../../assets/projects/Comp/Dungeon/boulderDungeon.mp4";
import left from "../../../assets/projects/left.svg";
import right from "../../../assets/projects/right.svg";

const dungeonExamples = [
  ["Simple exit to win", simpleDungeon],
  ["Push boulders on plate to win", boulderDungeon],
  ["Combination goal: Push boulder to plate then exit", orderDungeon],
  [
    "Kill following enemy with crafted tools and collect coin for goal",
    advancedDungeon,
  ],
  ["Keys to unlock doors", doorDungeon],
];

function DungeonMania({ isMobile }: { isMobile: boolean }) {
  const [dungeonIndex, setDungeonIndex] = useState(0);
  const pstyle = "text-sm text-gray-700";
  return (
    <ProjectBlock
      isMobile={isMobile}
      title="Dungeon Mania"
      skills="OOP & Java"
      image={dungeon}
    >
      <h2>Overview:</h2>
      <p className={pstyle}>
        A dungeon game's backend logic was implemented using various OOP
        principles. This was particularly useful in this game as there were many
        enemies, and tools which needed to be classified so that instead of
        coding each object from scratch, new features can be easily added from
        previous code.
      </p>
      <br />
      <h2>Gameplay:</h2>
      <p className={pstyle}>
        There are various ways to win in this game like, collecting all the
        coins as well as losing in the game by being killed by an enemy. Other
        features include, killing the enemy using crafted tools, drinking
        potions and pushing boulders around.
      </p>
      <br />
      <h2>Examples:</h2>
      <div>
        <p className={pstyle}>{dungeonExamples[dungeonIndex][0]}</p>
        <div
          className="flex justify-center items-center overflow-hidden rounded-[1rem]"
          style={{ aspectRatio: 14 / 11 }}
        >
          <video src={dungeonExamples[dungeonIndex][1]} controls />
        </div>
      </div>
      <div className="flex justify-between w-full py-2 px-4">
        <div
          onClick={() =>
            setDungeonIndex(
              (previous) =>
                (previous - 1 + dungeonExamples.length) %
                dungeonExamples.length,
            )
          }
          className="cursor-pointer flex items-center hover:bg-gray-200 px-2 py-1 rounded-[1rem]"
        >
          <div className="h-5 w-5">
            <img src={left} alt="PrevIcon" />
          </div>
          <p className={pstyle}>Prev</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          {dungeonExamples.map((_, index) => (
            <div
              key={index}
              className={
                index === dungeonIndex
                  ? "w-[10px] h-[10px] rounded-full bg-gray-400"
                  : "w-[10px] h-[10px] rounded-full bg-gray-300"
              }
            />
          ))}
        </div>
        <div
          onClick={() =>
            setDungeonIndex(
              (previous) => (previous + 1) % dungeonExamples.length,
            )
          }
          className="cursor-pointer flex items-center hover:bg-gray-200 px-2 py-1 rounded-[1rem]"
        >
          <p className={pstyle}>Next</p>
          <div className="h-5 w-5">
            <img src={right} alt="NextIcon" />
          </div>
        </div>
      </div>
    </ProjectBlock>
  );
}

export default DungeonMania;
