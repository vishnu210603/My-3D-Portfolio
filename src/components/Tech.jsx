<<<<<<< HEAD
import React from 'react';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion'
import BallCanvas from './canvas/Ball'; // Ensure the correct import path
import { SectionWrapper } from '../hoc'; // Ensure this is correctly defined
import { technologies } from '../constants'; // Ensure this is correctly defined
import { motion } from 'framer-motion';
=======
// import {BallCanvas} from './canvas'
// import { SectionWrapper } from '../hoc'
// import { technologies } from '../constants'
// function Tech() {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28 ' key={technology.name}>
//           <BallCanvas icon={technology.icon} />
      
//       Tech
//     </div>
//       ))}
//       </div>
//  )
//  }

// export default Tech

// import React from 'react';
// import { styles } from '../styles';
// import { fadeIn, textVariant } from '../utils/motion'
// import BallCanvas from './canvas/Ball'; // Ensure the correct import path
// import { SectionWrapper } from '../hoc'; // Ensure this is correctly defined
// import { technologies } from '../constants'; // Ensure this is correctly defined
// import { motion } from 'framer-motion';
>>>>>>> 47e9438e7194217cd4bed198b7130c4b683073b4


// const Tech = () => {
//   return (
//     <motion.div variants={textVariant()}>
//      <p className={styles.sectionSubText}>| SKILLS</p>
//      <h2 className={styles.heroHeadText}>Technologies.  </h2>
    
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
      
//       <div className=''></div>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28 mt-10' key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//     </motion.div>
//   );
// };

// export default SectionWrapper(Tech, 'tech'); // Ensure SectionWrapper is correctly used

import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
