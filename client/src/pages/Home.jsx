import { motion } from "motion/react";

const Home = () => {
  const highlights = [
    "AI-Powered Website Generation",
    "Responsive and Modern Designs",
    "Production-Ready Output",
    "Customizable Templates",
    "Fast and Efficient Workflow",
  ]
  return (
    <div className="relative min-h-screen bg-[#040404] text-white overflow-hidden">

      {/* Navbar */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="text-lg font-semibold">
            GenWeb.ai
          </div>

          <div className="hidden md:block text-sm text-zinc-400 hover:text-white cursor-pointer transition-colors">
            Pricing
          </div>

          <button className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition-colors text-sm">
            Get Started
          </button>

        </div>
      </motion.nav>

      {/* Hero */}
      <section className="pt-44 pb-32 px-6 text-center">

        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Build Stunning Websites{" "}

          <span className=" bg-gradient-to-r  from-purple-400 to-blue-400 bg-clip-text text-transparent">
            With AI
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-zinc-400"
        >
          Describe your idea and let AI generate a modern,
          ,responsive, production-ready website.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex justify-center gap-4"
        >
          <button className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 transition">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
            View
          </button>
        </motion.div>

      </section>

      <section classNAme="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="rounded-2xl bg-white/5 p-6 border border-white/10 hover:bg-white/10 transition cursor-pointer"
            >
              <h1 className="text-xl font-semibold mb-3">{highlight}</h1>
              <p className="text-zinc-400 text-sm">
                GenWeb.ai builds real websites -clean code, animations, responsive and scalable structure.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="text-center py-6 text-zinc-500 text-sm border-t border-white/10">
        &copy; {new Date().getFullYear()} GenWeb.ai. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;