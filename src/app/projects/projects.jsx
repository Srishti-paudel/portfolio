
"use client";
import Head from 'next/head'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Srishti Paudel</title>
      </Head>

      {/* Projects Page Header */}
      <section className="min-h-screen pt-28 px-6 md:px-20 bg-gradient-to-br from-blue-50 to-purple-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6">My Projects</h1>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Here's a project that highlights my skills and passion for development.
          </p>

          {/* Project Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-left transition hover:scale-105 hover:shadow-xl max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-purple-700 mb-3">College Content Management System</h2>
            <p className="text-gray-700 mb-4">
              A web-based CMS built using <strong>Node.js</strong> and <strong>MySQL</strong> for managing academic content such as notices, assignments, and user roles. It features separate dashboards and login systems for teachers and students.
            </p>
            <a
              href="https://github.com/Srishti-paudel/cms_project.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
