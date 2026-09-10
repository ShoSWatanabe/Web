import ProjectBlock from "../../../components/HelperBlocks/ProjectBlock";
import pathFollowMain from "../../../assets/projects/Mtrn/pathFollow/pathFollowMain.jpg";
import car from "../../../assets/projects/Mtrn/pathFollow/car.png";

function PathFollowingCar({ isMobile }: { isMobile: boolean }) {
  const pstyle = "text-sm text-gray-700";
  return (
    <ProjectBlock
      isMobile={isMobile}
      title="Autonomous Path following car"
      skills="Arduino"
      image={pathFollowMain}
    >
      <h2>Overview:</h2>
      <p className={pstyle}>
        A autonomous car was made to follow a path drawn using 2 lines on each
        side. The car is able to detect the lines using a lidar sensor where the
        data is passed on to the arduino. The arduino then outputs its command
        to the motor driver making the motors turn as desired.
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
            Wheels - 2x 3D printed at the back with rubber and 1x Free wheel at
            the front
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
  );
}

export default PathFollowingCar;
