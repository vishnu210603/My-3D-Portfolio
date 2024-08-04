// import {BrowserRouter} from 'react-router-dom'
// import About from './components/About'
// import Contacts from './components/Contacts'
// import Experience from './components/Experience'
// import Feedbacks from './components/Feedbacks'
// import Hero from './components/Hero'
// import Loader from './components/Loader'
// import Navbar from './components/Navbar'
// import Tech from './components/Tech'
// import Works from './components/Works'
// import StarsCanvas from './components/Loader'




// const App = () => {
//   return (
//     <BrowserRouter>
//     <div className="relative z-0 bg-primary">
//       <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//         <Navbar/>
//         <Hero/>
//       </div>
//       <About/>
//       <Experience/>
//       <Tech/>
//       <Works/>
//     </div>
//     <div className="relative z-0 bg-primary">
//       <Contacts/>
//       <StarsCanvas/>
//     </div>
//     </BrowserRouter>
    
//   )
// }

// export default App

// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import About from './components/About'
// import Hero from './components/Hero';
// import Loader from './components/Loader';
// import Navbar from './components/Navbar';
// import Tech from './components/Tech';
// import Works from './components/Works';
// import Contacts from './components/Contacts'
// import Experience from './components/Experience'
// import StarsCanvas from './components/Loader'; // Verify if this import is correct

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="relative z-0 bg-primary">
//         <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//           <Navbar />
//           <Hero />
//         </div>
//         <About />
//         <Experience />
//         <Tech />
//         <Works />
//       </div>
//       <div className="relative z-0 bg-primary">
//         <Contacts />
//         <StarsCanvas /> {/* Verify if this is the correct component */}
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import About from './components/About';
import Hero from './components/Hero';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Tech from './components/Tech';
import Works from './components/Works';
import Contacts from './components/Contacts';
import Experience from './components/Experience';
import StarsCanvas from './components/canvas/Stars'; // Verify if this import is correct
import Feedbacks from './components/Feedbacks';
import BgAnim from './components/bgAnim';
import Bg from './components/bg';

const App = () => {
  return (
    
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover  bg-repeat bg-center">
        <BgAnim/>
          <Navbar />
          <Hero />
          <About/>
          <Bg/>
          <Feedbacks/>
        <Experience />
        <Tech />
        <Works />
        </div>
      </div>
      <div className="relative z-0 bg-primary">
      <StarsCanvas />
        <Contacts />
        
         {/* Verify if this is the correct component */}
      </div>
    </BrowserRouter>
   
  );
};

export default App;
