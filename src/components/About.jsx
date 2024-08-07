// import React from 'react'
// import {Tilt} from 'react-tilt';
// import {motion} from 'framer-motion'
// import { styles } from '../styles';
// import {services} from '../constants'
// import {fadeIn , textVariant} from '../utils/motion'
// import { SectionWrapper } from '../hoc';
// // import { StarsCanvas } from '../assets/';
// import Dev from '../assets/Dev.png'
// const ServiceCard=({index, title, icon})=>{
//     return(
//       <Tilt
//       className="relative xs:w-[250px] w-full py-[110px]">
//         <motion.div
//         variants={fadeIn("right", "spring", 0.5*index, 0.75)}
//         className='w-full  shadow-[#fff] shadow-xl p-[1px] rounded-[15px] shadow-card'
//         >
//           <div options={{
//           max:45,
//           speed:450,
//           scale:1

//           }}className='bg-tertiary min-h-[280px] justify-evenly items-center flex flex-col px-12 py-5 rounded-[20px]'>
//             <img src={icon} alt={title} className="w-20 h-20 object-contain"/>
//             <h2 className=" text-white text-bold text-[20px] text-center">{title}</h2>
//           </div>

//         </motion.div>
//       </Tilt>
      
//     )
// }
// function About() {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={styles.heroSubText}>| INTRODUCTION</p>
//         <h1 className={styles.heroHeadText} >Overview</h1>

//       </motion.div>
//       <motion.p
//       variants={fadeIn(" ", " ", 0.1, 1) } className="mt-4 w-[50%] h-cover border-2 flex jsutify-center items-center gap-10 text-secondry text-[20px] leading-[30px]">
//         <div className='relative w-[100%] h-[100%] border-2 gap-100 flex'>
//         I am a skilled Software Developer with experience in C++
//         Additionally! have explored frameworks like Reactjs,
//         three.js and hands-on experience witth analytical
//         tools Excel, Power BI, MySQL 
//         I am a quick learner and collaborate closely with the teams to 
//         create efficient, scalable and user-friendly solutions to solve real-world  problems. Let's work together 
//         </div>

//         <div className='absolute w-[30%] h-cover border-2'>
//         <img src="https://iwconnect.com/wp-content/uploads/2023/02/Peter_Doxcelo_02__1_-removebg-preview-1.png"
//         className=' h-[65%] w-full object-center'/>
//         </div>

        

//       </motion.p>
//       <div className="relative mt-20 flex flex-wrap gap-10">{services.map((service,index)=>(
//         <ServiceCard key={service.title} index={index}{...service} />
//       ))}</div>
//     </>
//   )
// }

// export default SectionWrapper(About, "about")

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
//       className='w-full shadow-lg shadow-[#b026ff] p-[1px] rounded-[20px] border-[1px] shadow-card'
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
//         I'm a developer with experience in
//         JavaScript and expertise in frameworks like Reactjs. 
//         I'm a quick learner and can replicate the UI designs to the real-world applications. My expertise in Tailwind CSS allows me to build sleek, maintainable styles quickly, while my proficiency with Framer Motion ensures smooth, high-quality animations that bring applications to life. Let's work together to bring your ideas to life!
//       </motion.p>
//       <div>
//       <img src="https://static.vecteezy.com/system/resources/previews/024/658/980/non_2x/3d-male-character-sitting-on-a-sofa-and-working-on-a-laptop-with-thinking-pose-free-png.png" className="h-[70%] w-fit py-0"/>
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

import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
