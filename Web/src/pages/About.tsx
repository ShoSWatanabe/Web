import AboutBlock from "../components/about/AboutBlock";

// vip media
import vipLogo from "../assets/vip/vipLogo.png";
import vid1 from "../assets/vip/vid1 (1).mp4";
import vid2 from "../assets/vip/vid2 (1).mp4";

// MtrnSoc media
import mtrnlogo from "../assets/mtrnsoc/mtrnlogo.jpg";
import mtrnPic1 from "../assets/mtrnsoc/mtrnPic1.jpg";
import mtrnPic2 from "../assets/mtrnsoc/mtrnPic2.jpg";
import mtrnPic3 from "../assets/mtrnsoc/mtrnPic3.jpg";
import mtrnPic4 from "../assets/mtrnsoc/mtrnPic4.JPG";
import mtrnPic5 from "../assets/mtrnsoc/mtrnPic5.jpg";
import mtrnPic6 from "../assets/mtrnsoc/mtrnPic6.jpg";

// UNSW media
import unswLogo from "../assets/unsw/unswlogo.png";

// Ant61 media
import antLogo from "../assets/ant61/antlogo.jpg";
import groupIAC from "../assets/ant61/antPic1.jpg";
import groupPhoto1 from "../assets/ant61/antPic2.jpg";
import beaconName from "../assets/ant61/antPic3.jpg";
import groupPhoto2 from "../assets/ant61/antPic4.jpg";
import beacon from "../assets/ant61/antPic5.jpg";
import beaconVib from "../assets/ant61/antPic6.jpg";

function About({ isMobile }: { isMobile: boolean }) {
  const vipVid = [vid1, vid2];

  const ant61Photos = [
    groupPhoto1,
    beaconVib,
    groupIAC,
    beacon,
    groupPhoto2,
    beaconName,
  ];

  const mtrnsocPhotos = [
    mtrnPic1,
    mtrnPic2,
    mtrnPic3,
    mtrnPic4,
    mtrnPic5,
    mtrnPic6,
  ];

  const headerStyle = "flex justify-between";
  return (
    <div className="px-[min(40px,5vw)] py-[2rem] flex flex-col items-center">
      {/* Experience section */}
      <section className="w-[min(700px,90vw)]">
        <h1 className="font-bold text-gray-800 text-[2rem]">Experience</h1>

        {/* vip rescue */}
        <AboutBlock media={vipVid} isVid={true}>
          <div
            className={
              isMobile
                ? headerStyle + " flex-col mb-2"
                : headerStyle + " items-center"
            }
          >
            <a
              className="flex items-center hover:bg-gray-200 px-2 py-1 rounded-[0.5rem]"
              href="https://www.unsw.edu.au/challeng/vertically-integrated-projects/explore-vertically-integrated-projects/ai-4-everyone"
              target="_blank"
            >
              <img
                src={vipLogo}
                alt="vipLogo"
                className="w-[30px] aspect-square rounded-[10%]"
              />
              <h2 className="text-[1.2rem] ml-2">UNSW - Robots@Rescue</h2>
            </a>
            <h3 className="text-gray-500">February 2026 - November 2026</h3>
          </div>
          <ul className="list-disc px-4">
            <li>
              Used ROS2 inside of Linux to control a robotic dog (unitree go2).
            </li>
            <li>
              Documented the setup guide of ROS2 using WSL on windows device
            </li>
          </ul>
        </AboutBlock>

        {/* ant61 */}
        <AboutBlock media={ant61Photos} isVid={false}>
          <div
            className={
              isMobile
                ? headerStyle + " flex-col mb-2"
                : headerStyle + " items-center"
            }
          >
            <a
              className="flex items-center hover:bg-gray-200 px-2 py-1 rounded-[0.5rem]"
              href="https://www.ant61.com/"
              target="_blank"
            >
              <img
                src={antLogo}
                alt="antLogo"
                className="w-[30px] aspect-square rounded-[10%]"
              />
              <h2 className="text-[1.2rem] ml-2">ANT61 - Mechanical Intern</h2>
            </a>
            <h3 className="text-gray-500">February 2025 - September 2025</h3>
          </div>
          <ul className="list-disc px-4">
            <li>
              Designed testing boxes for electrical components to be put on the
              beacon/product using 3D printers.
            </li>
            <li>
              Researched and planned the potting procedure to insulate the
              electrical components inside the beacon and experimented with the
              potting ratio, curing temperatures and vacuum pumping.
            </li>
            <li>
              Designed a new chassis for the beacon to comply with PC104 cubesat
              standards using CAD
            </li>
            <li>
              Designed potting plugs to stop leakages from the beacon from
              electrical connectors using CAD and made engineering drawings to
              be manufactured in PTFE
            </li>
          </ul>
        </AboutBlock>

        {/* mtrnsoc */}
        <AboutBlock media={mtrnsocPhotos} isVid={false}>
          <div
            className={
              isMobile
                ? headerStyle + " flex-col mb-2"
                : headerStyle + " items-center"
            }
          >
            <a
              className="flex items-center hover:bg-gray-200 px-2 py-1 rounded-[0.5rem]"
              href="https://www.ramsocunsw.org/"
              target="_blank"
            >
              <img
                src={mtrnlogo}
                alt="mtrnlogo"
                className="w-[30px] aspect-square rounded-[10%]"
              />
              <h2 className="text-[1.2rem] ml-2">UNSW MtrnSoc/RamSoc Subcom</h2>
            </a>
            <h3 className="text-gray-500">February 2024 - November 2024</h3>
          </div>
          <p className="mb-1 ml-3">
            I participated in various events organised by the society listed
            below.
          </p>
          <ul className="list-disc px-4 mb-5">
            <li>
              <u>Sumobots event:</u> Participated to help run a 8 week long
              event to build the best sumobot which had 150+ participants, 31
              teams. Got to peer mentor 2 groups where one of the groups came
              1st place.
            </li>
            <li>
              <u>Buildathon event:</u> Participated to help run a 6 week long
              event to address one of the SDG problems, had 170+ participants,
              29 teams and $1500 in prizes. Presented the introduction of the
              event, rules and laser cutting procedures and helped set up and
              run the showcase event.
            </li>
            <li>
              <u>Ottobot workshops:</u> Taught groups of highschool students on
              how to make the bot, connect the arduino components together and
              code the design.
            </li>
          </ul>
        </AboutBlock>
      </section>

      {/* Education section */}
      <section className="w-[min(700px,90vw)]">
        <h1 className="font-bold text-gray-800 text-[2rem]">Education:</h1>
        <div className="px-4 py-2">
          <div
            className={
              isMobile
                ? headerStyle + " flex-col mb-2"
                : headerStyle + " items-center"
            }
          >
            <a
              className="flex items-center hover:bg-gray-200 px-2 py-1 rounded-[0.5rem]"
              href="https://www.unsw.edu.au/"
              target="_blank"
            >
              <img
                src={unswLogo}
                alt="unswLogo"
                className="w-[30px] aspect-square rounded-[10%]"
              />

              <h2 className="text-[1.2rem] ml-2">UNSW</h2>
            </a>
            <h3 className="text-gray-500">2023 - Current</h3>
          </div>
          <ul className="list-disc px-4">
            <li>
              Bachelor of Engineering (Mechatronics) Bachelor of Science
              (Computer Science)
            </li>
            <li>WAM: 85+ (High Distinction)</li>
            <li>Dean's list for 2024 & 2025</li>
          </ul>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </section>
    </div>
  );
}
export default About;
