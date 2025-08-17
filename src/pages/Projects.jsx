import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const Projects = () => {
  const projectData = [
    {
      title: "NLCS RAG",
      img: "/project1.jpeg",
      github: "https://github.com/NoMindDev/agay",
      demo: "https://drive.google.com/file/d/1Tx5cbMuj9UiEsvz_Q0swo09iKuprr0zo/view?usp=sharing",
    },
    {
      title: "ZeeBar Resort",
      img: "/project3.jpeg",
      github: "https://github.com/Ugyen00/ZeebarResort",
      demo: "https://www.zeebarresort.bt/",
    },
    {
      title: "BATIF",
      img: "/project2.jpeg",
      github: "https://github.com/yourusername/project3",
      demo: "https://batif.vercel.app/",
    },
  ];

  return (
    <div className='flex flex-col items-center my-24 px-4 sm:px-8 md:px-16'>
      {/* Heading */}
      <motion.h1
        className='text-3xl sm:text-4xl font-bold mb-2 text-center'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={0}
      >
        My Projects
      </motion.h1>

      <motion.p
        className='text-md sm:text-xl text-[#5F5F5F] opacity-65 text-center'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={1}
      >
        Explore My Projects
      </motion.p>

      {/* Projects Grid */}
      <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className='flex flex-col border border-[#8A6FE8] p-6 sm:p-8 rounded-xl items-center space-y-4 shadow-md'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={index + 2}
          >
            <img
              src={project.img}
              alt={project.title}
              className='rounded-xl w-full max-w-[280px] h-auto object-cover'
            />

            <h1 className='font-bold text-lg sm:text-xl text-center'>
              {project.title}
            </h1>

            {/* Buttons */}
            <div className='flex space-x-4'>
              <div
                className="p-[1px] rounded-full bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] inline-block hover:shadow-lg transition"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 sm:px-6 py-2 text-sm sm:text-base bg-white rounded-full hover:bg-transparent hover:text-white transition-all duration-300 w-full h-full cursor-pointer">
                    GitHub
                  </button>
                </a>
              </div>

              <div
                className="p-[1px] rounded-full bg-[conic-gradient(at_center,_#8A6FE8,_#B388EB,_#A176E8,_#7C5FE9,_#8A6FE8)] inline-block hover:shadow-lg transition"
              >
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 sm:px-6 py-2 text-sm sm:text-base bg-white rounded-full hover:bg-transparent hover:text-white transition-all duration-300 w-full h-full cursor-pointer">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;