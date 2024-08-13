// import { motion } from "framer-motion"
// import { SectionWrapper } from "../hoc"
// import { styles } from "../styles"
// import { fadeIn, textVariant } from "../utils/motion"
// import { testimonials } from "../constants"
// import { useState } from "react"
// import { Tilt } from "react-tilt"

// const FeedbackCard=({index, testimonial, name, date, company,image})=>(
//   <motion.div
//   variants={fadeIn(" ", "spring", index*0.5, 0.75)}
//   className="bg-primary p-0 rounded-2xl flex flex-wrap justify-evenly xs:w-[320px] xs:h-[390px] w-full h-fit border-2">

// <Tilt options={{
//         max:45,
//         speed:450,
//         scale:1

//         }} className=' bg-primitive shadow-outer shadow-lg shadow-[#9d4edd] border-purple-400 border-2  rounded-xl p-3  sm:w-[360px] w-full h-full '>
//     <img 
//       src={image}
//       alt={`feedback by ${name}`}
//       className="w-full h-[50%] rounded-xl flex justify-center object-top border-2"
//       />
//     <div className="mt-1">
//     <p className="text-white text-[20px] text-bold">{testimonial}</p>
    
//     <div className="mt-0 flex justify-between items-center gap-0">
//       <div className="flex-1 flex flex-col">
//         <p>
//         {name}
//         </p>
//         <p className="mt-0 text-white text-[16px] text-bold">
//           {date}
//         </p>
//       </div>
      
//       </div>
//     </div>
//   </Tilt>
//   </motion.div>
// )

// const Feedbacks=()=> {
//   return (
//     <div className="mx-24  rounded-[10px]">
//       <div className={`${styles.padding}  rounded-xl min-h-[100px]`}>
//         <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>| ACADEMICS</p>
//           <p className={styles.heroHeadText}>Education.</p>
//         </motion.div>
//       </div>
//       <div className={`${styles.paddingX} mt-1 p-1 flex flex-wrap gap-7`}>
//         {testimonials.map((testimonial, index) => (
//         <FeedbackCard
//         key={testimonial.name}
//         index={index}
//         {...testimonial}/>
//         ))}
//       </div>
//     </div>

//       )
//     }

//     export default Feedbacks


import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { useState } from "react";
import { StarsCanvas } from "./canvas";
import { Tilt } from "react-tilt";

const FeedbackCard = ({ index, testimonial, name, date, company, image }) => (
  <motion.div
    variants={fadeIn(" ", "spring", index * 0.5, 0.75)}
    className="bg-primitive shadow-outer shadow-lg shadow-[#9d4edd] border-purple-400  sm:h-[530px] h-fit rounded-xl border-[1px]  sm:w-[360px] w-full"
  >
    <Tilt
      options={{
        max: 45,
        speed: 450,
        scale: 1,
      }}
      className="bg-primitive shadow-outer shadow-lg shadow-[#9d4edd] border-purple-400  rounded-xl p-3 w-full h-full"
    >
      <img
        src={image}
        alt={`feedback by ${name}`}
        className="w-full h-[50%] rounded-xl object-cover border-2"
      />
      <div className="mt-2 flex flex-col h-cover">
        <p className="text-white text-[14px] sm:text-[16px] md:text-[20px] font-medium sm:font-bold">
          {testimonial}
        </p>
        <div className="mt-auto flex justify-between items-center gap-2">
          <div className="flex-1 flex flex-col">
            <p className="text-white text-[12px] sm:text-[14px] md:text-[16px] font-semibold">
              {name}
            </p>
            <p className="mt-1 text-white text-[10px] sm:text-[12px] md:text-[14px]">
              {date}
            </p>
          </div>
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mx-4 sm:mx-12 lg:mx-24 rounded-[10px]">
      <div className={`${styles.padding} rounded-xl min-h-[100px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>| ACADEMICS</p>
          <p className={styles.heroHeadText}>Education.</p>
        </motion.div>
        
      </div>
      <div className={`${styles.paddingX} mt-8 p-4 flex flex-wrap gap-7 justify-center`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
