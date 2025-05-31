'use client'

import Link from 'next/link'

export default function HireMe() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-24 px-6">
      <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-700 mb-6 tracking-tight">
          Hire Me
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          Looking for a passionate and creative developer? You're in the right place. I bring ideas to life with clean code, responsive design, and a spark of innovation.
        </p>

        {/* Services */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {[
            { icon: '🌐', title: 'Web Development', desc: 'Modern, fast and mobile-first websites built with React & Next.js.' },
            { icon: '🎨', title: 'UI/UX Design', desc: 'Intuitive interfaces with clean, accessible layouts.' },
            { icon: '⚙️', title: 'Backend Integration', desc: 'Smooth connection to APIs and databases.' },
            { icon: '📱', title: 'Responsive Design', desc: 'Pixel-perfect performance on all devices.' },
            { icon: '🚀', title: 'Performance Optimization', desc: 'Speed, SEO, and user-friendly enhancements.' },
            { icon: '🤝', title: 'Collaborative Work', desc: 'Clear communication & agile teamwork.' }
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-purple-700 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mb-10">
          <Link
            href="/contactme"
            className="inline-block bg-purple-600 text-white text-lg px-8 py-3 rounded-full shadow hover:bg-purple-700 transition-all duration-300"
          >
            📩 Contact Me
          </Link>
        </div>

        {/* Resume */}
        <div>
          <a
            href="/Srishti-Paudel-Resume.pdf"
            target="_blank"
            className="text-purple-600 hover:underline text-sm"
          >
            📄 Download My Resume
          </a>
        </div>
      </div>
    </main>
  )
}
