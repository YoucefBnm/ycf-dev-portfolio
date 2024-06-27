import {
  ClipWrap,
  // ClipWrapBtn,
  ClipWrapImage,
  ClipWrapTags,
  ClipWrapTitle,
} from "@/components/ClipWrap";
import { Button } from "@/components/ui/button";
import { portfolioProjects } from "@/constants/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";

const Work = () => {
  const { scrollRef, scrollYProgress } = useScrollAnimation();

  const projectsArray = Object.values(portfolioProjects);
  const navigate = useNavigate();

  return (
    <section
      ref={scrollRef}
      className="relative"
      style={{ height: `${projectsArray.length + 1}00vh` }}
    >
      <div className="sticky min-h-svh w-full inset-0">
        {projectsArray.map((project, index) => {
          return (
            <ClipWrap
              key={project.id}
              // content={project}
              imageUrl={project.imageUrl}
              title={project.title}
              tagsArray={project.stack}
              progress={scrollYProgress}
              arrayLength={projectsArray.length}
              index={index}
            >
              <ClipWrapImage />

              <div className="absolute px-default bottom-12 overflow-hidden size-full h-fit flex items-center justify-between gap-6 flex-wrap">
                <div className="flex flex-col items-start md:flex-1 gap-4">
                  <ClipWrapTitle />
                  <ClipWrapTags />
                </div>

                <div>
                  <Button
                    className="rounded-full bg-primary-1 text-zinc-900 hover:text-primary-1"
                    size={"lg"}
                    onClick={() => navigate(`/portfolio/${project.id}`)}
                  >
                    View Project
                  </Button>
                </div>
              </div>
            </ClipWrap>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
