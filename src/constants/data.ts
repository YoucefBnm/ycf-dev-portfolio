import {
  ActifeetVideo,
  CssIcon,
  // Es6Icon,
  FigmaIcon,
  FirebaseIcon,
  GitIcon,
  HeroVideo,
  HtmlIcon,
  JavascriptIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
  ServiceUxIcon,
  ShadcnIcon,
  SocialGithubIcon,
  SocialGmailIcon,
  SocialLinkedinIcon,
  SocialXIcon,
  TailwindIcon,
  TypescriptIcon,
  VisiocraftVideo,
  WorkActifeetImage,
  WorkBizadvisorImage,
  WorkKatadysiImage,
  WorkVisiocraftImage,
  ServiceResponsiveIcon,
  ShowcaseGreenTradeHeroImage,
  ShowcaseKatadysiHeroImage,
  ShowcaseGreenTradeFeatureImage,
  ShowcaseVisiocraftHeroImage,
  ShowcaseKatadysiCtaImage,
  ShowcaseActifeetHeroImage,
  ShowcaseActifeetHikingImage,
} from "@/assets";

export const navLinks = [
  {
    id: "nav-link-home",
    title: "HOME",
    route: "/",
  },
  {
    id: "nav-link-work",
    title: "WORK",
    route: "/portfolio",
  },
  {
    id: "nav-link-quote",
    title: "QUOTE",
    route: "/questionnaire",
  },
  {
    id: "nav-link-contact",
    title: "CONTACT",
    route: "/booking",
  },
];

export const heroContent = {
  heading: "youcef bnm frontend developer",
  description:
    "Crafting seamless user experiences with modern web technologies, Creating visually appealing websites. With a focus on clean code and responsive design.",
  videoUrl: HeroVideo,
  route: "/booking",
  label: "Book a Call",
};

export const aboutContent = [
  {
    title: "About",
    description:
      "Youcef Benmessabih, A freelance frontend Developer based in Oran Algeria.",
  },
  {
    title: "speciality",
    description:
      "Specializing in frontend development, Creating user friendly interfaces, With react and its ecosystem, and vanilla Js semantic HTML, and CSS, Tailwind.",
  },
  {
    title: "experience",
    description:
      "With more than three years of experience as a frontend developer, Worked on various projects from different industries",
  },
  {
    title: "mindset",
    description:
      "Focusing on performance optimization, from converting into modern webp images, to limiting API calls and minifying code, Having a good eye for design, I create interactive animations and transitions powerd by framer motion and CSS animations.",
  },
];

export const socialProfiles = [
  {
    id: "about-social-in",
    link: "https://www.linkedin.com/in/youcef-bnm-692392123/",
    icon: SocialLinkedinIcon,
    title: "linkedin",
    label: "linkedin profile",
  },
  {
    id: "about-social-github",
    link: "https://github.com/YoucefBnm/",
    icon: SocialGithubIcon,
    title: "github",
    label: "github profile",
  },
  {
    id: "about-social-x",
    link: "https://x.com/YoucefBnm/",
    title: "x",
    icon: SocialXIcon,
    label: "x profile",
  },
  {
    id: "about-social-email",
    link: "mailto:ssefbnm@gmail.com",
    icon: SocialGmailIcon,
    title: "ssefbnm@gmail.com",
    label: "mail address",
  },
  {
    id: "about-social-phone",
    link: "tel:+213777915747",
    icon: SocialGmailIcon,
    title: "+213 777 915 747",
    label: "phone number",
  },
];

export const showcaseContent = [
  {
    id: "showcase-greentrade-hero-image",
    imageUrl: ShowcaseGreenTradeHeroImage,
    title: "Green Trade",
  },
  {
    id: "showcase-katadysi-hero-image", 
    imageUrl: ShowcaseKatadysiHeroImage,
    title: "Katadysi",
  },
  {
    id: "showcase-greentrade-features-image", 
    imageUrl: ShowcaseGreenTradeFeatureImage,
    title: "Green Trade",
  },

  {
    id: "showcase-visiocraft-hero-image",
    imageUrl: ShowcaseVisiocraftHeroImage,
    title: "Visiocraft",
  },
  {
    id: "showcase-katadysi-cta-image",
    imageUrl: ShowcaseKatadysiCtaImage,
    title: "Katadysi",
  },
  {
    id: "showcase-actifeet-hero-image",
    imageUrl: ShowcaseActifeetHeroImage,
    title: "Actifeet",
  },
  {
    id: "showcase-actifeet-hiking-image",
    imageUrl: ShowcaseActifeetHikingImage,
    title: "Actifeet",
  },
];

