import { AnimatePresence, motion } from "motion/react";
import "./App.css";
import { useState } from "react";

const carouselList = [
  {
    image: "/images/italy.webp",
    name: "Italy",
  },
  {
    image: "/images/happiness.webp",
    name: "Happiness",
  },
  {
    image: "/images/brazil.webp",
    name: "Brazil",
  },
  {
    image: "/images/car.webp",
    name: "Car",
  },
];

const container = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};


// For split text animation on the name
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


// For the image animations.
const imageVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselList.length);
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselList.length) % carouselList.length);
  }

  const currentItem = carouselList[currentIndex];

  return (
    <main className="relative h-screen w-screen p-4 overflow-hidden flex flex-col">
      <div className="flex lg:flex-row flex-col justify-center lg:justify-between gap-4 flex-1 min-h-10 py-4">
        <AnimatePresence mode="wait">
          <motion.p
            className="font-dancing-script font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl whitespace-nowrap"
            key={currentItem.name}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {currentItem.name.split("").map((letter, index) => (
              <motion.span key={index} variants={child}>
                {letter}
              </motion.span>
            ))}
          </motion.p>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.img
          key={currentItem.name}
            src={currentItem.image}
            alt="image"
            className="max-w-full max-h-full w-auto h-auto object-contain"
            initial="hidden" variants={imageVariants} animate="visible" exit="exit"
          />
        </AnimatePresence>
      </div>
      <div className="flex justify-between items-center p-4">
        <button className="uppercase font-semibold text-xs sm:text-sm md:text-base pb-0 cursor-pointer tracking-normal hover:tracking-wider transition-all duration-300 ease-in" onClick={handlePrevious}>
          <span className="lg:block hidden">Previous Project</span>
          <span className="block lg:hidden">Previous</span>
        </button>
        <button className="uppercase font-semibold text-xs sm:text-sm md:text-base pb-0 cursor-pointer tracking-normal hover:tracking-wider transition-all duration-300 ease-in" onClick={handleNext}>
          <span className="lg:block hidden">Next Project</span>
          <span className="block lg:hidden">Next</span>
        </button>
      </div>
    </main>
  );
}

export default App;
