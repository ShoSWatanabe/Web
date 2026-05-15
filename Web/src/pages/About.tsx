import { useEffect, useState } from "react";

import unswLogo from "../assets/unsw/unswlogo.png";
import antLogo from "../assets/ant61/antlogo.jpg";
import groupIAC from "../assets/ant61/antPic1.jpg";
import groupPhoto1 from "../assets/ant61/antPic2.jpg";
import beaconName from "../assets/ant61/antPic3.jpg";
import groupPhoto2 from "../assets/ant61/antPic4.jpg";
import beacon from "../assets/ant61/antPic5.jpg";

function About({ isMobile }: { isMobile: boolean }) {
  const photos = [groupPhoto1, groupPhoto2, groupIAC, beacon, beaconName];
  const [photoIndex, setPhotoIndex] = useState<number>(1);

  useEffect(() => {
    const id = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 5000);

    return () => clearInterval(id);
  }, []);

  const headerStyle = "flex justify-between";
  const h1Style = "font-bold text-gray-800 text-[2rem]";
  return (
    <div className="px-[min(40px,5vw)] py-[2rem] flex flex-col items-center">
      {/* Experience section */}
      <section className="w-[min(700px,90vw)] mb-10">
        <h1 className={h1Style}>Experience</h1>
        <div className="px-4 py-2">
          <div
            className={
              isMobile
                ? headerStyle + " flex-col mb-2"
                : headerStyle + " items-center"
            }
          >
            <div className="flex items-center">
              <img
                src={antLogo}
                alt="antLogo"
                className="w-[30px] aspect-square rounded-[10%]"
              />
              <h2 className="text-[1.2rem] ml-2">ANT61 - Mechanical Intern</h2>
            </div>
            <h3 className="text-gray-500">February 2025 - September 2025</h3>
          </div>
          <ul className="list-disc px-4 mb-5">
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
          <div className="flex justify-center w-full">
            <div
              className="w-[min(550px,90%)] overflow-hidden flex justify-center items-center rounded-[1.5rem]"
              style={{ aspectRatio: "14 / 9" }}
            >
              <div>{/* circle thingy for index */}</div>
              {photos.map((p, index) =>
                index == photoIndex ? (
                  <img
                    src={p}
                    alt={"image " + p}
                    className="object-cover animate-slide-in-out-left "
                  />
                ) : (
                  <></>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Education section */}
      <section className="w-[min(700px,90vw)]">
        <h1 className={h1Style}>Education:</h1>
        <div className="px-4 py-2">
          <div
            className={
              isMobile
                ? headerStyle + " flex-col mb-2"
                : headerStyle + " items-center"
            }
          >
            <div className="flex items-center">
              <img
                src={unswLogo}
                alt="unswLogo"
                className="w-[30px] aspect-square rounded-[10%]"
              />

              <h2 className="text-[1.2rem] ml-2">UNSW</h2>
            </div>
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
