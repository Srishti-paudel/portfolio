'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 px-6 py-20">
      <div className="max-w-4xl mx-auto text-gray-800 space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-purple-700 text-center"
        >
          Hi, I'm Srishti Paudel
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-center"
        >
          I'm a passionate <strong>BSc CSIT student</strong> from Nepal who loves building interactive web apps and
          exploring the ever-evolving world of technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-4"
        >
          <p>
            I specialize in <strong>Web Development</strong>, <strong>UI/UX Design</strong>, and am deeply curious
            about <strong>Machine Learning</strong> and emerging technologies. I enjoy working on real-world problems
            with clean, efficient solutions.
          </p>

          <p>
            💡 I'm a <strong>creative thinker</strong> and <strong>team player</strong> who enjoys collaborating,
            learning, and pushing boundaries. My strengths lie in adaptability, communication, and the passion to keep
            building and improving.
          </p>

          <p>
            🏆 Some things I’m proud of:
            <ul className="list-disc list-inside pl-4 mt-1">
              <li>Built multiple frontend and full-stack web projects</li>
              <li>Certified in JavaScript, React, and Git</li>
              <li>Participated in tech fests and college coding competitions</li>
            </ul>
          </p>

          <p>
            🎯 <strong>Goal:</strong> To become a skilled Full Stack Developer, work on impactful projects, and
            continuously learn and grow in the tech industry.
          </p>

          <p>
            🎨 When I’m not coding, I enjoy drawing, photography, and writing blogs — a mix of logic and creativity!
          </p>

          <p className="italic text-purple-600 font-semibold mt-4 text-center">
            “Stay curious. Keep building.”
          </p>
        </motion.div>
      </div>
    </main>
  )
}
