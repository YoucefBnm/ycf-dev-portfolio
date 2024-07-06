import {
  ScrollContainer,
  ScrollContainerImages,
  ScrollContainerTexts,
  ScrollContainerTriggers,
} from "@/components/ScrollContainer";

import { servicesContent } from "@/constants/data";

const Services = () => {
  return (
    <section className="px-default py-12">
      <ScrollContainer
        className="flex justify-center items-start w-full"
        content={servicesContent}
      >
        <ScrollContainerTriggers />
        <ScrollContainerTexts />
        <ScrollContainerImages />
      </ScrollContainer>
    </section>
  );
};
// const Services = () => {
//   const [activeItem, setActiveItem] = useState(0);
//   return (
//     <section className="relative">
//       <div className="flex justify-center items-start w-full ">
//         {/* triggers */}
//         <div className=" mt-[10.42em] mb-[20.85em] px-[1vw] top-[16em] z-20 items-start flex flex-col w-1/4 sticky ">
//           {/* if active opacity: 1, 0 */}
//           <motion.a
//             href="#react-service"
//             className=" border-l border-black mb-8 inline-block max-w-full "
//           >
//             <h4>REACT DEVELOPMENT</h4>
//           </motion.a>
//           <motion.a
//             href="#react-service"
//             className=" border-l border-black mb-8 inline-block max-w-full "
//           >
//             <h4>VANILLA JAVASCRIPT</h4>
//           </motion.a>
//           <motion.a
//             href="#react-service"
//             className=" border-l border-black mb-8 inline-block max-w-full "
//           >
//             <h4>DESIGN CONVERSION</h4>
//           </motion.a>
//           <motion.a
//             href="#react-service"
//             className=" border-l border-black mb-8 inline-block max-w-full "
//           >
//             <h4>RESPONSIVE DESIGN</h4>
//           </motion.a>
//         </div>

//         {/* text */}
//         <div className="relative z-10 w-[30%] min-w-[340px] px-[1.39em] mt-[41.7em] ">
//           <div id="react-service" className=" mb-[27.8em] pt-[20.85em]">
//             <div className=" max-w-[800px] before:table before:row-start-1 before:col-start-1 row-end-2 col-end-2">
//               <h3>{servicesContent[0].title}</h3>
//               <p className=" text-neutral-300 mb-[0.5em] tight">
//                 {servicesContent[0].paragraph}
//               </p>
//             </div>
//           </div>

//           <div className=" mb-[27.8em] pt-[20.85em]">
//             <div className=" max-w-[800px] before:table before:row-start-1 before:col-start-1 row-end-2 col-end-2">
//               <h3>{servicesContent[1].title}</h3>
//               <p className=" text-neutral-300 mb-[0.5em] tight">
//                 {servicesContent[1].paragraph}
//               </p>
//             </div>
//           </div>

//           <div className=" mb-[27.8em] pt-[20.85em]">
//             <div className=" max-w-[800px] before:table before:row-start-1 before:col-start-1 row-end-2 col-end-2">
//               <h3>{servicesContent[2].title}</h3>
//               <p className=" text-neutral-300 mb-[0.5em] tight">
//                 {servicesContent[2].paragraph}
//               </p>
//             </div>
//           </div>

//           <div className=" mb-[27.8em] pt-[20.85em]">
//             <div className=" max-w-[800px] before:table before:row-start-1 before:col-start-1 row-end-2 col-end-2">
//               <h3>{servicesContent[3].title}</h3>
//               <p className=" text-neutral-300 mb-[0.5em] tight">
//                 {servicesContent[3].paragraph}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* image */}
//         <div className=" flex top-[8.5em] justify-center z-20 flex-wrap flex-shrink flex-grow-0 basis-auto items-start w-1/2 sticky">
//           <div className="flex flex-col justify-center items-end max-w-full absolute overflow-hidden">
//             <img className=" align-middle" src={servicesContent[0].imageUrl} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

export default Services;
