import ProjectBlock from "../../../components/HelperBlocks/ProjectBlock";
import CurtainMain from "../../../assets/projects/Mtrn/curtainOpener/CurtainOpenerMain.jpg";
import CurtainTop from "../../../assets/projects/Mtrn/curtainOpener/CurtainOpenerTop.jpg";
import web from "../../../assets/projects/Mtrn/curtainOpener/web.png";
import cad1 from "../../../assets/projects/Mtrn/curtainOpener/cad1.png";
import cad2 from "../../../assets/projects/Mtrn/curtainOpener/cad2.png";

function CurtainOpener({ isMobile }: { isMobile: boolean }) {
  return (
    <ProjectBlock
      isMobile={isMobile}
      title="Automatic Curtain Opener"
      skills="CAD & ESP32 & Frontend"
      image={CurtainMain}
    >
      <h2>Overview:</h2>
      <p className="text-sm text-gray-700 py-2">
        Me who finds it hard to wake up early (yea...), thought making an
        automatic curtain opener would help me out. Having an ESP32 lying
        around, I thought of using a combination of 3D printed elements with my
        LEGO bricks to make the overall shape where the motor I used was the
        SG90-360-degree servo.
      </p>

      <h2>CAD:</h2>
      <p className="text-sm text-gray-700 py-2">
        First thing I did was to work on the servo holder/frame to be 3D
        printed. I also made sure this block had 2 holes so that it can be
        connected with my LEGO pieces. After that was done, I then moved on to
        the loading barrel to be connected to the servo using the servo horn/arm
        and a screw. I also added a hole in the middle of the barrel (Bottom
        right of 2nd image) so that I can pass in a rope and tie it so the rope
        becomes stuck inside.
      </p>
      <div
        className={
          isMobile
            ? "flex justify-center gap-6 flex-col"
            : "flex justify-center gap-6"
        }
      >
        <div className="flex flex-col items-center">
          <div className="rounded-[1rem] overflow-hidden w-[85%]">
            <img src={cad2} alt="CAD: Frame + Servo" />
          </div>
          <p>Frame + Servo</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-[1rem] overflow-hidden w-[80%]">
            <img src={cad1} alt="CAD: Frame + Servo + Barrel" />
          </div>
          <p>Frame + Servo + Barrel</p>
        </div>
      </div>

      <br />
      <br />

      <div
        className={
          isMobile
            ? "flex justify-center gap-6 flex-col items-center"
            : "flex justify-center gap-6 items-center"
        }
      >
        <div className="flex flex-col">
          <h2>Combining 3D printed elements + LEGO:</h2>
          <p className="text-sm text-gray-700 py-2">
            After 3D printing the frame and barrel, I used LEGO bricks to build
            around and secure it. I've also added a empty space above for the
            ESP32 to sit inside. Apart from this, I also made a small weight on
            the rope so that when unwinding the barrel, the rope is released
            without tangle. A limiter was also added to make sure the weight
            doesn't slide off to the curtain and get stuck.
          </p>
          <br />
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-[1rem] overflow-hidden w-[90%]">
            <img src={CurtainTop} alt="Top view of motor, frame and barrel" />
          </div>
          <p>Top view</p>
        </div>
      </div>

      <h2>Control:</h2>
      <p className="text-sm text-gray-700 py-2">
        Using the built in Bluetooth (BLE) of ESP32, I've made it so that any
        device that has blutooth enabled on the browsing web, can control the
        ESP32 as long as you are near it. The controller web using React +
        Typescript can be accessed using this{" "}
        <a target="_blank" href="https://curtain-opener-deploy.vercel.app/">
          <u>link</u>
        </a>
        . Opening it up should look something like the image below where you can
        set up when you want the curtain to open as well as also checking the
        current state and running simple commands. The full code for the ESP32 &
        Frontend can be seen in github{" "}
        <a
          target="_blank"
          href="https://github.com/ShoSWatanabe/Curtain-Opener"
        >
          <u>here</u>
        </a>
        .
      </p>

      <div className="overflow-hidden rounded-[1rem] mx-[5%] flex justify-center">
        <img src={web} alt="UR5e sim picture" width="70%" />
      </div>

      <br />

      <h2>Video demo:</h2>
    </ProjectBlock>
  );
}

export default CurtainOpener;
