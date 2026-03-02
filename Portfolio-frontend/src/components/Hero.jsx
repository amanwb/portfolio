export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0d0d0d] text-white flex items-center pt-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12 gap-12">

        {/* LEFT SIDE TEXT */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm <span className="text-blue-500">Aman Chauhan</span>
          </h1>

          <h2 className="mt-2 text-2xl md:text-3xl text-gray-300">
            Software Engineer • DevOps and Backend Specialist
          </h2>

          <p className="mt-4 text-gray-400 max-w-lg">
            I build scalable cloud-native systems, Backend Systems and intelligent
            video analytics applications using DevOps + GStreamer + Kubernetes.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-500 hover:bg-white/10 rounded-lg text-gray-300 font-medium"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-[0_0_30px_rgba(59,130,246,0.4)]">
            <img
              src="/profile.jpg"
              alt="Aman Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}