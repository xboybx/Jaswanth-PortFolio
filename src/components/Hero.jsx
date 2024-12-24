import { motion } from 'framer-motion';
import { HeroButtons } from './HeroButtons';

function Hero({ onNavigate }) {
  return (
    <div className="h-screen flex items-center">
      <div className="relative z-10 w-full px-6 lg:px-16">
        <div className="w-full max-w-3xl mx-auto">
          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-start md:gap-8">
              {/* Profile Picture */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2,
                }}
                className="self-center md:self-start mb-8 md:mb-0 md:mt-4"
              >
                <div className="relative" style={{ transform: 'translate(0px, 30px)' }}>
                  <motion.div
                    animate={{

                      scale: [1, 1.05, 1],
                      rotate: [0, -3, 3, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                    className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-primary"
                    style={{ borderColor: '#ea4c89' }}
                  >
                    <img
                      src="https://media.licdn.com/dms/image/v2/D4D03AQEzl1O1refb9A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1693640468613?e=2147483647&v=beta&t=xKKy-3-UhrDZmKVQlMBHoWKo_HXYq5ci8oN8W37s_-E"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute -inset-2 border-2 border-dashed border-primary rounded-full"
                  />
                </div>
              </motion.div>
              <br />


              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4 lg:space-y-6 text-center md:text-left flex-1"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-center md:justify-start space-x-4"
                >
                  <span className="text-sm font-medium">Available for work</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight"
                >
                  A Developer
                  <br />
                  <span style={{ color: '#ea4c89' }}>
                    crafting digital experiences.
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-4"
                >
                  <p className="text-base lg:text-lg leading-relaxed">
                    Hello, I am Jaswanth, dedicated software developer skilled in
                    HTML, CSS, JavaScript, React, SQL, and MongoDB. I've explored
                    backend development with Express.js and built projects like a
                    user login system with Passport.js.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <h3 className="font-medium">Frontend</h3>
                      <p className="text-sm text-gray-600">React, HTML, CSS</p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Backend</h3>
                      <p className="text-sm text-gray-600">
                        Node.js, Express, MongoDB
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="pt-2"
                >
                  <HeroButtons onNavigate={onNavigate} />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;





