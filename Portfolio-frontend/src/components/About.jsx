import { useState } from "react";

export default function About() {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (card) => {
    setOpenCard(openCard === card ? null : card);
  };

  return (
    <section
      id="about"
      className="bg-[#0d0d0d] text-white py-24 px-6 md:px-12 flex justify-center"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl font-bold mb-10 text-center">
          About <span className="text-blue-500">Me</span>
        </h2>

        <div className="grid gap-6">

          {/* CARD 1 */}
          <div
            className="bg-[#111] border border-gray-700 rounded-xl p-6 cursor-pointer transition hover:bg-[#161616]"
            onClick={() => toggleCard("who")}
          >
            <h3 className="text-2xl font-semibold text-blue-400">
              Who I Am
            </h3>

            {openCard === "who" && (
              <p className="text-gray-400 mt-4 leading-relaxed transition-all duration-300">
                I'm Aman, a DevOps Engineer and Developer who loves building
                scalable cloud-native systems, automation pipelines, and modern
                UIs.  
                I am passionate about solving real problems through engineering.
              </p>
            )}
          </div>

          {/* CARD 2 */}
          <div
            className="bg-[#111] border border-gray-700 rounded-xl p-6 cursor-pointer transition hover:bg-[#161616]"
            onClick={() => toggleCard("journey")}
          >
            <h3 className="text-2xl font-semibold text-blue-400">
              My Journey
            </h3>

            {openCard === "journey" && (
              <p className="text-gray-400 mt-4 leading-relaxed transition-all duration-300">
                I started exploring development, cloud, automation, and system
                design. I’ve worked on projects involving Kubernetes, Kafka,
                GStreamer, autoscaling video processing pipelines, and secure
                distributed systems.
              </p>
            )}
          </div>

          {/* CARD 3 */}
          <div
            className="bg-[#111] border border-gray-700 rounded-xl p-6 cursor-pointer transition hover:bg-[#161616]"
            onClick={() => toggleCard("do")}
          >
            <h3 className="text-2xl font-semibold text-blue-400">
              What I Do Now
            </h3>

            {openCard === "do" && (
              <p className="text-gray-400 mt-4 leading-relaxed transition-all duration-300">
                I design and build intelligent video pipelines, cloud
                infrastructure, microservices, and automation workflows.  
                Combining DevOps + Cloud + Kubernetes + GStreamer, I develop
                scalable and reliable systems.
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}