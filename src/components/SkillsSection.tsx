import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Java', 'Python', 'C++', 'SQL'],
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['Spring', 'Hibernate', 'JPA', 'Apache Kafka'],
    },
    {
      category: 'Cloud & DevOps',
      skills: ['Oracle Cloud Infrastructure', 'Docker', 'Kubernetes', 'Jenkins'],
    },
    {
      category: 'Databases',
      skills: ['Oracle', 'MySQL', 'PostgreSQL', 'MongoDB'],
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'Maven', 'Gradle', 'Postman', 'JIRA', 'Confluence'],
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-white mb-16"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all hover:bg-white/10"
            >
              <h3 className="text-white mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-white/10 text-white rounded-full border border-white/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
