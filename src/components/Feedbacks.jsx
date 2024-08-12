import { motion } from "framer-motion"
import { SectionWrapper } from "../hoc"
import { styles } from "../styles"
import { fadeIn, textVariant } from "../utils/motion"
import { testimonials } from "../constants"
import { useState } from "react"
import { Tilt } from "react-tilt"

const FeedbackCard=({index, testimonial, name, date, company,image})=>(
  <motion.div
  variants={fadeIn(" ", "spring", index*0.5, 0.75)}
  className="bg-primary p-0 rounded-2xl flex flex-wrap justify-evenly xs:w-[320px] xs:h-[390px] w-full h-fit border-2">

<Tilt options={{
        max:45,
        speed:450,
        scale:1

        }} className=' bg-primitive shadow-outer shadow-lg shadow-[#9d4edd] border-purple-400 border-2  rounded-xl p-3  sm:w-[360px] w-full h-full '>
    <img 
      src={image}
      alt={`feedback by ${name}`}
      className="w-full h-[50%] rounded-xl flex justify-center object-top border-2"
      />
    <div className="mt-1">
    <p className="text-white text-[20px] text-bold">{testimonial}</p>
    
    <div className="mt-0 flex justify-between items-center gap-0">
      <div className="flex-1 flex flex-col">
        <p>
        {name}
        </p>
        <p className="mt-0 text-white text-[16px] text-bold">
          {date}
        </p>
      </div>
      
      </div>
    </div>
  </Tilt>
  </motion.div>
)

const Feedbacks=()=> {
  return (
    <div className="mx-24  rounded-[10px]">
      <div className={`${styles.padding}  rounded-xl min-h-[100px]`}>
        <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>| ACADEMICS</p>
          <p className={styles.heroHeadText}>Education.</p>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} mt-1 p-1 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
        <FeedbackCard
        key={testimonial.name}
        index={index}
        {...testimonial}/>
        ))}
      </div>
    </div>

      )
    }

    export default Feedbacks