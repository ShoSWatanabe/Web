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

// Wall follow
import wallFollowMain from "../assets/projects/Mtrn/wallFollow/wallFollowMain.png";

// Path follow
import pathFollowMain from "../assets/projects/Mtrn/pathFollow/pathFollowMain.jpg";

/////////////////// comp ///////////////////
// myWeb
import myWebMain from "../assets/projects/Comp/myWeb/myWebMain.png";

// kahoot
import kahootMain from "../assets/projects/Comp/kahoot/kahootMain.png";

// dungeon
import dungeon from "../assets/projects/Comp/Dungeon/dungeonMain.png";

function Projects({ isMobile }: { isMobile: boolean }) {
  const h2style = "";
  const pstyle = "text-sm text-gray-700";
  return (
    <div className="px-[min(40px,5vw)] py-[2rem] flex flex-col items-center">
      {/* mtrn section */}
      <section
        className={
          isMobile ? "w-[min(400px,90vw)] mb-5" : "w-[min(800px,90vw)] mb-5"
        }
      >
        <h1 className="font-bold text-gray-800 text-[2rem]">Mechatronics</h1>

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

          <p className={pstyle + " mt-1"}>
            Using MATLAB's{" "}
            <code className="bg-gray-100 px-1 rounded">place</code> function on
            the discrete-time system matrices, the resulting gain vector{" "}
            <strong>K</strong> can be found: <br />
            <div className="flex justify-center">
              <code className="my-2">
                [Ad, Bd, Cd, Dd] = c2dm(A, B, C, D, T, 'zoh'); <br />
                poles = [p1, p2, p3, p4]; <br />
                z_poles = exp(poles * T); <br />
                K = place(Ad, Bd, z_poles); <br />
              </code>
            </div>
          </p>
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

        {/* <ProjectBlock
          isMobile={isMobile}
          title="Mini turret"
          skills="CAD + Arduino"
        >
          hi
        </ProjectBlock> */}

        <ProjectBlock
          isMobile={isMobile}
          title="Coin mould"
          skills="CAD & Manufacturing"
          image={coinMouldMain}
        >
          hi
        </ProjectBlock>

        <ProjectBlock
          isMobile={isMobile}
          title="Wall following robot simulator"
          skills="Robot simulation & C++"
          image={wallFollowMain}
        >
          hi
        </ProjectBlock>

        <ProjectBlock
          isMobile={isMobile}
          title="Autonomous Path following car"
          skills="Arduino"
          image={pathFollowMain}
        >
          hi
        </ProjectBlock>
      </section>

      {/* comp section */}
      <section className="w-[min(800px,90vw)]">
        <h1 className="font-bold text-gray-800 text-[2rem]">
          Computer Science
        </h1>

        <ProjectBlock
          isMobile={isMobile}
          title="This website :)"
          skills="Frontend (ReactJS)"
          image={myWebMain}
        >
          hi
        </ProjectBlock>

        <ProjectBlock
          isMobile={isMobile}
          title="Dungeon Mania"
          skills="OOP (Java)"
          image={dungeon}
        >
          hi
        </ProjectBlock>
      </section>
    </div>
  );
}
export default Projects;