export const processContent = [
  {
    id: "process-consultation",
    title: "consultation",
    description:
      "The process begins with an initial consultation to understand your needs, goals, and vision for the project.",
    timing: "20-30 minute session",
    label: "Book a Call",
    route: "/booking",
  },
  {
    id: "process-quaistinnaire",
    title: "planning",
    description:
      "This step involves detailed discussions to gather all necessary information and to align on the project objectives.",
    timing: "5-10 minute to complete",
    label: "Complete Questionnaire",
    route: "/questionnaire",
  },
  {
    id: "process-development",
    title: "development",
    description:
      "Regular updates and reviews are provided throughout this phase to keep you informed of the progress",
    timing: "2-6 weeks to complete",
    label: "Work Highlights",
    route: "/portfolio",
  },
];

export const servicesContent = [
  {
    id: "service-react",
    title: "React Development",
    icon: ReactIcon,
    description:
      "Creating dynamic, high performance web applications using react, and leveraging its ecosystem and optimization tools.",
    route: "/services#service-react",
    paragraph:
      "Specializing in building dynamic, high-performance web applications using React. Ensuring seamless user experiences with interactive interfaces and efficient state management whether its with redux or react context depending on state complexity.",
    stack: ["react", "redux", "context", "api", "css", "sass", "tailwind"],
  },
  {
    id: "service-html-css-js",
    title: "vanilla Js",
    icon: JavascriptIcon,
    description:
      "Using vanilla js and plain html and css to create robust and responsive websites.",
    route: "/services#service-html-css-js",
    paragraph:
      "Creating robust and responsive websites with a strong foundation in HTML, CSS, and JavaScript. Focused on clean code, cross-browser compatibility, and best practices in web development.",
    stack: ["javascript", "html", "css", "sass", "tailwind"],
  },
  {
    id: "service-responsive",
    title: "responsive design",
    icon: ServiceResponsiveIcon,
    description:
      "Ensuring that your website looks great and functions perfectly on all devices.",
    route: "/services#service-responsive",
    paragraph:
      "Ensuring that your website looks great and functions perfectly on all devices, from desktops to mobile phones, is a key priority. I use flexible grid layouts, flexible images, and media queries to create responsive designs that provide an optimal viewing experience for users on any device.",
    stack: ["figma", "css", "sass", "tailwind"],
  },
  {
    id: "service-design-conversion",
    title: "Design Conversion",
    icon: ServiceUxIcon,
    description:
      "Transforming design mockups into fully functional, responsive websites. Ensuring pixel-perfect implementation and preserving design integrity across all devices.",
    route: "/services#service-design-conversion",
    paragraph:
      "Transforming design mockups into fully functional, responsive websites. Ensuring pixel-perfect implementation and preserving design integrity across all devices, whether with react or plain html/css/javascript.",
    stack: ["figma", "ui/ux", "code"],
  },
];

