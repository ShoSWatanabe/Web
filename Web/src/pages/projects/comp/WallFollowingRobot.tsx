import ProjectBlock from "../../../components/HelperBlocks/ProjectBlock";
import wallFollowMain from "../../../assets/projects/Mtrn/wallFollow/wallFollowMain.png";
import khperaSensor from "../../../assets/projects/Mtrn/wallFollow/khperaSensor.png";
import rosbotSensor from "../../../assets/projects/Mtrn/wallFollow/rosbotSensor.png";
import rosbot from "../../../assets/projects/Mtrn/wallFollow/rosbot.mp4";
import khepera from "../../../assets/projects/Mtrn/wallFollow/khpera.mp4";

function WallFollowingRobot({ isMobile }: { isMobile: boolean }) {
  const pstyle = "text-sm text-gray-700";
  return (
    <ProjectBlock
      isMobile={isMobile}
      title="Wall following robot simulator"
      skills="Robot simulation & C++"
      image={wallFollowMain}
    >
      <h2>Overview:</h2>
      <p className={pstyle}>
        A robot with sensors is to follow a wall without any collisions in a
        simulation software called{" "}
        <a
          href="https://cyberbotics.com/"
          className="hover:underline"
          target="_blank"
        >
          Webots
        </a>
        . In this simulation, 2 robots are controlled using the same interface
        with different hardware.
      </p>
      <br />
      <h2>Robots:</h2>
      <ul className="list-disc px-4">
        <li className={pstyle}>
          Kheprea IV is 4 wheeled and has 8 distance sensor.
        </li>
        <li className={pstyle}>
          Rosbot is 2 wheeled and has a 360 degree lidar point cloud sensor.
        </li>
      </ul>
      <div className="flex justify-center items-center gap-6 mt-3">
        <div className="w-[45%]">
          <h1>Khepera IV</h1>
          <div
            className="flex justify-center items-center overflow-hidden rounded-[1rem]"
            style={{ aspectRatio: 16 / 9 }}
          >
            <img src={khperaSensor} alt="Khpera IV sensor" />
          </div>
        </div>
        <div className="w-[45%]">
          <h1>Rosbot</h1>
          <div
            className="flex justify-center items-center overflow-hidden rounded-[1rem]"
            style={{ aspectRatio: 16 / 9 }}
          >
            <img src={rosbotSensor} alt="Rosbot sensor" />
          </div>
        </div>
      </div>
      <br />
      <h2>Wall follow:</h2>
      <p className={pstyle}>
        By using classes, despite the robot having different sensors, they are
        able to excecute the same high level command. In this case, the command
        is to follow the wall till you reach a goal where there are 3
        surrounding walls and then go back to the starting point.
      </p>
      <div
        className={
          isMobile
            ? "flex justify-center items-center gap-6 mt-3 flex-col"
            : "flex justify-center items-center gap-6 mt-3"
        }
      >
        <div className={isMobile ? "w-[90%]" : "w-[45%]"}>
          <h1>Khepera IV</h1>
          <div
            className="flex flex-col justify-center items-center overflow-hidden rounded-[1rem]"
            style={{ aspectRatio: 16 / 9 }}
          >
            <video src={khepera} autoPlay controls />
          </div>
        </div>
        <div className={isMobile ? "w-[90%]" : "w-[45%]"}>
          <h1>Rosbot</h1>
          <div
            className="flex flex-col justify-center items-center overflow-hidden rounded-[1rem]"
            style={{ aspectRatio: 16 / 9 }}
          >
            <video src={rosbot} autoPlay controls />
          </div>
        </div>
      </div>
    </ProjectBlock>
  );
}

export default WallFollowingRobot;
