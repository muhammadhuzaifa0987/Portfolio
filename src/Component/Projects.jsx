import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion"; 
import {projectsData} from "./projectsData.jsx";

const Projects = () => {
  const data = projectsData();

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-zinc-800 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        🧩 My <span className="text-indigo-500">Projects</span>
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.map((project, index) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="hover:shadow-lg dark:hover:shadow-indigo-400/20 transition-shadow h-full">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 my-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-zinc-200 dark:bg-zinc-700 text-xs rounded-md text-zinc-800 dark:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
