import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const experiences = [
  {
    title: "Team Lead & Full Stack Developer",
    company: "Final Year Project",
    date: "Jan 2025 - May 2025",
    description: [
      "Led a team of 4 developers to build a peer-to-peer platform enabling students to teach and learn various skills.",
      "Developed real-time chat and video call features for seamless communication using Socket.io.",
      "Created RESTful APIs and implemented secure user authentication systems.",
      "Gained hands-on experience in scalable architecture, database optimization, and UI/UX best practicesDesigned and developed user registration, search functionality, and matching algorithm to connect learners with teachers.",
      "Tech Stack: JavaScript, React.js, Node.js, Express.js, MongoDB, Tailwind CSS",
    ],
    icon: "🎓",
  },
  {
    title: "Web Development Intern",
    company: "Unified Mentor",
    date: "July 2025 - Sep 2025",
    description: [
      "Independently built and deployed multiple full-stack web applications using the MERN stack.",
      "Developed responsive front-end interfaces with React.js and Tailwind CSS.",
      "Created RESTful APIs and implemented secure user authentication systems.",
      "Gained hands-on experience in scalable architecture, database optimization, and UI/UX best practices.",
      "Tech Stack: JavaScript, React.js, Node.js, Express.js, MongoDB, Tailwind CSS",
    ],
    icon: "💼",
  },
];

function Experience() {
  const [openIndex, setOpenIndex] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const toggleExperience = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-20 px-6 bg-bg-primary"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-text-secondary">
            My Experience
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-bg-secondary p-6 rounded-lg shadow-lg"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="text-2xl mr-4">{exp.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">
                      {exp.title} | {exp.company}
                    </h3>
                    <p className="text-sm text-text-secondary">{exp.date}</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleExperience(index)}
                  className="md:hidden text-text-primary"
                >
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-screen mt-4" : "max-h-0"
                } md:max-h-screen md:mt-4`}
              >
                <ul className="list-disc list-inside mt-4 space-y-2 text-text-primary">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
