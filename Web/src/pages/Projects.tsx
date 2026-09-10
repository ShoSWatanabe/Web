import Ur5e from "./projects/mtrn/Ur5e";
import InvertedPendulum from "./projects/mtrn/InvertedPendulum";
import CoinMould from "./projects/mtrn/CoinMould";
import PathFollowingCar from "./projects/mtrn/PathFollowingCar";
import CurtainOpener from "./projects/mtrn/CurtainOpener";

import MyWebsite from "./projects/comp/MyWebsite";
import WallFollowingRobot from "./projects/comp/WallFollowingRobot";
import DungeonMania from "./projects/comp/DungeonMania";

function Projects({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="px-[min(40px,5vw)] py-[2rem] flex flex-col items-center">
      <section
        className={
          isMobile ? "w-[min(400px,90vw)] mb-5" : "w-[min(800px,90vw)] mb-5"
        }
      >
        <h1 className="font-bold text-gray-800 text-[2rem]">Mechatronics</h1>
        <CurtainOpener isMobile={isMobile} />
        <Ur5e isMobile={isMobile} />
        <InvertedPendulum isMobile={isMobile} />
        <CoinMould isMobile={isMobile} />
        <PathFollowingCar isMobile={isMobile} />
      </section>

      <section className="w-[min(800px,90vw)]">
        <h1 className="font-bold text-gray-800 text-[2rem]">
          Computer Science
        </h1>
        <MyWebsite isMobile={isMobile} />
        <WallFollowingRobot isMobile={isMobile} />
        <DungeonMania isMobile={isMobile} />
      </section>
    </div>
  );
}

export default Projects;
