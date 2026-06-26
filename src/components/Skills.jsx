import { skills } from "../data/skills";

function SkillRing({ name, level, icon }) {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="flex flex-col items-center group">
      <div className="relative w-28 h-28 mb-3">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            className="text-gray-100 dark:text-gray-700/50"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="text-blue-600 dark:text-blue-400 transition-all duration-1000 ease-out"
            style={{
              filter: "drop-shadow(0 0 6px rgba(59,130,246,0.3))",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl">{icon}</span>
        </div>
        <div className="absolute -bottom-1 right-1 bg-white dark:bg-gray-800 rounded-full px-2 py-0.5 text-xs font-bold text-blue-600 dark:text-blue-400 shadow-sm border border-gray-100 dark:border-gray-700">
          {level}%
        </div>
      </div>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {name}
      </span>
    </div>
  );
}

export default function Skills() {
  const categories = [
    { key: "languages", label: "Programming Languages", color: "from-blue-500 to-cyan-500" },
    { key: "frontend", label: "Frontend & Web", color: "from-purple-500 to-pink-500" },
    { key: "tools", label: "Tools & Platforms", color: "from-amber-500 to-orange-500" },
  ];

  return (
    <section id="skills" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full mb-4">
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Toolbox
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies I work with daily to bring ideas to life.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((cat) => (
            <div key={cat.key}>
              <div className="flex items-center gap-4 mb-10">
                <div className={`h-1 flex-1 rounded-full bg-gradient-to-r ${cat.color} opacity-30`} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                  {cat.label}
                </h3>
                <div className={`h-1 flex-1 rounded-full bg-gradient-to-r ${cat.color} opacity-30`} />
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
                {skills[cat.key].map((skill) => (
                  <SkillRing key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}