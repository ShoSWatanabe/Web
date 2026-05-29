import { useState } from "react";
import ProjectBlock from "../components/HelperBlocks/ProjectBlock";

/////////////////// mtrn ///////////////////
// Inv Pend
import invPendMain from "../assets/projects/Mtrn/invPend/invPendMain.jpg";
import model from "../assets/projects/Mtrn/invPend/model.png";
import equation from "../assets/projects/Mtrn/invPend/equation.png";
import blockDiagram from "../assets/projects/Mtrn/invPend/blockDiagram.png";
import graph from "../assets/projects/Mtrn/invPend/graph.png";
import pendVid from "../assets/projects/Mtrn/invPend/vid.mp4";

// Coin mould
import coinMouldMain from "../assets/projects/Mtrn/coinMould/coinMouldMain.png";
import mouldVid from "../assets/projects/Mtrn/coinMould/MouldVid.mp4";

// Wall follow
import wallFollowMain from "../assets/projects/Mtrn/wallFollow/wallFollowMain.png";
import khperaSensor from "../assets/projects/Mtrn/wallFollow/khperaSensor.png";
import rosbotSensor from "../assets/projects/Mtrn/wallFollow/rosbotSensor.png";
import rosbot from "../assets/projects/Mtrn/wallFollow/rosbot.mp4";
import khepera from "../assets/projects/Mtrn/wallFollow/khpera.mp4";

// Path follow
import pathFollowMain from "../assets/projects/Mtrn/pathFollow/pathFollowMain.jpg";
import car from "../assets/projects/Mtrn/pathFollow/car.png";

/////////////////// comp ///////////////////
// myWeb
import myWebMain from "../assets/projects/Comp/myWeb/myWebMain.png";
import Snake from "../components/miniGames/snake/Snake";
import Game2048 from "../components/miniGames/game2048/Game2048.tsx";
import Lights from "../components/miniGames/lights/Lights.tsx";
import Reflex from "../components/miniGames/reflex/Reflex.tsx";

// kahoot
// import kahootMain from "../assets/projects/Comp/kahoot/kahootMain.png";

// dungeon
import dungeon from "../assets/projects/Comp/Dungeon/dungeonMain.png";
import simpleDungeon from "../assets/projects/Comp/Dungeon/simpleDungeon.mp4";
import doorDungeon from "../assets/projects/Comp/Dungeon/doorDungeon.mp4";
import advancedDungeon from "../assets/projects/Comp/Dungeon/advancedDungeon.mp4";
import orderDungeon from "../assets/projects/Comp/Dungeon/orderDungeon.mp4";
import boulderDungeon from "../assets/projects/Comp/Dungeon/boulderDungeon.mp4";
import left from "../assets/projects/left.svg";
import right from "../assets/projects/right.svg";

