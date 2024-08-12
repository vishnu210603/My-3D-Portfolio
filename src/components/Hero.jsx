// import React from 'react';
// import { styles } from '../styles';
// import ComputersCanvas from './canvas/Computers'; 
// import {motion} from 'framer-motion';
// import { StarsCanvas } from './canvas';
// const Hero = () => {
//   return (
//     <section className="relative w-full h-screen mx-auto">
//       <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-purple-500" />
//           <div className="w-1 sm:h-40 h-80 violet-gradient" />
//         </div>
        
//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi! I am <span className="text-[#b026ff]">Vishnu</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I develop 3D visuals, user interfaces <br /> and Web Apps
//           </p>
//         </div>
      
//       </div>
//       <ComputersCanvas />
//       <div className=" relative xs:bottom-10 bottom-32 w-full flex justify-center items-center ">
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'> 
//             <motion.dev
//             animate={{
//               y:[0, 24, 0]
//             }}
//             transition={{
//               duration: 1.5,
//               repeat: Infinity,
//               repeatType: 'loop',
//             }}
//             className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';
import { styles } from '../styles';
import ComputersCanvas from './canvas/Computers';
import { motion } from 'framer-motion';
import { StarsCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Container for the layout */}
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col items-start gap-5">
        
        
        {/* <div className="flex flex-col justify-center items-start mt-5 relative">
        
          <div className="w-5 h-5 rounded-full bg-purple-500 absolute" style={{ top: '-0.5rem' }} />
        
          <div className="w-1 h-80 violet-gradient absolute top-5" />
        </div> */}

        {/* Text container */}
        <div className="flex flex-col items-start mt-5 md:mt-0 relative pl-6">
          <h1 className={`${styles.heroHeadText} text-white text-3xl md:text-5xl`}>
            Hi! I am <span className="text-[#b026ff]">Vishnu</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-sm md:text-base`}>
            I develop 3D visuals, user interfaces <br /> and Web Apps
          </p>
        </div>
      </div>
      
      <ComputersCanvas />

      <div className="relative bottom-10 md:bottom-32 w-full flex justify-center items-center">
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
      
      <StarsCanvas />
    </section>
  );
};

export default Hero;
