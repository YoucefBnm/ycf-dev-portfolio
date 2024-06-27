import ContainerVelocity from "@/components/ContainerVelocity";
import { Button } from "@/components/ui/button";
import { socialProfiles } from "@/constants/data";
import { useDisplayTime } from "@/hooks/useDisplayTime";

const Footer = () => {
  const formatTime = useDisplayTime();

  return (
    <footer className="py-12 border-t border-zinc-700  ">
      <div className="w-full overflow-hidden text-zinc-600">
        <ContainerVelocity baseVelocity={-10}>
          <h1 className="md:text-9xl">YOUCEF BENMESSABIH &nbsp;</h1>
        </ContainerVelocity>
      </div>

      <div className="mt-12 px-default flex gap-8 justify-between flex-wrap">
        <div className="">
          <p className="text-sm md:max-w-[42ch] text-zinc-400 mb-4">
            Always excited to discuss new projects, job opportunities, or
            collaborations.
          </p>
          <Button variant={"link"} className="p-0 text-white">
            CONTACT
          </Button>
        </div>

        <div className=" text-sm flex flex-wrap md:justify-evenly gap-4">
          <div>
            <span>Based in Algeria 🇩🇿</span>
          </div>
          <div>
            <a href="mailto:ssefbnm@gmail.com">ssefbnm@gmail.com</a>
          </div>
          <div>
            <a href="tel:+213777915747">+213 777 915 747</a>
          </div>
          <ul className="flex gap-4   md:justify-evenly">
            {socialProfiles.map((link) => (
              <li
                className="uppercase transition-colors hover:text-primary-1"
                key={link.id}
              >
                <a href={link.link} target="_blank" rel="noopener noreferrer">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex  flex-col gap-4">
          <div>
            <small>Local Time {formatTime}</small>
          </div>

          <div className="text-zinc-500 leading-tight -indent-2">
            <small>© 2024 Developed by Youcef Bnm | Frontend developer.</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
