import { motion } from 'motion/react';
import profileImage from 'app:asset/profilePhoto.png';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
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
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
            <img
              src={profileImage}
              alt="Shubham Agrawal"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div className="flex-1 text-white">
          <motion.p variants={itemVariants} className="text-gray-300 mb-2">
            Software Developer 2
          </motion.p>
          <motion.h1 variants={itemVariants} className="mb-6" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
            Shubham Agrawal
          </motion.h1>
          <motion.p variants={itemVariants} className="text-gray-200 mb-8 max-w-2xl">
            I am a results-driven Software Developer with expertise in RESTful APIs, 
            microservices, and cloud technologies. I excel at optimizing application 
            performance, enhancing security, and resolving complex issues.
          </motion.p>
          <motion.div variants={itemVariants} className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://drive.google.com/file/d/1Ty76hOKOViu3QOuh7knc9Y9gyp6A5pQD/view?usp=drive_link', '_blank')}
              className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-colors"
            >
              Resume
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('mailto:shubhamagrawal322@gmail.com')}
              className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-colors"
            >
              Contact
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
