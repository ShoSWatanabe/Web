import me from "../assets/me.JPG";

function Home({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="h-[calc(100vh-5rem-8rem)] flex items-center justify-center px-[min(40px,5vw)] gap-[min(40px,5vw)]">
      <div className="w-[min(50vw,400px)] aspect-square rounded-full overflow-hidden">
        <img
          src={me}
          alt="Sho Watanabe"
          className="object-cover aspect-square"
        />
      </div>
      <div>
        <p className="text-gray-500">Hello, I am</p>
        <h1 className="text-5xl font-bold text-gray-800">Sho Watanabe</h1>
      </div>
    </div>
  );
}
export default Home;
