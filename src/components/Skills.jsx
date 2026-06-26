import { skills } from "../data/skills";

const categoryMeta = {
  languages: { label: "Languages", color: "bg-[#005EB8]" },
  frontend: { label: "Frontend", color: "bg-[#0078D7]" },
  tools: { label: "Tools & Platforms", color: "bg-[#1A1A1A] dark:bg-[#D4D4D0]" },
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-40 bg-[#F5F5F0] dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="section-label">Skills</div>
          <h2 className="section-title mb-6">
            My{" "}
            <span className="text-[#005EB8]">technical</span> stack
          </h2>
          <p className="section-subtitle mx-auto">
            Technologies I work with daily — from systems code to the browser.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {Object.entries(skills).map(([key, items], idx) => {
            const meta = categoryMeta[key];
            return (
              <div key={key} className={`animate-fade-in-up animation-delay-${idx * 500}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-1.5 h-1.5 rounded-full ${meta.color}`} />
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#86868B]">
                    {meta.label}
                  </h3>
                  <div className="flex-1 h-px bg-[#D4D4D0] dark:bg-white/[0.06]" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-4 py-2 bg-white dark:bg-white/[0.04] text-[13px] font-medium text-[#1D1D1F] dark:text-[#F5F5F0] rounded-full border border-black/[0.04] dark:border-white/[0.06] hover:border-[#005EB8]/30 dark:hover:border-[#005EB8]/30 transition-colors"
                    >
                      {skill.icon} {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}