export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40 bg-[#F5F5F0] dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="section-label">Contact</div>
          <h2 className="section-title mb-6">
            Let's{" "}
            <span className="text-[#005EB8]">work</span> together
          </h2>
          <p className="section-subtitle mx-auto">
            Have a project or just want to connect? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 mb-10 pb-10 border-b border-black/[0.04] dark:border-white/[0.06]">
              {[
                { label: "Email", value: "hello@zapsternix.dev", href: "mailto:hello@zapsternix.dev" },
                { label: "GitHub", value: "@zapsternix-rgb", href: "https://github.com/zapsternix-rgb" },
                { label: "LinkedIn", value: "@zapsternix-rgb", href: "https://linkedin.com/in/zapsternix-rgb" },
              ].map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="group">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#86868B] mb-2">
                    {item.label}
                  </div>
                  <div className="text-[14px] font-medium text-[#1D1D1F] dark:text-[#F5F5F0] group-hover:text-[#005EB8] transition-colors">
                    {item.value}
                  </div>
                </a>
              ))}
            </div>
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-0 py-3 bg-transparent text-[14px] text-[#1D1D1F] dark:text-[#F5F5F0] border-b border-black/[0.08] dark:border-white/[0.1] focus:border-[#005EB8] outline-none transition-colors placeholder:text-[#C0C0BA]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-0 py-3 bg-transparent text-[14px] text-[#1D1D1F] dark:text-[#F5F5F0] border-b border-black/[0.08] dark:border-white/[0.1] focus:border-[#005EB8] outline-none transition-colors placeholder:text-[#C0C0BA]"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-0 py-3 bg-transparent text-[14px] text-[#1D1D1F] dark:text-[#F5F5F0] border-b border-black/[0.08] dark:border-white/[0.1] focus:border-[#005EB8] outline-none transition-colors placeholder:text-[#C0C0BA]"
              />
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full px-0 py-3 bg-transparent text-[14px] text-[#1D1D1F] dark:text-[#F5F5F0] border-b border-black/[0.08] dark:border-white/[0.1] focus:border-[#005EB8] outline-none transition-colors resize-none placeholder:text-[#C0C0BA]"
              />
              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-primary text-[13px]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}