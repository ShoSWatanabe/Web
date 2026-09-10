import ProjectBlock from "../../../components/HelperBlocks/ProjectBlock";
import coinMouldMain from "../../../assets/projects/Mtrn/coinMould/coinMouldMain.png";
import mouldImg1 from "../../../assets/projects/Mtrn/coinMould/mouldImg1.jpg";
import mouldImg2 from "../../../assets/projects/Mtrn/coinMould/mouldImg2.jpg";
import mouldVid from "../../../assets/projects/Mtrn/coinMould/MouldVid.mp4";

function CoinMould({ isMobile }: { isMobile: boolean }) {
  return (
    <ProjectBlock
      isMobile={isMobile}
      title="Coin mould"
      skills="CAD & Manufacturing"
      image={coinMouldMain}
    >
      <h2>Overview:</h2>
      <p className="text-sm text-gray-700">
        A coin is to be made by injection moulding. To make such mould, 2 parts
        of the mould must come together and close shut leaving a small hole at
        the bottom to insert the molten plastic.
      </p>
      <br />
      <h2>Process:</h2>
      <p className="text-sm text-gray-700">
        The design was made in SOLIDWORKS while engravings where done in
        fusion360. To make sure the 2 pieces combine seamlessly, CAD assemblies
        where made to make sure no colliding parts were present. The machining
        process was also done in fusion360 as shown below, using different tools
        for different removal purposes.
      </p>
      <div className="rounded-[1rem] overflow-hidden">
        <video src={mouldVid} autoPlay loop muted />
      </div>
      <br />
      <h2>Result:</h2>
      <p className="text-sm text-gray-700 mb-[1rem]">
        Finally, the CAD model was CNC machined on a piece of aluminium using
        the same machining process for the physical model. The molten plastic
        was then inserted to the mould to make the coin.
      </p>
      <div
        className={
          isMobile
            ? "flex justify-center gap-6 flex-col"
            : "flex justify-center gap-6"
        }
      >
        <div className="flex flex-col items-center">
          <div className="rounded-[1rem] overflow-hidden">
            <img src={mouldImg1} alt="Physical mould" />
          </div>
          <p>CNCed Physical mould</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-[1rem] overflow-hidden">
            <img src={mouldImg2} alt="Injection moulded coin" />
          </div>
          <p>Injection moulded coin (was mirrored)</p>
        </div>
      </div>
    </ProjectBlock>
  );
}

export default CoinMould;
