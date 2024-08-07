import {
  ScrollTabContent,
  ScrollTabTrigger,
  ScrollTabWrap,
  ScrollTabs,
} from "@/components/ScrollTab";
import { aboutContent } from "@/constants/data";

const About = () => {
  return (
    <section className="px-default place-content-center">
      <ScrollTabs
        className="flex flex-col justify-center"
        arrayLength={aboutContent.length}
      >
        {aboutContent.map((content, index) => (
          <ScrollTabWrap
            key={content.title}
            className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center"
          >
            <ScrollTabTrigger index={index} className="uppercase basis-1/2">
              <h2 className="text-primary-1">{content.title}</h2>
            </ScrollTabTrigger>

            <ScrollTabContent index={index} className="basis-1/3">
              <p className="text-sm md:text-base">{content.description}</p>
            </ScrollTabContent>
          </ScrollTabWrap>
        ))}
      </ScrollTabs>
    </section>
  );
};

export default About;
