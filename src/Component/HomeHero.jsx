import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";

const HomeHero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-20 bg-white dark:bg-zinc-900"
    >
      {/* Left Content */}
      <motion.div
        className="text-center md:text-left max-w-xl z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-tight">
          Hi, I’m <span className="text-indigo-600">MUHAMMAD HUZAIFA </span>
        </h1>

        <h2 className="mt-4 text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 font-medium">
          I’m a{" "}
          <span className="text-indigo-500 font-semibold">
            <Typewriter
              words={["Frontend Developer", "UI/UX Designer", "React Enthusiast", "Problem Solver"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h2>

        <p className="mt-6 text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
          I specialize in building modern, responsive web apps using React, Tailwind CSS,
          and cutting-edge tools. I focus on delivering clean code and great user experience.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button className="px-6 py-2 text-base shadow-md">
            <a href="#projects">See My Work</a>
          </Button>
          <Button variant="outline" className="px-6 py-2 text-base">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="relative z-0 mb-6 md:mb-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 2, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-zinc-500 shadow-xl">
          <img
            src="./src/assets/huzaifa image.PNG"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Floating Glow Gradient */}
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-tr from-indigo-400 to-purple-500 opacity-20 blur-3xl z-[-1]" />
      </motion.div>
    </section>
  );
};

export default HomeHero;
