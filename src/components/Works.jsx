// import { Tilt } from "react-tilt"
// import {motion} from 'framer-motion'
// import { styles } from "../styles"
// import { SectionWrapper } from "../hoc"
// import { github } from "../assets"
// import { projects } from "../constants"
// import { fadeIn, textVariant } from "../utils/motion"
// import { StarsCanvas } from "./canvas"
// import BgAnim from './bgAnim'
// const ProjectsCard=({index, name, description, tags,  image, source_code_link})=>{
//   return(
   
//       <motion.div
//       variants={fadeIn("right", "spring", 0.5*index, 0.75)}
//       >
        
//         <Tilt options={{
//         max:45,
//         speed:450,
//         scale:1

<<<<<<< HEAD
        }}className=' bg-primitive shadow-outer shadow-lg shadow-[#9d4edd] border-purple-400 border-1 sm:h-[530px] h-fit rounded-xl border-[1px] p-3 sm:w-[360px] w-full '>
=======
//         }}className=' bg-primitive shadow-outer shadow-lg shadow-[#9d4edd] border-purple-400 border-1 sm:h-[530px] h-fit rounded-xl border-[1px] p-3 sm:w-[360px] w-full '>
>>>>>>> 47e9438e7194217cd4bed198b7130c4b683073b4

//           <div className="relative w-full h-[46%]">
//           <img src={image} alt={"title"} className="w-full h-full  object-cover rounded-2xl border-[1px]"/>
//           <div className="absolute inset-0 flex justify-end card-img_hover m-3 ">
          
//           <div onClick={()=>window.open
//             (source_code_link, "_blank")} className="black-gradient w-6 h-6 rounded-full flex justify-center items-center cursor-pointer">
//             <img
//             src={github}
//             alt="github"
//             className="w-4 h-4 object-contain"
//             />
//             </div>
//           </div>
//           </div>
//          <div className="mt-5">
//           <h3 className=" text-purple-400 font-bold text-[24px] ">{name}</h3>
//           <p className="mt-2 text-secondary  text-[14px] ">{description}</p>
//          </div>
//           <div className="mt-4 flex flex-wrap gap-2">
//             {tags.map((tag)=>(
//               <p key={tag.name} className={`mb-1 text-[14px] ${tag.color}`}>
//                 #{tag.name}
//               </p>
//             ))}
//           </div>

//         </Tilt>

//       </motion.div>
    
    
//   )
// }


// const Works=()=> {
//   return (
//     <div>
      
//      <motion.div variants={textVariant()}>
//      <p className={styles.sectionSubText}>| MY WORKS</p>
//      <h2 className={styles.heroHeadText}> Projects  </h2>
//     </motion.div>


//     <div className="w-full flex">
//       <motion.p
//         variants={fadeIn(" ", " ", 0.1, 1)}
//         className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
//       >
//         Following project showcase my skills, learning journey and technical proficiency
//         through implementation into real-world projects.
//         There is a short description of each project and the links to the github-repo is provided to go through them.
//       </motion.p>
//       </div>
//       <div className=" mt-20 flex flex-wrap  gap-7">{projects.map((project,index)=>(
//         <ProjectsCard key={`project-${index}`} index={index}{...project} />
//       ))}</div>
    
//     </div>
//   )
// }

// export default SectionWrapper(Works, "work")

import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
