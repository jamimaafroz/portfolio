import React from "react";
import { motion } from "framer-motion";

const colors = {
  cream: "#E8D6CB",
  softRose: "#D0ADA7",
  dustyRed: "#AD6A6C",
  deepPlum: "#5D2E46",
  lavender: "#B58DB6",
  darkGlowStart: "#7F5ACF", // deep purple glow start
  darkGlowEnd: "#E75480", // neon-ish pink glow end
};

const DesignationIntro = () => {
  return (
    <section
      id="about"
      className="py-20 bg-cream dark:bg-deepPlum"
      style={{ backgroundColor: colors.cream }}
    >
      <motion.div
        className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Image with glowing highlight */}
        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0 relative">
          <motion.div
            className="rounded-full absolute top-0 left-0 w-56 h-56"
            style={{
              boxShadow: `0 0 15px 5px ${colors.lavender}`,
              filter: `blur(6px)`,
              zIndex: 0,
            }}
            animate={{
              boxShadow: [
                `0 0 15px 5px ${colors.lavender}`,
                `0 0 25px 10px ${colors.dustyRed}`,
                `0 0 15px 5px ${colors.lavender}`,
              ],
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            // Dark mode override using Tailwind's dark: class won't apply here because it's inline
            // So we'll do a trick with opacity and a duplicate div for dark mode glow below
          />
          {/* Duplicate glow for dark mode */}
          <motion.div
            className="rounded-full absolute top-0 left-0 w-56 h-56 dark:block hidden"
            style={{
              boxShadow: `0 0 20px 6px ${colors.darkGlowStart}`,
              filter: `blur(8px)`,
              zIndex: 0,
            }}
            animate={{
              boxShadow: [
                `0 0 20px 6px ${colors.darkGlowStart}`,
                `0 0 30px 12px ${colors.darkGlowEnd}`,
                `0 0 20px 6px ${colors.darkGlowStart}`,
              ],
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
          <motion.img
            src="https://i.ibb.co/wFbZyGLM/your-photo.jpg"
            alt="Jamima Afroz Usha"
            className="w-56 h-56 rounded-full object-cover relative z-10"
            style={{
              border: `4px solid ${colors.lavender}`,
              boxShadow: `0 8px 20px rgba(93,46,70,0.3)`,
            }}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div className="md:w-2/3 text-center md:text-left">
          <motion.h2
            className="text-4xl font-bold"
            style={{
              color: colors.deepPlum,
              fontFamily: "'Mozilla Headline', sans-serif",
            }}
          >
            Jamima Afroz Usha
          </motion.h2>

          <motion.p
            className="mt-3 font-semibold text-xl tracking-wide"
            style={{
              color: colors.dustyRed,
              fontFamily: "'Urbanist', sans-serif",
            }}
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            className="mt-6 leading-relaxed max-w-xl mx-auto md:mx-0 text-base md:text-lg"
            style={{
              color: colors.deepPlum,
              fontFamily: "'Urbanist', sans-serif",
            }}
          >
            Passionate developer specializing in MERN stack, delivering
            high-quality web applications with modern, user-friendly designs and
            scalable backend architectures.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default DesignationIntro;
