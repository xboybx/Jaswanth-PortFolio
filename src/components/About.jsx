import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Experience from "./Experience";

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React"],
      color: "#FF6B6B",
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python"],
      color: "#4ECDC4",
    },
    { category: "Database", items: ["MongoDB", "SQL"], color: "#45B7D1" },
    {
      category: "Tools",
      items: ["Git", "VS Code", "Postman"],
      color: "#96CEB4",
    },
    {
      category: "AI Tools",
      items: ["ChatGPT", "GitHub Copilot", "Claude", "Gemini"],
      color: "#9B59B6",
    },
  ];

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

  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="min-h-screen py-20 px-6 bg-bg-primary mt-16"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-text-secondary">
              About Me
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </motion.div>

          <div className="space-y-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg text-text-primary">
                <p className="mb-6 text-lg leading-relaxed">
                  I'm a forward-thinking software developer passionate about
                  creating exceptional digital experiences. With expertise in
                  modern web technologies, I specialize in building responsive
                  and user-friendly applications.
                </p>
                <p className="mb-6 text-lg leading-relaxed">
                  My journey in tech has led me to work on diverse projects,
                  from user authentication systems to comprehensive student
                  management platforms. I believe in writing clean, maintainable
                  code and staying updated with the latest industry trends.
                </p>
                <p className="text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, and
                  pursuing my passion for music creation.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className=" lg:grid grid-cols-2 "
            >
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className=" p-3 rounded-lg"
                >
                  <h3 className="text-xl font-bold mb-2 text-accent">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-text-secondary rounded-full text-sm transition-all duration-300"
                        style={{
                          border: `1px solid ${skillGroup.color}`,
                          boxShadow: `0 0 10px ${skillGroup.color}40`,
                          backgroundColor: `${skillGroup.color}10`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
      <Experience />
    </>
  );
}

export default About;
