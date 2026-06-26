export default function About() {
  return (
    <section id="about" className="py-28 md:py-40 bg-[#FFFFFF] dark:bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="animate-slide-left">
            <div className="section-label">About</div>
            <h2 className="section-title mb-6">
              Built on a foundation<br />
              of <span className="text-[#005EB8]">systems thinking</span>
            </h2>
            <div className="space-y-4 text-[15px] md:text-[17px] text-[#86868B] leading-relaxed">
              <p>
                My journey started with C and C++ — learning how memory maps, compilers
                think, and data structures perform. That low-level foundation gives me a
                perspective most web developers don't have.
              </p>
              <p>
                From there I expanded into Python, JavaScript, and modern web frameworks.
                Now I work fluidly across the stack — whether it's optimizing a C++ algorithm,
                building a Python data pipeline, or crafting a React interface that feels native.
              </p>
              <p>
                I believe great engineering is about restraint: clean architecture,
                purposeful dependencies, and code that reads like a story.
              </p>
            </div>
            <div className="flex items-center gap-8 mt-10">
              <div>
                <div className="text-[32px] font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F0]">
                  3<span className="text-[#005EB8]">+</span>
                </div>
                <div className="text-[13px] text-[#86868B] mt-1">Years coding</div>
              </div>
              <div className="w-px h-10 bg-[#D4D4D0] dark:bg-white/[0.08]" />
              <div>
                <div className="text-[32px] font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F0]">
                  20<span className="text-[#005EB8]">+</span>
                </div>
                <div className="text-[13px] text-[#86868B] mt-1">Projects built</div>
              </div>
              <div className="w-px h-10 bg-[#D4D4D0] dark:bg-white/[0.08]" />
              <div>
                <div className="text-[32px] font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F0]">
                  5<span className="text-[#005EB8]">+</span>
                </div>
                <div className="text-[13px] text-[#86868B] mt-1">Languages</div>
              </div>
            </div>
          </div>
          <div className="relative animate-slide-right">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#F5F5F0] dark:bg-white/[0.03]">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&h=525&fit=crop"
                alt="Workspace"
                className="w-full h-full object-cover opacity-90 mix-blend-multiply dark:mix-blend-luminosity"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#005EB8]/20 dark:border-[#005EB8]/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-[#D4D4D0] dark:border-white/[0.06] rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}