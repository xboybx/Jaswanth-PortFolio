import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen">
      {/* Hero Content */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative z-[50] min-h-screen flex items-center justify-center px-6 lg:px-16"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Mobile and Tablet Layout */}
          <div className="lg:hidden flex flex-col items-center text-center space-y-8">
            {/* Profile Photo for Mobile/Tablet - Above content */}
            <motion.div
              variants={itemVariants}
              className="w-full h-[300px] sm:h-[300px] md:h-[450px] flex items-center justify-center"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src="/jaswanthh.jpg"
                  alt="Profile"
                  className="rounded-xl shadow-2xl w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Content Section for Mobile/Tablet */}
            <motion.div variants={itemVariants} className="space-y-6 max-w-2xl">
              <motion.p
                variants={itemVariants}
                className="text-accent font-mono"
              >
                Hi, my name is
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-secondary"
              >
                Jaswanth
              </motion.h1>
              <motion.h2
                variants={itemVariants}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary"
              >
                I build things for the web.
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-text-primary max-w-xl mx-auto"
              >
                I'm a software developer specializing in building exceptional
                digital experiences. Currently, I'm focused on building
                accessible, human-centered products.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 items-center justify-center"
              >
                <a
                  href="./Jaswanth-2024-Resume.pdf"
                  target="_blank"
                  className="btn-aurora"
                >
                  Resume
                </a>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/xboybx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass"
                  >
                    <i className="fab fa-github text-2xl"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jjaswanth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass"
                  >
                    <i className="fab fa-linkedin text-2xl"></i>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Section for Desktop */}
            <motion.div
              variants={itemVariants}
              className="space-y-6 text-left lg:mt-16"
            >
              <motion.p
                variants={itemVariants}
                className="text-accent font-mono"
              >
                Hi, my name is
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="text-7xl font-bold text-text-secondary"
              >
                Jaswanth
              </motion.h1>
              <motion.h2
                variants={itemVariants}
                className="text-5xl font-bold text-text-primary"
              >
                I build things for the web.
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-text-primary max-w-xl"
              >
                I'm a software developer specializing in building exceptional
                digital experiences. Currently, I'm focused on building
                accessible, human-centered products.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-6 items-center"
              >
                <a
                  href="./Jaswanth-2024-Resume.pdf"
                  target="_blank"
                  className="btn-aurora"
                >
                  Resume
                </a>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/xboybx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass"
                  >
                    <i className="fab fa-github text-2xl"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jjaswanth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass"
                  >
                    <i className="fab fa-linkedin text-2xl"></i>
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Profile Photo for Desktop - Right column */}
            <div className="relative w-full h-screen min-h-[400px] max-h-none flex items-center justify-center">
              <img
                src="/jaswanthh.jpg"
                alt="Profile"
                className="rounded-xl shadow-2xl w-[400px] h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
