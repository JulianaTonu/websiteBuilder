import { AnimatePresence, motion } from "motion/react";
const LoginModal = ({ open, onClose }) => {
    return (
        <AnimatePresence>
            {open &&
                <motion.div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-xl px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}>


                    <motion.div

                        initial={{ scale: 0.88, opacity: 0, y: 60 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 40 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="relative w-full max-w-md p-[-1px] rounded-3xl bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-transparent"
                    >
                        <div className="relative rounded-3xl bg-[#0b0b0b] border border-white/10 shadow [0_30px_50px_rgba(0,0,0,0.8)]  p-6 overflow-hidden">

                        </div>

                        <motion.div
                        animate={{ opacity:[0.25, 0.4, 0.25]}}
                        transition={{ duration:6, repeat:Infinity}}
                        className="absolute -top-32 -left-32 w-80 h-80   from-purple-500/30 blur-[140px] "
                        
                        >

                        </motion.div>
                    </motion.div>


                </motion.div> 
            }
        </AnimatePresence >);
};

export default LoginModal;