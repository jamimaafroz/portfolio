import React from "react";
import { motion } from "framer-motion";

const DesignationIntro = () => {
  return (
    <section
      id="about"
      className="pt-32 py-24 bg-slate-950 text-slate-100"
    >
      <motion.div
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Profile Image */}
        <div className="flex justify-center md:justify-start relative">
          <div className="absolute inset-0 rounded-full blur-2xl bg-emerald-500/20" />
          <motion.img
            src="https://i.ibb.co/wFbZyGLM/your-photo.jpg"
            alt="Jamima Afroz Usha"
            className="w-56 h-56 rounded-full object-cover relative z-10 border-4 border-emerald-400/60 shadow-xl"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            loading="lazy"
          />
        </div>

        {/* Text Content */}
        <div className="md:col-span-2 text-center md:text-left">
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Jamima Afroz Usha
          </motion.h2>

          <motion.p
            className="mt-3 text-lg md:text-xl font-medium text-emerald-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Full-Stack Web Developer
          </motion.p>

          <motion.p
            className="mt-6 max-w-2xl leading-relaxed text-slate-300 text-base md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I build scalable, user-focused web applications using modern
            JavaScript frameworks. My work focuses on clean architecture,
            performance, and real-world usability—turning ideas into reliable
            digital products.
          </motion.p>

          {/* Subtle CTA */}
          <motion.div
            className="mt-8 flex gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#project-section"
              className="px-6 py-3 rounded-full bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-slate-600 text-slate-200 hover:border-emerald-400 hover:text-emerald-400 transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default DesignationIntro;
