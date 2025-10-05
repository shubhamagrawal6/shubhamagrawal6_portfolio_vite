import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import oracleLogo from 'app:asset/oracleLogo.png';
import healthNowLogo from 'app:asset/healthNowLogo.png';
import storyOfMakersLogo from 'app:asset/storyOfMakersLogo.png';

const healthNowCertUrl = import.meta.env.VITE_HEALTHNOW_CERT_URL;
const storyOfMakersCertUrl = import.meta.env.VITE_STORY_OF_MAKERS_CERT_URL;

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      company: 'Oracle Financial Services Software',
      logo: oracleLogo,
      location: 'Bengaluru, IN',
      roles: [
        {
          title: 'Software Developer 2',
          period: 'Sep 24 - Present',
          description: [
            'Enhanced microservices handling core resources by integrating with external systems, enabling extensibility of resource data and ensuring UI-captured modifications are synchronized and persisted across systems.',
            'Designed and implemented SCIM-compliant APIs in the User and Role Management service, enabling seamless migration and provisioning of SSO-managed users into the application.',
            'Redesigned the audit logging framework for microservices by capturing both UTC timestamps and branch context time zones, providing dual UI views for global and localized audit tracking to improve transparency and usability.',
            'Collaborated with cross-functional teams, including development and consulting teams, to deliver rapid solutions for high-severity production issues, minimizing downtime.',
          ],
        },
        {
          title: 'Associate Application Developer',
          period: 'Jul 22 - Sep 24',
          description: [
            'Redesigned the Role-Based Access Control (RBAC) system by moving authorization checks from individual microservices to the API Gateway, leveraging URL and HTTP method mapping for faster interservice requests. Developed a migration strategy to seamlessly transition legacy role records, ensuring zero downtime and no customer impact.',
            'Engineered a high-performance RBAC logging system using Kafka Streams, capturing user access metadata (URL, HTTP method, role, IP, session, status) with minimal request overhead. Designed a buffered, single-threaded publisher in the API Gateway for efficiency, along with a fallback mechanism to guarantee log persistence even during Kafka outages.',
            'Improved performance of Core APIs by fault tolerant caching of resources, reducing redundant interservice calls and latency. Enhanced query efficiency with efficient JPA mappings and database indexing, delivering faster response times and reduced load.',
            'Resolved and implemented over 250 bug fixes and feature enhancements, improving stability, security, and performance across multiple application versions.'
          ],
        },
      ],
    },
    {
      company: 'HealthNow Technologies',
      logo: healthNowLogo,
      location: 'Mumbai, IN',
      roles : [
        {
          title: 'Software Engineer Intern',
          period: 'May 21 - Jul 21',
          description: [
            'Used flutter framework for developing an e-commerce application for both Android and iOS platforms.',
            'Designed pixel-perfect User Interface and worked with a team using Model-View-ViewModel design pattern for the application.',
            'Implemented Login screen and OTP authentication using JSON Web Token.',
          ],
          certificateLink: healthNowCertUrl,
        },
      ],
    },
    {
      company: 'Story Of Makers',
      logo: storyOfMakersLogo,
      location: 'Mumbai, IN',
      roles : [
        {
          title: 'Coding Instructor',
          period: 'Oct 20 - Dec 20',
          description: [
            'Contributed to planning appropriate and engaging lessons learning applications.',
            'Taught diverse student population by employing various learning styles and abilities.',
            'Graded quizzes, tests, homework and projects to provide students with timely academic progress information and feedback.',
          ],
          certificateLink: storyOfMakersCertUrl,
        },
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-white mb-16"
        >
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all hover:bg-white/10"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                      <img src={exp.logo} alt="Company Logo" />
                    </div>
                    <div>
                      <h3 className="text-white">{exp.company}</h3>
                      <p className="text-gray-400">{exp.location}</p>
                    </div>
                  </div>
              </div>

              {exp.roles.map((role, ind) => (
                <div className='mb-6' key={ind}>
                  <div className="flex justify-between items-center mt-4 md:mt-0">
                    <p className="text-white italic">{role.title}</p>
                    <p className="text-gray-400">{role.period}</p>
                  </div>
                  
                  <ul className="space-y-2 text-gray-200">
                    {role.description.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-white mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {('certificateLink' in role) && (
                    <div className="mt-4">
                      <a
                        onClick={() => window.open(role.certificateLink, '_blank')}
                        className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        Certificate Link
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