function Projects({ isMobile }: { isMobile: boolean }) {
  const h2style = "";
  const pstyle = "text-sm text-gray-700";

  // myWeb minigames
  const [showSnake, setShowSnake] = useState<boolean>(false);
  const [show2048, setShow2048] = useState<boolean>(false);
  const [showLights, setShowLights] = useState<boolean>(false);
  const [showReflex, setShowReflex] = useState<boolean>(false);

  // dungeon game
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
  const [dungeonIndex, setDungeonIndex] = useState<number>(0);

  return (
    <div className="px-[min(40px,5vw)] py-[2rem] flex flex-col items-center">
      {/* mtrn section */}
      <section
        className={
          isMobile ? "w-[min(400px,90vw)] mb-5" : "w-[min(800px,90vw)] mb-5"
        }
      >
        <h1 className="font-bold text-gray-800 text-[2rem]">Mechatronics</h1>

        {/* Inverted pend */}
        <ProjectBlock
          isMobile={isMobile}
          title="Inverted pendulum"
          skills="Control systems & MATLAB"
          image={invPendMain}
        >
          <div>
            <h2 className={h2style}>Overview:</h2>
            <p className={pstyle}>
              A controller for the motor is designed so that the cart will be in
              the desired horizontal location whilst maintaining the inverted
              pendulum on the cart with a set behaviour response.
            </p>
          </div>

          <br />

          <h2 className={h2style}>Mathematical Model:</h2>
          <p className={pstyle}>
            To make the controller, a mathematical model was determined using
            the Newton-Euler approach where after a linear approximation is
            done, we get the equations below.
          </p>
          <div className="flex justify-around items-center">
            <div className="w-[min(300px,50%)]">
              <img src={model} alt="mmathematical model" className="" />
            </div>
            <div className="w-[min(250px,50%)]">
              <img src={equation} alt="model equation" />
            </div>
          </div>

          <br />

          <h2 className={h2style}>State space model:</h2>
          <p className={pstyle}>
            From the equation above, we can represent them as a state space
            model of matrices <strong>A</strong>, <strong>B</strong>,{" "}
            <strong>C</strong> and <strong>D</strong> by letting{" "}
            <strong>x</strong> = [x, θ, ẋ, θ̇]'.
          </p>
          <div className="flex justify-center items-center ">
            <img
              src={blockDiagram}
              alt="blockDiagram"
              className="w-[min(650px,100%)]"
            />
          </div>

          <br />

          <h2 className={h2style}>Finding the desired response:</h2>
          <p className={pstyle}>
            A discrete-time state feedback controller was designed using pole
            placement. The desired s-plane poles were calculated from the given
            settling time and percentage overshoot [p1, p2, p3, p4], then mapped
            to the z-plane using a ZOH discretisation at a sampling period of{" "}
            <em>T</em>.
          </p>

          <div className={pstyle + " mt-1"}>
            Using MATLAB's{" "}
            <code className="bg-gray-100 px-1 rounded">place</code> function on
            the discrete-time system matrices, the resulting gain vector{" "}
            <strong>K</strong> can be found: <br />
            <p className="flex justify-center">
              <code className="my-2">
                [Ad, Bd, Cd, Dd] = c2dm(A, B, C, D, T, 'zoh'); <br />
                poles = [p1, p2, p3, p4]; <br />
                z_poles = exp(poles * T); <br />
                K = place(Ad, Bd, z_poles); <br />
              </code>
            </p>
          </div>
          <br />

          <h2 className={h2style}>Result:</h2>

          <div
            className={
              isMobile
                ? "flex justify-between w-full gap-2" +
                  " flex-col mb-2 items-center"
                : "flex justify-between w-full gap-2"
            }
          >
            <div className="flex items-center justify-center">
              <video src={pendVid} controls style={{ aspectRatio: "15 / 9" }} />
            </div>
            <div className="flex items-center justify-center flex-col">
              <h2 className={pstyle}>Resulting graph:</h2>
              <img src={graph} alt="graph" />
            </div>
          </div>
        </ProjectBlock>

        {/* Coin mold */}
        <ProjectBlock
          isMobile={isMobile}
          title="Coin mould"
          skills="CAD & Manufacturing"
          image={coinMouldMain}
        >
          <h2 className={h2style}>Overview:</h2>
          <p className={pstyle}>
            A coin is to be made by injection molding. To make such mold, 2
            parts of the mold must come together and close shut leaving a small
            hole at the bottom to insert the molten plastic.
          </p>

          <br />

          <h2 className={h2style}>Process:</h2>
          <p className={pstyle}>
            The design was made in SOLIDWORKS while engravings where done in
            fusion360. To make sure the 2 pieces combine seamlessly, CAD
            assemblies where made to make sure no colliding parts were present.
            The machining process was also done in fusion360 as shown below,
            using different tools for different removal purposes.
          </p>

          {/* machining simulation */}
          <div className="rounded-[1rem] overflow-hidden">
            <video src={mouldVid} autoPlay loop muted />
          </div>

          <br />

          <h2 className={h2style}>Result:</h2>
          <p className={pstyle}>
            Finally, the CAD model was CNC machined on a piece of aluminium
            using the same machining process for the physical model. The molten
            plastic was then inserted to the mold to make the coin.
          </p>
          <div
            className={
              isMobile
                ? "flex justify-center items-center gap-6" + " flex-col"
                : "flex justify-center items-center gap-6"
            }
          >
            <img src="" alt="Physical mold" />
            <img src="" alt="Injection molded coin" />
          </div>
        </ProjectBlock>

        {/* Robot simulation */}
        <ProjectBlock
          isMobile={isMobile}
          title="Wall following robot simulator"
          skills="Robot simulation & C++"
          image={wallFollowMain}
        >
          <h2 className={h2style}>Overview:</h2>
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
            . In this simulation, 2 robots are controlled using the same
            interface with different hardware.
          </p>

          <br />

          <h2 className={h2style}>Robots:</h2>
          <ul className="list-disc px-4">
            <li className={pstyle}>
              Kheprea IV is 4 wheeled and has 8 distance sensor.
            </li>
            <li className={pstyle}>
              Rosbot is 2 wheeled and has a 360 degree lidar point cloud sensor.
            </li>
          </ul>

          <div
            className={
              isMobile
                ? "flex justify-center items-center gap-6 mt-3" + " "
                : "flex justify-center items-center gap-6 mt-3"
            }
          >
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

          <h2 className={h2style}>Wall follow:</h2>
          <p className={pstyle}>
            By using classes, despite the robot having different sensors, they
            are able to excecute the same high level command. In this case, the
            command is to follow the wall till you reach a goal where there are
            3 surrounding walls and then go back to the starting point.
          </p>

          <div
            className={
              isMobile
                ? "flex justify-center items-center gap-6 mt-3" + " flex-col"
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

        {/* Path following car */}
        <ProjectBlock
          isMobile={isMobile}
          title="Autonomous Path following car"
          skills="Arduino"
          image={pathFollowMain}
        >
          <h2 className={h2style}>Overview:</h2>
          <p className={pstyle}>
            A autonomous car was made to follow a path drawn using 2 lines on
            each side. The car is able to detect the lines using a lidar sensor
            where the data is passed on to the arduino. The arduino then outputs
            its command to the motor driver making the motors turn as desired.
          </p>
          <br />
          <h2>Components:</h2>
          <div
            className={
              isMobile
                ? "flex justify-between w-full px-3 flex-col items-center"
                : "flex justify-between w-full px-3"
            }
          >
            <ul
              className={
                pstyle +
                " list-disc px-4 block " +
                (isMobile ? " w-[100%] mb-3" : " w-[60%]")
              }
            >
              <li>Wooden base - Laser cutted</li>
              <li>
                Wheels - 2x 3D printed at the back with rubber and 1x Free wheel
                at the front
              </li>
              <li>Arduino - Brain of the car</li>
              <li>Lidar sensor - Line detector</li>
              <li>Motor Driver - Drives the wheels</li>
              <li>Motor</li>
              <li>Motor holder</li>
              <li>Batteries</li>
            </ul>
            <div
              className={
                isMobile
                  ? "overflow-hidden rounded-[1rem] mr-5 w-[70%]"
                  : "overflow-hidden rounded-[1rem] mr-5 w-[30%]"
              }
            >
              <img src={car} alt="car" />
            </div>
          </div>
          <p className={pstyle}>Couldn't find any videos :(</p>
        </ProjectBlock>
      </section>

      {/* comp section */}
      <section className="w-[min(800px,90vw)]">
        <h1 className="font-bold text-gray-800 text-[2rem]">
          Computer Science
        </h1>

        {/* My website */}
        <ProjectBlock
          isMobile={isMobile}
          title="This website :)"
          skills="Frontend (ReactJS)"
          image={myWebMain}
        >
          <h2>Overview:</h2>
          <p className={pstyle}>
            This frontend was initialised using vite and coded in React +
            Typecript (using Tailwind as a CSS framework). I made this website
            so that I can use what I have learnt in COMP6080 (Frontend) to make
            something useful. You can check out the github{" "}
            <a
              href="https://github.com/ShoSWatanabe/Web/tree/main"
              className="underline"
              target="_blank"
            >
              here
            </a>
            .
          </p>

          <br />

          <p className={pstyle}>
            You can also play some mini games that I made while learning
            frontend here:
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

        {/* Dungeon Mania */}
        <ProjectBlock
          isMobile={isMobile}
          title="Dungeon Mania"
          skills="OOP (Java)"
          image={dungeon}
        >
          <h2 className={h2style}>Overview:</h2>
          <p className={pstyle}>
            A dungeon game's backend logic was implemented using various OOP
            priciples. This was particularly useful in this game as there were
            many enemies, and tools which needed to be classified so that
            instead of coding each object from scratch, new features can be
            easily added from previous code.
          </p>

          <br />

          <h2 className={h2style}>Gameplay:</h2>
          <p className={pstyle}>
            There are various ways to win in this game like, collecting all the
            coins as well as losing in the game by being killed by an enemy.
            Other features include, killing the enemy using crafted tools,
            drinking potions and pushing boulders around.
          </p>

          <br />
          <h2 className={h2style}>Examples:</h2>

          {/* dungeon example video */}
          {dungeonExamples.map((data, index) => (
            <div>
              {index == dungeonIndex && (
                <div>
                  <p className={pstyle}>{data[0]}</p>
                  <div
                    className="flex justify-center items-center overflow-hidden rounded-[1rem]"
                    style={{ aspectRatio: 14 / 11 }}
                  >
                    <video src={data[1]} controls />
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Bottom control section */}
          <div className="flex justify-between w-full py-2 px-4">
            <div
              onClick={() =>
                setDungeonIndex((prev) => {
                  let i = (prev - 1) % dungeonExamples.length;
                  if (i < 0) i = dungeonExamples.length - 1;
                  return i;
                })
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
                <>
                  {index == dungeonIndex ? (
                    <div
                      key={index}
                      className="w-[10px] h-[10px] rounded-full bg-gray-400 "
                    ></div>
                  ) : (
                    <div
                      key={index}
                      className="w-[10px] h-[10px] rounded-full bg-gray-300 "
                    ></div>
                  )}
                </>
              ))}
            </div>
            <div
              onClick={() =>
                setDungeonIndex((prev) => (prev + 1) % dungeonExamples.length)
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
      </section>
    </div>
  );
}
export default Projects;
