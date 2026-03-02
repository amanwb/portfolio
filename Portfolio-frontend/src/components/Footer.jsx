export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-gray-400 py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center px-6">

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-6 mb-6 text-xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="hover:text-blue-500 transition"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="hover:text-blue-500 transition"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            href="mailto:your@email.com"
            className="hover:text-blue-500 transition"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-sm">
          © {new Date().getFullYear()} Aman Chauhan. All rights reserved.
        </p>

      </div>
    </footer>
  );
}