import { motion } from "motion/react";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#040404] text-white overflow-hidden">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-semibold">
            GenWeb.ai
          </div>
          <div className="hidden md:inline text-sm text-zinc-400 hover:text-white cursor-pointer">
            Pricing
          </div>
          <button className="px-4 py-2 rounded-lg border border-white/20  hover:bg-white/20 text-sm">
            Get Started
          </button>
        </div>
      </motion.div>

      <section className="pt-44 pb-32 px-6 text-center">
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Build Stunning Websites
          <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            With AI in Minutes
          </span>
        </motion.h1>
      </section>
    </div>
  );
};

export default Home;