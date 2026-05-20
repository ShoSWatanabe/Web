import ProjectBlock from "../components/HelperBlocks/ProjectBlock";

/////////////////// mtrn ///////////////////
// Inv Pend
import invPendMain from "../assets/projects/Mtrn/invPend/invPendMain.jpg";

// Coin mould
import coinMouldMain from "../assets/projects/Mtrn/coinMould/coinMouldMain.png";

// Wall follow
import wallFollowMain from "../assets/projects/Mtrn/wallFollow/wallFollowMain.png";

// Path follow
import pathFollowMain from "../assets/projects/Mtrn/pathFollow/pathFollowMain.jpg";

/////////////////// comp ///////////////////
// myWeb
import myWebMain from "../assets/projects/Comp/myWeb/myWebMain.png";

function Projects({ isMobile }: { isMobile: boolean }) {
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
          hi
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
          title="Mini kahoot Backend"
          skills="Backend (TS)"
          image={""}
        >
          hi
        </ProjectBlock>

        <ProjectBlock
          isMobile={isMobile}
          title="Dungeon Mania"
          skills="OOP & Java"
          image={""}
        >
          hi
        </ProjectBlock>

        <ProjectBlock
          isMobile={isMobile}
          title="Maze solver"
          skills="DSA & C"
          image={""}
        >
          hi
        </ProjectBlock>
      </section>
    </div>
  );
}
export default Projects;
