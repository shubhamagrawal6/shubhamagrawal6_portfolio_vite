import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex gap-6 text-gray-400">
          <motion.a
            whileHover={{ scale: 1.1, color: '#fff' }}
            onClick={() => window.open('https://github.com/shubhamagrawal6', '_blank')}
            className="transition-colors"
          >
            Github
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, color: '#fff' }}
            onClick={() => window.open('https://www.linkedin.com/in/shubham-agrawal-a89493194', '_blank')}
            className="transition-colors"
          >
            LinkedIn
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, color: '#fff' }}
            onClick={() => window.open('https://leetcode.com/u/shubhamagrawal6', '_blank')}
            className="transition-colors"
          >
            LeetCode
          </motion.a>
        </div>
        
        <p className="text-gray-400">© 2025 All Rights Reserved.</p>
      </div>
    </footer>
  );
}
