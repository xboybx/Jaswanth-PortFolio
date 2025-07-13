import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { lazy, Suspense } from "react";

const Lanyard = lazy(() => import("../../ReactBits/Lanyard/Lanyard"));

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
            {/* Lanyard for Mobile/Tablet - Above content */}
            <motion.div
              variants={itemVariants}
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                <Suspense
                  fallback={
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 animate-spin border-4 border-accent border-t-transparent rounded-full"></div>
                  }
                >
                  <Lanyard
                    position={[0, 0, 25]}
                    fov={25}
                    gravity={[0, -30, 0]}
                  />
                </Suspense>
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

            {/* Lanyard for Desktop - Right column */}
            <div className="relative w-full h-screen min-h-[600px] max-h-none ]">
              <div className="absolute inset-0 z-[20] pointer-events-auto flex items-center justify-center mt-[-50px]">
                <Suspense
                  fallback={
                    <div className=" w-20 h-20 animate-spin border-4 border-accent border-t-transparent rounded-full"></div>
                  }
                >
                  <Lanyard
                    position={[0, 0, 30]}
                    fov={20}
                    gravity={[0, -40, 0]}
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;

// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { lazy, Suspense } from "react";

// const Lanyard = lazy(() => import("../../ReactBits/Lanyard/Lanyard"));

// function Hero() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={inView ? "visible" : "hidden"}
//       variants={containerVariants}
//       className="min-h-screen flex items-center justify-center px-6 lg:px-16"
//     >
//       <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
//         {/* Lanyard Animation for Mobile/Tablet (all screens except desktop) */}
//         <motion.div
//           variants={itemVariants}
//           className="lg:hidden w-full h-[350px] flex items-center justify-center relative"
//           style={{ touchAction: "none" }}
//         >
//           <div className="absolute inset-0 z-10 flex items-center justify-center">
//             <Suspense
//               fallback={
//                 <div className="w-16 h-16 animate-spin border-4 border-accent border-t-transparent rounded-full"></div>
//               }
//             >
//               <Lanyard cardScale={1.2} />
//             </Suspense>
//           </div>
//         </motion.div>

//         <motion.div
//           variants={itemVariants}
//           className="space-y-6 text-center lg:text-left"
//         >
//           <motion.p variants={itemVariants} className="text-accent font-mono">
//             Hi, my name is
//           </motion.p>
//           <motion.h1
//             variants={itemVariants}
//             className="text-6xl lg:text-7xl font-bold text-text-secondary"
//           >
//             Jaswanth
//           </motion.h1>
//           <motion.h2
//             variants={itemVariants}
//             className="text-4xl lg:text-5xl font-bold text-text-primary"
//           >
//             I build things for the web.
//           </motion.h2>
//           <motion.p
//             variants={itemVariants}
//             className="text-lg text-text-primary max-w-xl mx-auto lg:mx-0"
//           >
//             I'm a software developer specializing in building exceptional
//             digital experiences. Currently, I'm focused on building accessible,
//             human-centered products.
//           </motion.p>
//           <motion.div
//             variants={itemVariants}
//             className="flex flex-wrap gap-4 items-center justify-center lg:justify-start"
//           >
//             <a
//               href="./Jaswanth-2024-Resume.pdf"
//               target="_blank"
//               className="btn-primary"
//             >
//               Resume
//             </a>
//             <div className="flex gap-4 ml-2">
//               <a
//                 href="https://github.com/xboybx"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-text-secondary hover:text-accent transition-colors"
//               >
//                 <i className="fab fa-github text-2xl"></i>
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/jjaswanth"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-text-secondary hover:text-accent transition-colors"
//               >
//                 <i className="fab fa-linkedin text-2xl"></i>
//               </a>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Lanyard Animation for Desktop (overlay only left column) */}
//         <div className="relative hidden lg:block w-full h-screen min-h-[600px] max-h-none mt-[-90px]">
//           <div className="absolute inset-0 z-[20] pointer-events-auto flex items-center justify-center">
//             <Suspense
//               fallback={
//                 <div className="w-20 h-20 animate-spin border-4 border-accent border-t-transparent rounded-full"></div>
//               }
//             >
//               <Lanyard cardScale={2.2} />
//             </Suspense>
//           </div>
//           {/* The red background and other content remain here if needed */}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default Hero;
