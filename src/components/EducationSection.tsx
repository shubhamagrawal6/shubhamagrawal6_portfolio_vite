import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import vjtiLogo from 'app:asset/vjtiLogo.png';
import oracleLogo from 'app:asset/oracleLogo.png';

const ociCloudCertUrl = import.meta.env.VITE_OCI_CLOUD_CERT_URL;
const ociAICertUrl = import.meta.env.VITE_OCI_AI_CERT_URL;

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = {
    institution: 'Veermata Jijabai Technological Institute',
    logo: vjtiLogo,
    location: 'Mumbai, IN',
    degree: 'B.Tech in Electronics and Telecommunication',
    period: 'Aug 18 - Jun 22',
    subjects: [
      'Computer Programming (C++)',
      'Python Programming',
      'Data Structures',
      'Algorithms',
      'Object Oriented Programming',
      'Database Management Systems',
      'Computer Networks',
      'Operating Systems',
      'Applied Machine Learning and Fuzzy Systems',
      'Pattern Recognition and Machine Vision',
      'Digital Image Processing',
    ],
  };

  const certifications = [
    {
      name: 'Oracle Cloud Infrastructure Foundations Associate',
      logo: oracleLogo,
      provider: 'Oracle',
      topics: [
        'OCI Fundamentals',
        'Identity And Access Management in OCI',
        'Networking in OCI',
        'Compute Instances in OCI',
        'Storage Management in OCI',
        'Observability and Monitoring in OCI',
        'Security Management in OCI',
        'Governance and Administration in OCI',
      ],
      certificateLink: ociCloudCertUrl,
    },
    {
      name: 'Oracle Cloud Infrastructure AI Foundations Associate',
      logo: oracleLogo,
      provider: 'Oracle',
      topics: [
        'AI Foundations',
        'Machine Learning Foundations',
        'Deep Learning Foundations',
        'Generative AI and LLM Foundations',
        'OCI AI Portfolio',
        'OCI Generative AI Service',
        'OCI AI Service',
      ],
      certificateLink: ociAICertUrl,
    },
  ];

  return (
    <section id="education" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-white mb-16"
        >
          Education and Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all hover:bg-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                <img src={education.logo} alt="Logo" />
              </div>
              <div>
                <h3 className="text-white">{education.institution}</h3>
                <p className="text-gray-400">{education.location}</p>
              </div>
            </div>

            <p className="text-white italic mb-2">{education.degree}</p>
            <p className="text-gray-400 mb-4">{education.period}</p>

            <h4 className="text-white mb-2">Relevant Coursework:</h4>
            <ul className="space-y-1 text-gray-200">
              {education.subjects.map((subject, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-white">•</span>
                  <span>{subject}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications */}
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all hover:bg-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <img src={cert.logo} alt="Logo" />
                  </div>
                  <h3 className="text-white">{cert.name}</h3>
                </div>

                <ul className="space-y-1 text-gray-200 mb-4">
                  {cert.topics.map((topic, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-white">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>

                <a
                  onClick={() => window.open(cert.certificateLink, '_blank')}
                  className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Certificate Link
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
