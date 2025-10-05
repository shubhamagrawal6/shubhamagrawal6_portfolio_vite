import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="min-h-screen py-20 px-6 flex items-center">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-white mb-12"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 space-y-6 text-gray-200"
        >
          <p>
            I'm a passionate Software Developer with over 3 years of experience building 
            scalable and efficient applications. My journey in software development began 
            during my B.Tech in Electronics and Telecommunication, where I discovered my 
            love for coding and problem-solving.
          </p>
          
          <p>
            Currently working as a Software Developer 2 at Oracle Financial Services, I 
            specialize in building microservices architectures, RESTful APIs, and cloud-native 
            applications. I have a strong foundation in Java, Spring Boot, and cloud technologies, 
            with hands-on experience in Oracle Cloud Infrastructure.
          </p>

          <p>
            I'm driven by the challenge of optimizing application performance and enhancing 
            security. Throughout my career, I've successfully resolved over 250 bugs and 
            implemented numerous feature enhancements, always striving to deliver high-quality, 
            maintainable code.
          </p>

          <p>
            Beyond coding, I enjoy sharing knowledge with others. My experience as a Coding 
            Instructor at Story Of Makers allowed me to help students develop their programming 
            skills and discover their passion for technology.
          </p>

          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to 
            open-source projects, or learning about the latest trends in cloud computing and 
            artificial intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
