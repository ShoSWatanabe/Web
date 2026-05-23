import React, { useState } from "react";
import up from "../../assets/projects/up.svg";
import down from "../../assets/projects/down.svg";

type ProjectBlockProp = {
  children: React.ReactNode;
  title: string;
  skills: string;
  isMobile: boolean;
  image: string;
};

function ProjectBlock({
  children,
  title,
  skills,
  isMobile,
  image,
}: ProjectBlockProp) {
  // Store the index of the media to cycle between them
  const [show, setShow] = useState<boolean>(false);

  const headerStyle =
    "flex items-center hover:bg-gray-100 rounded-t-[1rem] px-5 py-4";
  return (
    <>
      <div className="mb-2 border-[2px] rounded-[1rem] border-gray-200">
        <div
          className={show ? headerStyle : headerStyle + " rounded-b-[1rem]"}
          onClick={() => setShow((prev) => !prev)}
        >
          <div
            className={
              isMobile
                ? "flex justify-between w-full" + " flex-col mb-2 items-center"
                : "flex justify-between w-full"
            }
          >
            <div>
              <h2 className="text-[1.2rem]">{title}</h2>
              <h3 className="text-gray-500 mb-3">{skills}</h3>
            </div>
            <div
              className="w-55 rounded-[1rem] overflow-hidden mr-5 object-cover shadow-md flex items-center justify-center"
              style={{ aspectRatio: "16 / 9" }}
            >
              <img src={image} alt="project-image" className="" />
            </div>
          </div>
          <div className="w-7 aspect-square">
            {show ? (
              <img src={up} alt="close-tab" />
            ) : (
              <img src={down} alt="open-tab" />
            )}
          </div>
        </div>
        {show && (
          <div className="border-t-[2px] border-gray-200 px-4 py-4">
            {children}
          </div>
        )}
      </div>
    </>
  );
}
export default ProjectBlock;
