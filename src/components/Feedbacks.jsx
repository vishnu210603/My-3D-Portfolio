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

import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
//   )
// }

// export default Feedbacks;
