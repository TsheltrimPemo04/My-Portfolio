import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const About = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row my-24 px-4 sm:px-8 md:px-16 items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center"
        variants={itemVariants}
      >
        <motion.img
          src="/coolpemo.webp"
          alt="Profile"
          className="rounded-3xl shadow-xl w-full max-w-[280px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]"
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="w-full md:w-2/3 md:ml-12 space-y-6"
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.div className="space-y-1 text-center md:text-left" variants={itemVariants}>
          <h1 className="text-3xl sm:text-4xl font-bold">About Me</h1>
          <p className="text-md sm:text-xl text-[#5F5F5F] opacity-65">Get To Know Me</p>
        </motion.div>

        {/* Experience & Education Cards */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-between"
          variants={containerVariants}
        >
          {/* Experience */}
          <motion.div
            className="flex-1 flex flex-col rounded-2xl border border-[#8A6FE8] px-6 py-6 space-y-1 justify-center items-center shadow-md"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <img src="/experiences.svg" width={25} height={25} alt="Experience" />
            <h1 className="font-bold text-lg">Experience</h1>
            <p className="text-sm text-[#5F5F5F] opacity-65">2+ years</p>
            <p className="text-sm text-[#5F5F5F] opacity-65">NoMindBhutan</p>
          </motion.div>

          {/* Education */}
          <motion.div
            className="flex-1 flex flex-col rounded-2xl border border-[#8A6FE8] px-6 py-6 space-y-1 justify-center items-center shadow-md"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <img src="/education.svg" width={25} height={25} alt="Education" />
            <h1 className="font-bold text-lg">Education</h1>
            <p className="text-sm text-[#5F5F5F] opacity-65">B.Sc. in CS</p>
            <p className="text-sm text-[#5F5F5F] opacity-65">Spec. AI & Data Science</p>
          </motion.div>
        </motion.div>

        {/* Bio */}
        <motion.p
          className="text-sm sm:text-base text-center md:text-left text-gray-700 max-w-3xl"
          variants={itemVariants}
        >
          I am currently pursuing a Bachelor’s degree in Computer Science with a specialization in Artificial Intelligence and Data Science at Gyalpozhing College of Information Technology, Bhutan.
          With a blend of creativity and logic, I aim to push boundaries through innovation and purposeful design.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default About;