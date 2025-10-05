import { motion } from 'motion/react';
import linkedinLogo from 'app:asset/linkedinLogo.png';
import githubLogo from 'app:asset/githubLogo.png';
import leetcodeLogo from 'app:asset/leetcodeLogo.png';

const githubUrl = import.meta.env.VITE_MY_GITHUB_URL;
const linkedinUrl = import.meta.env.VITE_MY_LINKEDIN_URL;
const leetcodeUrl = import.meta.env.VITE_MY_LEETCODE_URL;

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex gap-6 text-gray-400">
          <motion.a
            whileHover={{ scale: 1.1, color: '#fff' }}
            onClick={() => window.open(githubUrl, '_blank')}
            className="transition-colors flex items-center gap-2"
          >
            <img src={githubLogo} alt="GitHub" className="rounded-full inline-block" style={{ width: '2rem', height: '2rem' }} /> GitHub
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, color: '#fff' }}
            onClick={() => window.open(linkedinUrl, '_blank')}
            className="transition-colors flex items-center gap-2"
          >
            <img src={linkedinLogo} alt="LinkedIn" className="rounded-full inline-block" style={{ width: '2rem', height: '2rem' }} /> LinkedIn
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, color: '#fff' }}
            onClick={() => window.open(leetcodeUrl, '_blank')}
            className="transition-colors flex items-center gap-2"
          >
            <img src={leetcodeLogo} alt="LeetCode" className="rounded-full inline-block" style={{ width: '2rem', height: '2rem' }} /> LeetCode
          </motion.a>
        </div>
        
        <p className="text-gray-400">© 2025 All Rights Reserved.</p>
      </div>
    </footer>
  );
}