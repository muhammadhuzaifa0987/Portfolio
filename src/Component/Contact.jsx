import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "A valid email is required.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    console.log("Sending Message:", formData);
    alert("Thanks! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-16 lg:px-24 bg-white dark:bg-zinc-900">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
        🧩 Let’s Connect US
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 max-w-md mx-auto">
          Have an idea or just want to say hello? Fill out the form and I’ll get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="text-left space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Full Name
            </label>
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name && "border-red-500"}
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Email Address
            </label>
            <Input
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className={errors.email && "border-red-500"}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Message
            </label>
            <Textarea
              name="message"
              placeholder="What would you like to say?"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className={errors.message && "border-red-500"}
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">{errors.message}</p>
            )}
          </div>

          {/* Button */}
          <div className="pt-2">
            <Button type="submit" className="px-6 py-2 text-base shadow-md">
              Send Message
            </Button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;


