import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    cpp,
    meta,
    starbucks,
    tesla,
    shopify,
    movie,
    emp,
    pantry,
    threejs,
    mysql,
    powerbi,
    H,
    YBI,
    V,
    Hy,
    db,
    crypto,
    p3
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },

    {
      id: "education",
      title: "Education",
    },

    {
      id: "work",
      title: "Work",
    },

    {
      id: "tech",
      title: "Skills",
    },

    {
      id: "projects",
      title: "Projects",
    },

    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Development",
      icon: web,
    },
    {
      title: "Analytics",
      icon: mobile,
    },
    {
      title: "Data Structures and Algorithms",
      icon: backend,
    },
    {
      title: "C++",
      icon: creator,
    },
  ];
  
  const technologies = [


    {
      name: "C++",
      icon: cpp,
    },

    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    
   
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "SQL",
      icon: mysql,
    },

    {
      name: "Power BI",
      icon: powerbi,
    },

   
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
   
  ];
  
  const experiences = [
    {
      title: "SWE 7-weeks Fellowship",
      company_name: "Headstarter.ai",
      icon: H,
      iconBg: "#383E56",
      date: "July 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participated in various hackathons and live challenges under the time constraints",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Reactjs Development Interrnship",
      company_name: "VeriTech IT Software Services",
      icon: V,
      iconBg: "#E6DEDD",
      date: "Feb 2024 - Mar 2024 ",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Business Analyst Internship",
      company_name: "Hype Intern",
      icon: Hy,
      iconBg: "#383E56",
      date: "Jul 2024 - Aug 2024",
      points: [
        "Utilized the datset to extract raw-data and performed the data cleaning, data pre-processing and drawn various insights out of the well-structred data.",
        "Data Extraction and Data manipulation to draw the conclusions and get the insights into the business problems",
        "Structured arrangement , preparation and presentation of the conclusions by mode of story-telling.",
        
      ],
    },
    {
      title: "Business Analyst Internship",
      company_name: "YBI Foundation",
      icon: YBI,
      iconBg: "#E6DEDD",
      date: "Jun 2024 - Jul 2024",
      points: [
        "Completed various tasks based projects over the whole duration of internship.",
        "Utilized the provided datsets to implement data extraction and data manipulation to draw the conclusions and get the insights into the business problems",
        "Structured arrangement , preparation and presentation of the conclusions by mode of story-telling.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Bachelors of Technology (B.Tech)",
      name: "Indian Institute of Technology, Roorkee",
      date: "(2021-25)",
      image: "https://cdn.dribbble.com/users/1036545/screenshots/2491401/iitr_dribbble.png",
    },

    {
      testimonial:
        "Senior Secondary School (Intermediate)",
      name: "Purvanchal Public School, Gorakhpur",
      date: "(2019-21)",
      image: "https://img.freepik.com/premium-photo/anime-scene-building-with-street-trees-front-it-generative-ai_958124-7043.jpg",
    },
    
    {
      testimonial:
        "Secondary School (Matriculate)",
      name: "Purvanchal Public School, Gorakhpur",
      date: "(2017-19)",
      image: "https://img.freepik.com/premium-photo/anime-scene-building-with-street-trees-front-it-generative-ai_958124-7043.jpg",
    },
  ];
  
  const projects = [


    {
      name: "Pantry Tracker App",
      description:
        "User-login and athentication enabled Hassle-free pantry/grocery organizer and tracker with search feature implemented to search the items in stock. This webApp is Built using Nextjs, Firebase, Tailwind and Reactjs.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: pantry,
      source_code_link: "https://github.com/vishnu210603/pantry-tracker-app",
    },


    {
      name: "Crypto Currency Live Price Tracker",
      description:
        "Real-time visualization tool for cryptocurrency Dynamic and up-to-date information on price fluctuations, market capitalization, trading volume, and more.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "coinGeckoAPI",
          color: "pink-text-gradient",
        },
      ],
      image: crypto,
      source_code_link: "https://github.com/vishnu210603/Crypto-Currencies-Price-Tracker",
    },

    {
      name: "Data Analytics and Visualization Job Simulation ",
      description:
        "Data Extraction , data manipulation and relational datasets analysis through VLOOKUP, INDEX-MATCH, conditional formatting and filtering to cleanse and standardise the datasets using SQL queries, and Excel VBA",
      tags: [
        {
          name: "mysql",
          color: "blue-text-gradient",
        },
        {
          name: "ms-excel",
          color: "green-text-gradient",
        },
        {
          name: "vlookup",
          color: "pink-text-gradient",
        },
      ],
      image: p3,
      source_code_link: "https://github.com/",
    },

    {
      name: " Employee Retention Strategies Analysis in pharmaceutical industry",
      description:
        "Created predictive models and implemented Data Visualization tools to hypothetically reduced turnover by increasing employee satisfaction. ",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "numpy",
          color: "green-text-gradient",
        },
        {
          name: "ml",
          color: "pink-text-gradient",
        },
      ],
      image: emp,
      source_code_link: "https://github.com/",
    },

    {
      name: " Data-Driven Sales Analysis",
      description:
        "Performed a well-structured analysis of the raw sale data from a seller, performed data cleaning, data pre-processing and created a visually appealing yet simplistic and insights-giving dashboard. ",
      tags: [
        {
          name: "powerBI",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "green-text-gradient",
        },
        {
          name: "Excel",
          color: "pink-text-gradient",
        },
      ],
      image: db,
      source_code_link: "https://github.com/vishnu210603/DATA-DRIVEN-SALES-ANALYSIS",
    },

   
    {
      name: " Movie-Recommendation System",
      description:
        "This movie recommendation project offers personalized movie suggestions using a combination of machine learning algorithms and data analytics. Built with Python and libraries such as scikit-learn, Numpy and Pandas. ",
      tags: [
        {
          name: "scikit",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "numpy",
          color: "pink-text-gradient",
        },
      ],
      image: movie,
      source_code_link: "https://github.com/vishnu210603/Movie_Recommendation_System",
    },

   


    
  ];
  
  export { services, technologies, experiences, testimonials, projects };