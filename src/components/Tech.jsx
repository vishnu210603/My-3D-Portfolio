// import React from 'react';
// import { styles } from '../styles';
// import { fadeIn, textVariant } from '../utils/motion'
// import BallCanvas from './canvas/Ball'; // Ensure the correct import path
// import { SectionWrapper } from '../hoc'; // Ensure this is correctly defined
// import { technologies } from '../constants'; // Ensure this is correctly defined
// import { motion } from 'framer-motion';
// import { StarsCanvas } from "./canvas"


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

// export default SectionWrapper(Tech, 'tech');






// import React from 'react';
// import { styles } from '../styles';
// import { fadeIn, textVariant } from '../utils/motion';
// import BallCanvas from './canvas/Ball'; // Ensure the correct import path
// import { SectionWrapper } from '../hoc'; // Ensure this is correctly defined
// import { technologies } from '../constants'; // Ensure this is correctly defined
// import { motion } from 'framer-motion';
// import { StarsCanvas } from "./canvas";

// const Tech = () => {
//   return (
//     <section className="relative w-full h-screen flex flex-col items-center justify-center">
//       <motion.div variants={textVariant()} className="text-center">
//         <p className={styles.sectionSubText}>| SKILLS</p>
//         <h2 className={styles.heroHeadText}>Technologies.</h2>
//       </motion.div>

//       <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
//         {technologies.map((technology) => (
//           <div className='w-28 h-28 mt-5' key={technology.name}>
//             <BallCanvas icon={technology.icon} />
//           </div>
//         ))}
//       </div>
      
      
//     </section>
//   );
// };

// export default SectionWrapper(Tech, 'tech');



import React from 'react';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import BallCanvas from './canvas/Ball'; // Ensure the correct import path
import { SectionWrapper } from '../hoc'; // Ensure this is correctly defined
import { technologies } from '../constants'; // Ensure this is correctly defined
import { motion } from 'framer-motion';
import { StarsCanvas } from "./canvas";

const Tech = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center">
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>| SKILLS</p>
        <h2 className={styles.heroHeadText}>Technologies.</h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28 mt-5' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

     
    </section>
  );
};

export default SectionWrapper(Tech, 'tech');
