import Linkedin from "../assets/linkedin.svg";

function FooterBar() {
  return (
    <div className="w-full h-[8rem] bg-gray-100  flex items-center justify-around">
      <section>
        <h3 className="font-bold pb-2">Email</h3>
        <p>sho.se.watanabe@gmail.com</p>
      </section>
      <section>
        <h3 className="font-bold pb-2">Follow me</h3>
        <a
          href="https://www.linkedin.com/in/sho-watanabe-84633a334?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Linkedin} alt="LinkedIn" height={"20px"} width={"20px"} />
        </a>
      </section>
      <section className="text-sm text-gray-500">
        &copy; 2026 Sho Watanabe.
      </section>
    </div>
  );
}
export default FooterBar;
