import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo / Branding */}
        <div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
            Portfolio
          </h3>
          <p className="text-sm">
            Building modern, performant web experiences using React, Tailwind, and modern UI principles.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">Quick Links</h4>
          <a href="#home" className="hover:text-indigo-500 transition">Home</a>
          <a href="#about" className="hover:text-indigo-500 transition">About</a>
          <a href="#projects" className="hover:text-indigo-500 transition">Projects</a>
          <a href="#contact" className="hover:text-indigo-500 transition">Contact</a>
        </div>

        {/* Social & Contact */}
        <div>
          <h4 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-2">Connect with me</h4>
          <div className="flex gap-4 mt-2">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-2 bg-zinc-200 dark:bg-zinc-800 rounded-full hover:bg-indigo-500 hover:text-white transition"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-2 bg-zinc-200 dark:bg-zinc-800 rounded-full hover:bg-indigo-500 hover:text-white transition"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:your@email.com"
              whileHover={{ scale: 1.1 }}
              className="p-2 bg-zinc-200 dark:bg-zinc-800 rounded-full hover:bg-indigo-500 hover:text-white transition"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-zinc-500 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-700 pt-6">
        © {new Date().getFullYear()} Huzaifa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

