import { motion } from "motion/react";
import "./App.css";

const text = "Italy";

const container = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const child = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

function App() {
  return (
    <main className="relative h-screen w-screen p-4 overflow-hidden flex flex-col">
      <div className="p-4">
        <p>Close Project</p>
      </div>
      <div className="flex justify-between gap-4 flex-1 min-h-10 py-4">
        <motion.p
          className="font-dancing-script font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl whitespace-nowrap"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {text.split("").map((letter, index) => (
            <motion.span key={index} variants={child}>
              {letter}
            </motion.span>
          ))}
        </motion.p>
        <motion.div variants={container} initial="hidden" animate="visible">
          <img
            src="/images/italy.webp"
            alt="image"
            className="max-w-full max-h-full w-auto h-auto object-contain"
          />
        </motion.div>
      </div>
      <div className="flex justify-between items-center p-4">
        <button className="uppercase font-semibold text-xs sm:text-sm md:text-base pb-0 cursor-pointer tracking-normal hover:tracking-wider transition-all duration-300 ease-in">
          <span className="lg:block hidden">Previous Project</span>
          <span className="block lg:hidden">Previous</span>
        </button>
        <button className="uppercase font-semibold text-xs sm:text-sm md:text-base pb-0 cursor-pointer tracking-normal hover:tracking-wider transition-all duration-300 ease-in">
          <span className="lg:block hidden">Next Project</span>
          <span className="block lg:hidden">Next</span>
        </button>
      </div>
    </main>
  );
}

export default App;
