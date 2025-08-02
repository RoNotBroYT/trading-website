'use client';

import { motion } from 'framer-motion';
import { FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to My Webiste!
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 mb-6 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
      Follow me below!
      </motion.p>

      <div className="flex gap-6 text-3xl">
        <a href="https://twitter.com/RoNotBroYT" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-cyan-400" />
        </a>
        <a href="https://github.com/RoNotBroYT" target="_blank" rel="noopener noreferrer">
          <Github className="hover:text-cyan-400" />
        </a>
        <a href="https://www.instagram.com/ronotbroyt_trades" target="_blank" rel="noopener noreferrer">
          <Instagram className="hover:text-cyan-400" />
        </a>
      </div>
    </main>
  );
}
