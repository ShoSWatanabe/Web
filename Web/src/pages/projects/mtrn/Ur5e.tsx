import ProjectBlock from "../../../components/HelperBlocks/ProjectBlock";
import ur5eVid from "../../../assets/projects/Mtrn/ur5e/ur5e.mp4";
import ur5eMain from "../../../assets/projects/Mtrn/ur5e/ur5e.png";
import ur5eSim from "../../../assets/projects/Mtrn/ur5e/sim.png";
import camToWarped from "../../../assets/projects/Mtrn/ur5e/camToWarped.png";
import aptAndPath from "../../../assets/projects/Mtrn/ur5e/aptAndPath.png";

function Ur5e({ isMobile }: { isMobile: boolean }) {
  return (
    <ProjectBlock
      isMobile={isMobile}
      title="UR5e arm controller"
      skills="Robotics & MATLAB"
      image={ur5eMain}
    >
      <div>
        <h2>Overview:</h2>
        <p className="text-sm text-gray-700 py-2">
          By learning the basics of coordinate frames and transformations, I was
          able to control the UR5e arm to do several tasks such as detecting and
          moving Aruco markers. Apart from this, I also learnt about DH
          conventions, forward and inverse kinematics, jacobian matrices and
          singularities. Most of the testings were done in a simulation as shown
          below.
        </p>
        <div className="overflow-hidden rounded-[1rem] mx-[5%]">
          <img src={ur5eSim} alt="UR5e sim picture" />
        </div>
      </div>
      <br />
      <h2>Detecting and moving Aruco markers</h2>
      <p className="text-sm text-gray-700">
        Using the camera data from above, the arm was controlled so that it
        would pick and place the relevant Aruco markers to the desired
        destination with the correct orientation whilst avoiding obstacles.
        <br />
        <br />
        In this case of moving the rectangular marker, this was done in 5 major
        steps:
        <ol className="list-decimal list-outside pl-5">
          <li>
            Convert camera image and apply perspective transformation to get a
            top down view of the table using the 4 Aruco markers.
          </li>
          <div className="flex justify-center my-2 pr-5">
            <div className="overflow-hidden rounded-[1rem]">
              <img src={camToWarped} alt="Camera to top down image" />
            </div>
          </div>
          <li>
            Mark and identify all the Aruco markers as either the object to
            carry, obstacle or goal.
          </li>
          <li>
            Calculate the Artificial Potential (APF) Field so that it gets
            attracted to the goal and repelled when near an obstacle.
          </li>
          <li>
            Using the APF, the final trajectory is made where the orientation of
            the picked up marker is rotated to be parallel to the potential
            field vector to avoid the obstacles.
          </li>
          <div className="flex justify-center my-2 pr-5">
            <div className="overflow-hidden rounded-[1rem]">
              <img src={aptAndPath} alt="APF + Final path" />
            </div>
          </div>
          <li>
            The final path was then sent to the UR5e to peform the movement
            where the vacuum gripper were also activated and deactivated at the
            start and end points.
          </li>
          <br />
          <div className="pr-5">
            <div className="flex items-center justify-center overflow-hidden rounded-[1rem]">
              <video src={ur5eVid} controls />
            </div>
          </div>
        </ol>
      </p>
      <br />
    </ProjectBlock>
  );
}

export default Ur5e;
