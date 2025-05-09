import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-700 shadow-sm dark:shadow-md transition duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-2xl font-bold text-zinc-900 dark:text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Portfolio
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:text-indigo-500 transition"
            >
              {link.name}
            </a>
          ))}

          {/* Theme Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setDarkMode(!darkMode)}
            className="border-zinc-300 dark:border-zinc-700"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-900 px-4 pb-4 flex flex-col items-center space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className=" text-sm text-zinc-800 dark:text-zinc-200 hover:text-indigo-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setDarkMode(!darkMode);
              setMenuOpen(false);
            }}
            className="w-full border-zinc-300 dark:border-zinc-700"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
