
import { AnimatePresence, motion } from "motion/react";

const LoginModal = ({ open, onClose }) => {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-white/50 px-4 backdrop-blur-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.88, opacity: 0, y: 60 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 40 }}
                        transition={{
                            duration: 0.45,
                            ease: "easeOut",
                        }}
                        className="relative w-full max-w-md rounded-3xl bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-transparent p-[1px]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal */}
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] p-6 shadow-[0_30px_50px_rgba(0,0,0,0.8)]">

                            {/* Glow */}
                            <motion.div
                                animate={{
                                    opacity: [0.25, 0.4, 0.25],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-purple-500/30 blur-[140px]"
                            />

                            {/* Close Button */}
                            <button
                                type="button"
                                onClick={onClose}
                                className="absolute top-5 right-5 z-20 text-lg text-zinc-400 transition hover:text-white"
                            >
                                ✕
                            </button>

                            {/* Content */}
                            <div className="relative px-2 pt-8 pb-6 text-center">

                                {/* Badge */}
                                <h1 className="mb-6 inline-block rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs text-zinc-300">
                                    AI powered website builder
                                </h1>

                                {/* Heading */}
                                <h2 className="mb-6 text-3xl font-semibold leading-tight text-white">
                                    <span>Welcome to </span>
                                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                        GenWeb.ai
                                    </span>
                                </h2>

                                {/* Google Login Button */}
                                <motion.button
                                    type="button"
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.96 }}
                                    className="group relative h-13 w-full overflow-hidden rounded-xl bg-white font-semibold text-black shadow-xl transition"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 to-white opacity-0 group-hover:opacity-100 transition" 
                                    />
                                    <div className="relative flex items-center justify-center gap-3">
                                        <img
                                            src="https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png"
                                            alt="Google"
                                            className="h-5 w-5"
                                        />
                                        <span>Continue with Google</span>
                                    </div>
                                </motion.button>

                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoginModal;

