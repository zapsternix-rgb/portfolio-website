export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
              alt="Coding setup"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              A Developer Who Cares About Quality
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              I'm a passionate full-stack developer who loves turning complex problems into simple,
              beautiful, and intuitive solutions. With a strong foundation in modern web technologies,
              I build applications that are fast, accessible, and delightful to use.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              When I'm not coding, you'll find me exploring new tech, contributing to open source,
              or enjoying a good cup of coffee while planning my next project.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600">3+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Years Coding</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}