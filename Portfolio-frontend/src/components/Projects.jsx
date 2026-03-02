export default function Projects() {
  const projects = [
    {
      title: "Real-time CCTV Video Processing System",
      description:
        "A scalable GStreamer + Kafka + Kubernetes pipeline for real-time video ingestion, chunking, autoscaling, and analytics.",
      tech: ["GStreamer", "Kafka", "Kubernetes", "MinIO"],
      github: "https://github.com/AmanChauhan29",
      demo: "#",
    },
    {
      title: "DevOps CI/CD Automation",
      description:
        "Fully automated pipeline using Jenkins, Docker, SonarQube, ArgoCD, and Kubernetes with GitOps workflow.",
      tech: ["Jenkins", "Docker", "ArgoCD", "K8s"],
      github: "https://github.com/AmanChauhan29",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern developer portfolio built with React and Tailwind CSS, featuring animations and responsive UI.",
      tech: ["React", "Tailwind", "Vite"],
      github: "https://github.com/AmanChauhan29",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#0d0d0d] text-white py-24 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-blue-500">Projects</span>
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111] border border-gray-700 rounded-xl p-6 hover:bg-[#161616] transition group shadow-lg hover:shadow-blue-500/30"
            >
              <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-3">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-sm bg-blue-600/20 text-blue-400 px-3 py-1 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  className="px-4 py-2 border border-gray-500 hover:bg-white/10 rounded-lg text-gray-300 text-sm"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}