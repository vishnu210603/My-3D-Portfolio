import { Tilt } from "react-tilt"
import {motion} from 'framer-motion'
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { github } from "../assets"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { StarsCanvas } from "./canvas"
import BgAnim from './bgAnim'
const ProjectsCard=({index, name, description, tags,  image, source_code_link})=>{
  return(
   
      <motion.div
      variants={fadeIn("right", "spring", 0.5*index, 0.75)}
      >
        
        <Tilt options={{
        max:45,
        speed:450,
        scale:1


        }}className=' bg-primitive shadow-outer shadow-lg shadow-[#9d4edd] border-purple-400 border-1 sm:h-[530px] h-fit rounded-xl border-[1px] p-3 sm:w-[360px] w-full '>


          <div className="relative w-full h-[46%]">
          <img src={image} alt={"title"} className="w-full h-full  object-cover rounded-2xl border-[1px]"/>
          <div className="absolute inset-0 flex justify-end card-img_hover m-3 ">
          
          <div onClick={()=>window.open
            (source_code_link, "_blank")} className="black-gradient w-6 h-6 rounded-full flex justify-center items-center cursor-pointer">
            <img
            src={github}
            alt="github"
            className="w-4 h-4 object-contain"
            />
            </div>
          </div>
          </div>
         <div className="mt-5">
          <h3 className=" text-purple-400 font-bold text-[24px]  ">{name}</h3>
          </div>
          <div className="flex flex-wrap justify-between">
          <div>
          <p className="mt-2 text-secondary  text-[14px] ">{description}</p>
         </div>
        
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag)=>(
              <p key={tag.name} className={`mb-1 text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
          </div>
        </Tilt>

      </motion.div>
    
    
  )
}


const Works=()=> {
  return (
    <div className="">
      
     <motion.div variants={textVariant()}>
     <p className={styles.sectionSubText}>| MY WORKS</p>
     <h2 className={styles.heroHeadText}> Projects  </h2>
    </motion.div>
    <StarsCanvas/>

    <div className="w-full flex">
      <motion.p
        variants={fadeIn(" ", " ", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Following project showcase my skills, learning journey and technical proficiency
        through implementation into real-world projects.
        There is a short description of each project and the links to the github-repo is provided to go through them.
      </motion.p>
      </div>
      <div className=" mt-20 flex flex-wrap  gap-7">{projects.map((project,index)=>(
        <ProjectsCard key={`project-${index}`} index={index}{...project} />
      ))}</div>
    
    </div>
  )
}

export default SectionWrapper(Works, "projects")