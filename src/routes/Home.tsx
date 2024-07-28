import About from "@/sections/About";
import Process from "@/sections/Process";
import Showcase from "@/sections/Showcase";
import Skills from "@/sections/Skills";
import Services from "@/sections/Services";
import Work from "@/sections/Work";
import { heroContent } from "@/constants/data";
import {
  HeroContainer,
  HeroCta,
  HeroDescription,
  HeroHeading,
  HeroVideo,
  HeroWrap,
} from "@/components/HeroContainer";
import RouteTransition from "@/hoc/RouteTransition";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {Helmet} from "react-helmet";
import { HomeBanner } from "@/assets";

const Home = () => {
  const navigate = useNavigate();
  const navigateToBooking = () => navigate("/booking");

  return (
    <>
      <Helmet>
        <title>YCF Dev - Frontend Developer Portfolio | Expert in React, Vite, and TypeScript</title>
        <meta name="description" content="Welcome to YCF Dev, your go-to expert for frontend development using React, Vite, and TypeScript. Explore innovative projects and web solutions." />
        <meta name="keywords" content="frontend developer, React, Vite, TypeScript, Html, CSS, Javascript, Tailwind, Ecommerce, Portfolio, web developer in algeria, web solutions, YCF Dev" />
        <meta property="og:title" content="YCF Dev - Expert Frontend Developer" />
        <meta property="og:description" content="Discover YCF Dev's expertise in frontend development, including React, Vite, and TypeScript projects." />
        <meta property="og:image" content={HomeBanner} />
        <meta property="og:url" content="https://ycfdev.netlify.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YCF Dev - Expert Frontend Developer" />
        <meta name="twitter:description" content="Explore YCF Dev's portfolio and innovative web solutions." />
        <meta name="twitter:image" content={HomeBanner} />
        <meta name="twitter:url" content="https://ycfdev.netlify.app" />
      </Helmet>
      <HeroContainer content={heroContent}>
        <HeroWrap>
          <HeroHeading />

          <div className="flex mb-8 px-default justify-between items-end">
            <HeroDescription />
            <HeroCta>
              <Button
                onClick={navigateToBooking}
                variant={"secondary"}
                size={"sm"}
                className="bg-primary-1 rounded-full text-xs"
              >
                GET STARTED
              </Button>
            </HeroCta>
          </div>
        </HeroWrap>
        <HeroVideo />
      </HeroContainer>
      
      <About />
      <Work />
      <Services />
      <Showcase />
      <Process />
      <Skills />
    </>
  );
};

const AsyncHome = RouteTransition(Home);
export default AsyncHome;