export interface Project {
  id: string;
  heading: string;
  title: string;
  imageUrl: string;
  profile: string;
  services: string[];
  stack: string[];
  highlights: string[];
  route: string;
  label: string;
  videoUrl?: string;
  functionality: string[];
}
export const portfolioProjects: Record<string, Project> = {
  "portfolio-project-actifeet": {
    id: "portfolio-project-actifeet",
    heading: "Actifeet Ecommerce",
    title: "Ecommerce store for athletic shoes",
    imageUrl: WorkActifeetImage,
    profile:
      "Actifeet is a cutting-edge ecommerce platform dedicated to athletic shoes. The site offers a smooth and engaging shopping experience with its dynamic product displays and seamless navigation.",
    services: ["ecommerce", "ux design", "frontend"],
    stack: ["typescript", "react", "redux", "firebase", "tailwind"],
    videoUrl: ActifeetVideo,
    highlights: [
      "Real-time product updates and inventory management with Firebase.",
      "Responsive and visually appealing layouts designed with Tailwind CSS.",
      "Interactive animations and transitions powered by Framer Motion.",
    ],
    functionality: [
      "Responsive Design",
      "User Authentication (firebase auth)",
      "Product Catalog Management",
      "Payment Integration (stripe API)",
    ],
    route: "https://actifeet.netlify.app/",
    label: "Visit Website",
  },
  "portfolio-project-visiocraft": {
    id: "portfolio-project-visiocraft",
    heading: "Visiocraft Design Studio",
    title: "Web design Studio website",
    imageUrl: WorkVisiocraftImage,
    profile:
      "Visiocraft is a sleek and modern website for a design agency, showcasing their portfolio, services, and creative team. The site is designed to reflect the agency's commitment to innovation and high-quality design.",
    services: ["branding", "ux design", "frontend"],
    stack: ["react", "react context", "sass"],
    highlights: [
      "Custom styles and animations with SASS for a unique and polished look.",
      "Intuitive navigation and user-friendly interface developed with React.",
      "Emphasis on visual storytelling to highlight the agency's projects and expertise.",
    ],
    functionality: [
      "Design Focused with web animations with framer motion",
      "Contact Form and booking system",
      "Responsive Design",
      "Pricing Calculation",
    ],
    route: "https://visiocraft.netlify.app",
    label: "Visit Website",
    videoUrl: VisiocraftVideo,
  },
  "portfolio-project-bizadvisor": {
    id: "portfolio-project-bizadvisor",
    heading: "BizAdvisor Consulting Agency",
    title: "Consulting agency landing page",
    imageUrl: WorkBizadvisorImage,
    profile:
      "BizAdvisor is a comprehensive platform designed for a B2B consulting agency. This project demonstrates my proficiency in creating professional and business-oriented web applications using fundamental web technologies.",
    services: ["branding", "ux design", "frontend"],
    stack: ["javascript", "html", "css"],
    highlights: [
      "Professional and business-oriented design.",
      "Efficient and clean user interface.",
      "Enhanced accessibility for business clients.",
    ],
    functionality: [
      "Design Focused with web animations powered by framer motion",
      "Responsive Design",
    ],
    route: "https://visiocraft.netlify.app/",
    label: "Visit Website",
    // videoUrl: "",
  },
  "portfolio-project-katadysi": {
    id: "portfolio-project-katadysi",
    heading: "Katadysi Travel Agency",
    title: "Travel agency Website",
    imageUrl: WorkKatadysiImage,
    profile:
      "Katadysi is a vibrant and engaging website created for a travel agency. This project highlights my ability to use Webflow to design and implement visually appealing and highly functional travel websites.",
    services: ["branding", "ux design"],
    stack: ["figma", "webflow"],
    highlights: [
      "Visually stunning and user-friendly design.",
      "Seamless navigation and immersive user experience.",
      "Detailed display of travel packages and destinations.",
    ],
    functionality: [
      "Design Focused with web animations powered by GSAP",
      "Responsive Design",
    ],
    route: "/",
    label: "Visit Website",
    // videoUrl: "",
  },
};

export const skills = [
  {
    id: "skill-js",
    label: "JavaScript",
    icon: JavascriptIcon,
  },
  {
    id: "skill-Typescript",
    label: "TypeScript",
    icon: TypescriptIcon,
  },
  // {
  //   id: "skill-ES6",
  //   label: "ES6",
  //   icon: Es6Icon,
  // },
  {
    id: "skill-react",
    label: "React",
    icon: ReactIcon,
  },
  {
    id: "skill-redux",
    label: "Redux",
    icon: ReduxIcon,
  },
  {
    id: "skill-Firebase",
    label: "Firebase",
    icon: FirebaseIcon,
  },
  {
    id: "skill-html",
    label: "HTML",
    icon: HtmlIcon,
  },
  {
    id: "skill-css",
    label: "CSS",
    icon: CssIcon,
  },
  {
    id: "skill-Tailwind",
    label: "Tailwind",
    icon: TailwindIcon,
  },
  {
    id: "skill-shadcn",
    label: "Shadcn",
    icon: ShadcnIcon,
  },
  {
    id: "skill-SASS",
    label: "SASS",
    icon: SassIcon,
  },
  {
    id: "skill-figma",
    label: "Figma",
    icon: FigmaIcon,
  },
  {
    id: "skill-Git",
    label: "Git",
    icon: GitIcon,
  },
];

export const questionnaireContent = {
  heading: "Let's build something great together",
  description:
    "This quaistionnaire is aiming to gather all necessary information and to align on the project objectives.",
};
