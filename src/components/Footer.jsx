export default function Footer() {
  return (
    <footer className="bg-[#FAFAF8] dark:bg-[#0A0A0A] border-t border-black/[0.04] dark:border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[12px] text-[#86868B]">
            &copy; {new Date().getFullYear()} Manav. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/zapsternix-rgb" target="_blank" rel="noopener noreferrer" className="text-[12px] text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F0] transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/zapsternix-rgb" target="_blank" rel="noopener noreferrer" className="text-[12px] text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F0] transition-colors">
              LinkedIn
            </a>
            <a href="mailto:hello@zapsternix.dev" className="text-[12px] text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F0] transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}