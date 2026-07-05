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
            I'm a passionate Software Development Engineer with experience building scalable, 
            cloud-native applications from the ground up. My journey in software development 
            began during my B.Tech in Electronics and Telecommunication, where I discovered my 
            love for coding and problem-solving.
          </p>
          
          <p>
            Currently working as a System Development Engineer 1 at Amazon's GREF Tech org, I 
            specialize in building full-stack platforms on AWS — designing backend services in 
            Python and FastAPI, infrastructure as code with CDK, and React-based frontends. I have 
            hands-on experience across the stack, from database design to auto-scaling compute and 
            CI/CD pipelines.
          </p>

          <p>
            I'm driven by the challenge of solving non-obvious, cross-system problems — whether 
            that's designing around platform limitations, building configuration-driven systems 
            that scale without code changes, or improving operational reliability through 
            automation and monitoring.
          </p>

          <p>
            Beyond my current role, I bring experience from Oracle Financial Services, where I 
            worked on microservices architecture, API security, and high-performance logging 
            systems, resolving 250+ bugs and feature enhancements across the platform.
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
