import React from 'react';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion'
import BallCanvas from './canvas/Ball'; // Ensure the correct import path
import { SectionWrapper } from '../hoc'; // Ensure this is correctly defined
import { technologies } from '../constants'; // Ensure this is correctly defined
import { motion } from 'framer-motion';



const Tech = () => {
  return (
    <motion.div variants={textVariant()}>
     <p className={styles.sectionSubText}>| SKILLS</p>
     <h2 className={styles.heroHeadText}>Technologies.  </h2>
    
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      
      <div className=''></div>
      {technologies.map((technology) => (
        <div className='w-28 h-28 mt-10' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </motion.div>
  );
};

export default SectionWrapper(Tech, 'tech');