// import React from "react";
// import {Tilt} from "react-tilt";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { services } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";

// const ServiceCard = ({ index, title, icon }) => (
  
//   <Tilt className='xs:w-[250px]  w-full'>   
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className='w-full shadow-[#b026ff] p-[1px] rounded-[20px] border-[1px] shadow-card'
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border-1'
//       > 
        
//         <img
//           src={icon}
//           alt='web-development'
//           className='w-16 h-16 object-contain'
//         />

//         <h3 className='text-white text-[20px] font-bold text-center'>
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

// const About = () => {
//   return (
    
//       <div className="">
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}> | About</p>
//         <h2 className={styles.sectionHeadText}>Overview.</h2>
//       </motion.div>
//       <div className="flex gap-20">
      
//       <motion.p
//         variants={fadeIn("", "", 0.1, 1)}
//         className='mt-5 text-secondary text-[18px] max-w-xl h-[50%] py-20 gap-80 '
//       >
//         I am a developer with experience in
//         JavaScript and expertise in frameworks like Reactjs. 
//         I am a quick learner and can replicate the UI designs to the real-world applications.My expertise in Tailwind CSS allows me to build sleek, maintainable styles quickly, while my proficiency with Framer Motion ensures smooth, high-quality animations that bring applications to life. <br></br>
//         <div className="mt-10">
//         <span className="text-[#b026ff] text-[24px] font-bold my-7 ">Let's work together! <br></br>  </span> <span className="text-[#fff] text-[24px] font-bold my-7 ">to bring your ideas to life...</span>
//         </div>
//       </motion.p>
//       <div>
//       <img src="https://static.vecteezy.com/system/resources/previews/024/658/980/non_2x/3d-male-character-sitting-on-a-sofa-and-working-on-a-laptop-with-thinking-pose-free-png.png" className="h-[85%] w-fit py-0"/>
//       </div>
//       </div>
//       <div className=' flex flex-wrap gap-10'>
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//         </div>
//       </div>
    
//   );
// };

// export default SectionWrapper(About, "about");

// // import React from "react";
// // import {Tilt} from "react-tilt";
// // import { motion } from "framer-motion";

// // import { styles } from "../styles";
// // import { services } from "../constants";
// // import { SectionWrapper } from "../hoc";
// // import { fadeIn, textVariant } from "../utils/motion";

// // const ServiceCard = ({ index, title, icon }) => (
// //   <Tilt className='xs:w-[250px] w-full'>
// //     <motion.div
// //       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
// //       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
// //     >
// //       <div
// //         options={{
// //           max: 45,
// //           scale: 1,
// //           speed: 450,
// //         }}
// //         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
// //       >
// //         <img
// //           src={icon}
// //           alt='web-development'
// //           className='w-16 h-16 object-contain'
// //         />

// //         <h3 className='text-white text-[20px] font-bold text-center'>
// //           {title}
// //         </h3>
// //       </div>
// //     </motion.div>
// //   </Tilt>
// // );

// // const About = () => {
// //   return (
// //     <>
// //       <motion.div variants={textVariant()}>
// //         <p className={styles.sectionSubText}>Introduction</p>
// //         <h2 className={styles.sectionHeadText}>Overview.</h2>
// //       </motion.div>

// //       <motion.p
// //         variants={fadeIn("", "", 0.1, 1)}
// //         className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
// //       >
// //         I'm a skilled software developer with experience in TypeScript and
// //         JavaScript, and expertise in frameworks like React, Node.js, and
// //         Three.js. I'm a quick learner and collaborate closely with clients to
// //         create efficient, scalable, and user-friendly solutions that solve
// //         real-world problems. Let's work together to bring your ideas to life!
// //       </motion.p>

// //       <div className='mt-20 flex flex-wrap gap-10'>
// //         {services.map((service, index) => (
// //           <ServiceCard key={service.title} index={index} {...service} />
// //         ))}
// //       </div>
// //     </>
// //   );
// // };

// // export default SectionWrapper(About, "about");


import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-full w-full sm:w-[250px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full shadow-[#b026ff] p-[1px] rounded-[20px] border-[1px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-6 sm:px-12 min-h-[280px] flex justify-evenly items-center flex-col border-1'
      >
        <img
          src={icon}
          alt={title}
          className='w-12 h-12 sm:w-16 sm:h-16 object-contain'
        />
        <h3 className='text-white text-[16px] sm:text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className='px-4 sm:px-4 lg:px-8'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>| About</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 mt-4">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='text-secondary text-[16px] sm:text-[18px] max-w-full sm:max-w-xl'
        >
          I am a developer with experience in JavaScript and expertise in frameworks like Reactjs. I am a quick learner and can replicate the UI designs to real-world applications. My expertise in Tailwind CSS allows me to build sleek, maintainable styles quickly, while my proficiency with Framer Motion ensures smooth, high-quality animations that bring applications to life.
          <br />
          <div className="mt-5">
            <span className="text-[#b026ff] text-[20px] sm:text-[24px] font-bold">Let's work together!</span>
            <span className="text-[#fff] text-[20px] sm:text-[24px] font-bold ml-2">to bring your ideas to life...</span>
          </div>
        </motion.p>
        <div className="flex justify-center items-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/024/658/980/non_2x/3d-male-character-sitting-on-a-sofa-and-working-on-a-laptop-with-thinking-pose-free-png.png"
            className="w-full sm:w-[300px] lg:w-[400px] h-auto"
            alt="Developer working"
          />
        </div>
      </div>
      <div className='flex flex-wrap gap-4 mt-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
