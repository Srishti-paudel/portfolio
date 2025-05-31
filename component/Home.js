
"use client";
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Srishti Paudel | Portfolio</title>
      </Head>

      {/* Hero Section with full-width background and proper centering */}
      <section
        id="home"
        className="w-full min-h-screen bg-gradient-to-br from-purple-50 to-blue-100"
      >
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-x-20 px-6 md:px-20 py-16 min-h-screen">
          {/* Text Section */}
          <div className="max-w-xl space-y-6 animate-fade-in-down text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-purple-800 leading-tight">
              Hello, I'm <span className="text-blue-600">Srishti Paudel</span>
            </h2>
            <p className="text-lg text-gray-700">
              A passionate <strong className="text-purple-600">BSc CSIT student</strong> who loves transforming ideas into intuitive digital experiences. Web development, UI/UX, and all things tech—that's my zone.
            </p>
            <a
              href="#projects"
              className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700 transition"
            >
              View My Work
            </a>
          </div>

          {/* Image Section */}
          <div className="mt-10 lg:mt-0 animate-fade-in-up">
            <img
              src="/profile.JPG"
              alt="Srishti Paudel"
              className="w-80 h-80 rounded-full bg-gray-300 shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
      `}</style>
    </>
  )
}
