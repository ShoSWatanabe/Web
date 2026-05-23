import React, { useEffect, useState } from "react";

type AboutBlockProp = {
  children: React.ReactNode;
  media: string[];
  isVid: boolean;
};

function AboutBlock({ children, media, isVid }: AboutBlockProp) {
  // Store the index of the media to cycle between them
  const TIME_INTERVAL = 7000;
  const [photoIndex, setPhotoIndex] = useState<number>(1);
  useEffect(() => {
    const id = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % media.length);
    }, TIME_INTERVAL);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="px-4 py-2  mb-10">
        {children}
        <div className="flex justify-center w-full mt-5">
          <div
            className="w-[min(550px,90%)] overflow-hidden flex justify-center items-center rounded-[1.5rem] relative"
            style={{ aspectRatio: "14 / 9" }}
          >
            <div className="flex justify-center gap-2 absolute bottom-[7%] z-10">
              {/* circle thingy for index */}
              {media.map((_, index) =>
                index == photoIndex ? (
                  <div
                    key={index}
                    className="w-[10px] aspect-square rounded-full bg-gray-200 "
                  ></div>
                ) : (
                  <div
                    key={index}
                    className="w-[10px] aspect-square rounded-full bg-gray-200/50 "
                  ></div>
                ),
              )}
            </div>
            {/* If media is a img, then use the img tag. Else use vid tag */}
            {!isVid
              ? media.map((p, index) =>
                  index == photoIndex ? (
                    <img
                      src={p}
                      alt={"image " + p}
                      key={index}
                      className="h-full w-full object-cover animate-slide-in-out-left "
                    />
                  ) : (
                    <div key={index}></div>
                  ),
                )
              : media.map((p, index) =>
                  index == photoIndex ? (
                    <video
                      key={index}
                      src={p}
                      className="h-full w-full object-cover animate-slide-in-out-left"
                      autoPlay
                      muted
                      playsInline
                    />
                  ) : (
                    <div key={index}></div>
                  ),
                )}
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutBlock;
