import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-40 bg-[#FFFFFF] dark:bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="section-label">Projects</div>
          <h2 className="section-title mb-6">
            Things I've{" "}
            <span className="text-[#005EB8]">built</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A selection of work across languages and paradigms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, idx) => (
            <a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`card-apple block animate-fade-in-up animation-delay-${idx * 200}`}
            >
              <div className="aspect-[16/10] rounded-t-[18px] overflow-hidden bg-[#F5F5F0] dark:bg-white/[0.03]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 mix-blend-multiply dark:mix-blend-luminosity"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[15px] font-semibold text-[#1D1D1F] dark:text-[#F5F5F0] tracking-tight">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#005EB8]">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-[13px] text-[#86868B] leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-[#F5F5F0] dark:bg-white/[0.04] text-[11px] font-medium text-[#86868B] rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/zapsternix-rgb"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-link inline-flex items-center gap-1.5"
          >
            See all on GitHub
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}