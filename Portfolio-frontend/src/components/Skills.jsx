export default function Skills() {
  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "Jenkins", icon: "🟩" },
    { name: "JavaScript", icon: "🟨" },
    { name: "Databases", icon: "🗄️" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "☸️" },
    { name: "AWS", icon: "☁️" },
    { name: "Git & GitHub", icon: "🔧" },
    { name: "Terraform", icon: "📦" },
    { name: "GStreamer", icon: "🎥" },
    { name: "Kafka", icon: "📡" },
    { name: "Linux", icon: "🐧" },
  ];

  return (
    <section
      id="skills"
      className="bg-[#0d0d0d] text-white py-24 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-blue-500">Skills</span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#111] border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center hover:bg-[#161616] transition group cursor-pointer"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition">
                {skill.icon}
              </div>
              <p className="text-gray-300 font-medium group-hover:text-white transition">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}