export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAF8] dark:bg-[#0A0A0A]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#005EB8]/5 dark:border-[#005EB8]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#D4D4D0]/30 dark:border-white/[0.03]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-[#D4D4D0]/20 dark:border-white/[0.02]" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[15%] w-1.5 h-1.5 bg-[#005EB8]/30 rounded-full animate-pulse-subtle" />
        <div className="absolute top-[40%] left-[10%] w-1 h-1 bg-[#C0C0BA]/50 rounded-full animate-pulse-subtle animation-delay-1000" />
        <div className="absolute bottom-[30%] right-[20%] w-1 h-1 bg-[#005EB8]/20 rounded-full animate-pulse-subtle animation-delay-2000" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F5F5F0] dark:bg-white/[0.04] rounded-full text-[11px] font-semibold uppercase tracking-[0.08em] text-[#86868B] mb-8 border border-black/[0.04] dark:border-white/[0.06]">
            <span className="w-1.5 h-1.5 bg-[#005EB8] rounded-full" />
            Available for projects
          </div>
        </div>

        <h1 className="hero-heading mb-4 text-balance animate-fade-in-up animation-delay-500">
          Full-stack developer<br />
          <span className="text-[#86868B] font-light">crafting</span>{" "}
          <span className="text-[#005EB8]">premium</span>{" "}
          <span className="text-[#86868B] font-light">digital</span>
          <br />
          experiences
        </h1>

        <p className="text-[17px] md:text-[19px] text-[#86868B] max-w-xl mx-auto leading-relaxed mb-10 animate-fade-in-up animation-delay-1000 text-balance">
          C/C++ · Python · JavaScript — I build across the stack, from systems
          programming to modern web applications with clean architecture.
        </p>

        <div className="flex items-center justify-center gap-3 animate-fade-in-up animation-delay-1500">
          <a href="#projects" className="btn-primary text-[13px]">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary text-[13px]">
            Get In Touch
          </a>
        </div>

        <div className="flex items-center justify-center gap-5 mt-16 animate-fade-in animation-delay-2000">
          {[
            { href: "https://github.com/zapsternix-rgb", label: "GitHub" },
            { href: "https://linkedin.com/in/zapsternix-rgb", label: "LinkedIn" },
            { href: "mailto:hello@zapsternix.dev", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F0] transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float-subtle">
        <svg className="w-4 h-4 text-[#C0C0BA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}