// import { useState, useRef } from "react"
// import {motion} from 'framer-motion'
// import emailjs from '@emailjs/browser'
// import { styles } from "../styles"
// import { slideIn } from "../utils/motion"
// import { SectionWrapper } from "../hoc"
// import { textVariant } from "../utils/motion"
// import {EarthCanvas} from './canvas'





// function Contacts() {
//   const formRef= useRef();
//   const [form, setForm] = useState({
//     name:" ",
//     email:" ",
//     message:" "
//   });

//   const [loading,setloading]=useState(false);
//   const handleChange=(e) =>{
//     const {name, value}=e.target;
//     setForm({...form , [name]: value})
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setloading(true);


//     emailjs.send(
//       'service_orlh82k',
//     'template_tarwz3z',
//      {
//       from_name: form.name,
//       to_name: 'Vishnu',
//       from_email: form.email,
//       to_email: 'v.techz550@gmail.com',
//       message: form.message,
//      },
//      'E_-JQGdVxix1ikxXu'
//     )
//   .then(()=>{
//     setloading(false);
//     alert('Thank You! I will get back to you soon');
//   setForm({
//     name:'',
//     email:'',
//     message:'',

//   })
//   }, (error)=>{
//     setloading(false)
//     console.log(error);
//     alert ('Something went wrong.')

//   })
//   }

//   return (
//     <div className="xl:mt-1 flex-wrap  flex-col-reverse flex gap-10 overflow-hidden">
//       <motion.div    variants={slideIn("left", "tween", 0.2, 1)}
//       className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
//       <p className={styles.sectionSubText}>| GET IN TOUCH</p>
//       <p className={styles.heroHeadText}>Contacts</p>

//       <form
//   ref={formRef}
//   onSubmit={handleSubmit}
//   className="mt-12 flex flex-col gap-8"
// >
//   <label className="flex flex-col">
//     <span className="text-white font-medium mb-4">Your Name</span>
//     <input
//       type="text"
//       name="name"
//       value={form.name}
//       onChange={handleChange}
//       placeholder="Type your Name"
//       className="bg-tertiary py-6 px-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
//     />
//   </label>
//   <label className="flex flex-col">
//     <span className="text-white font-medium mb-4">E-mail</span>
//     <input
//       type="email"
//       name="email"
//       value={form.email}
//       onChange={handleChange}
//       placeholder="Enter your email id"
//       className="bg-tertiary py-6 px-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
//     />
//   </label>
//   <label className="flex flex-col">
//     <span className="text-white font-medium mb-4">Message</span>
//     <textarea
//       rows={7}
//       name="message"
//       value={form.message}
//       onChange={handleChange}
//       placeholder="Type your Message"
//       className="bg-tertiary py-6 px-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
//     />
//   </label>
//   <button
//   type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
//      {loading? 'Sending...' : 'Send'}
//   </button>
// </form>


//       </motion.div>

//    <motion.div
//    variants={slideIn["right", "tween", 0.2, 1]}
//    className="flex  xl:h-auto md-h-[550px] h-[350px]"
//    ><EarthCanvas/>


//    </motion.div>
      
//     </div>
//   )
// }

// export default SectionWrapper(Contacts, " ")

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_orlh82k',
        'template_tarwz3z',
        {
          from_name: form.name,
          to_name: "Vishnu Yadav",
          from_email: form.email,
          to_email: "v.techz550@gmail.com",
          message: form.message,
        },
        'E_-JQGdVxix1ikxXu'
        
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[1.0] bg-[#9d4edd] w-[800px] h-fit p-4 border-2 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-5 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 h-[150px] placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");