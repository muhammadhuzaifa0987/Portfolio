import { motion } from "framer-motion";

const skills = [
   "Html","CSS","Javascript","React", "Bootstrap", "Tailwind CSS", "TypeScript", "Firebase",
  "Shadcn UI", "Framer Motion", "Figma", "Github", 
];

const About = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-zinc-800 dark:text-white">
          👨‍💻 About <span className="text-indigo-500">Me</span>
        </h2>

        <p className="text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto text-center mb-10">
          Hi, I'm a passionate with front-end developer  crafting modern, performant, and accessible web apps. I specialize in building responsive UIs using React, Tailwind CSS, and design systems like Shadcn.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-center rounded-lg text-sm font-medium text-zinc-800 dark:text-white shadow hover:shadow-md transition"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
