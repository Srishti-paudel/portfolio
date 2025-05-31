
'use client'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-100 via-white to-blue-100 border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between text-gray-700 text-sm">
        
        {/* Left - Text */}
        <p className="text-center md:text-left mb-6 md:mb-0 font-medium">
          &copy; {new Date().getFullYear()} <span className="text-purple-700 font-semibold">Srishti Paudel</span>. All rights reserved.
        </p>

        {/* Right - Social Icons */}
        <div className="flex items-center gap-6">
          {/* LinkedIn */}
          <a href="https://linkedin.com/in/srishti-paudel-a678b62a7" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
            <img
              src="/linkedin-icon.png"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>

          {/* GitHub */}
          <a href="https://github.com/Srishti-paudel" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
            <img
              src="/github-icon.png"
              alt="GitHub"
              className="w-6 h-6"
            />
          </a>

          {/* Email */}
          <a href="mailto:paudelsrishti2005@gmail.com" className="hover:scale-110 transition-transform duration-300">
            <img
              src="/image.png"
              alt="Email"
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

