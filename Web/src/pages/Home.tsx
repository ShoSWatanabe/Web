import me from "../assets/me.JPG";

function Home({ isMobile }: { isMobile: boolean }) {
  const mainStyle =
    "h-[calc(100vh-5rem-8rem)] flex items-center justify-center px-[min(40px,5vw)] gap-[min(40px,5vw)]";
  const imgStyle = "aspect-square rounded-full overflow-hidden";
  return (
    <div className={isMobile ? mainStyle + " flex-col" : mainStyle}>
      <div
        className={
          isMobile ? imgStyle + " w-[60vw]" : imgStyle + " w-[min(50vw,500px)]"
        }
      >
        <img
          src={me}
          alt="Sho Watanabe"
          className="object-cover aspect-square"
        />
      </div>
      <div>
        <p className="text-gray-500">Hello, I am</p>
        <h1 className="text-[min(4rem,7vw)] font-bold text-gray-800">
          Sho Watanabe
        </h1>
      </div>
    </div>
  );
}
export default Home;
