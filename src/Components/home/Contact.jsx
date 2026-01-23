import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const colors = {
  bgPrimary: "#0F172A",
  bgSecondary: "#1E293B",
  accent: "#10B981",
  textMain: "#F8FAFC",
  textMuted: "#94A3B8",
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24"
      style={{ backgroundColor: colors.bgPrimary }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: colors.textMain }}
          >
            Get in <span style={{ color: colors.accent }}>Touch</span>
          </h2>
          <p className="text-lg" style={{ color: colors.textMuted }}>
            Have a project, idea, or just want to say hi?  
            I’m always open to meaningful conversations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-2xl font-semibold"
              style={{ color: colors.textMain }}
            >
              Contact Information
            </h3>

            <ul className="space-y-6 text-lg">
              <li className="flex items-center gap-4">
                <FaPhoneAlt color={colors.accent} />
                <span style={{ color: colors.textMuted }}>
                  +880 1234 567 890
                </span>
              </li>

              <li className="flex items-center gap-4">
                <FaEnvelope color={colors.accent} />
                <span style={{ color: colors.textMuted }}>
                  jamimaafroz123@gmail.com
                </span>
              </li>

              <li className="flex items-center gap-4">
                <FaWhatsapp color="#25D366" />
                <a
                  href="https://wa.me/8801234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 transition-colors"
                  style={{ color: colors.textMuted }}
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="p-8 rounded-xl border"
            style={{
              backgroundColor: colors.bgSecondary,
              borderColor: `${colors.textMuted}20`,
            }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-2xl font-semibold mb-6"
              style={{ color: colors.textMain }}
            >
              Send a Message
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg bg-transparent border focus:outline-none focus:ring-2"
                style={{
                  borderColor: `${colors.textMuted}40`,
                  color: colors.textMain,
                }}
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg bg-transparent border focus:outline-none focus:ring-2"
                style={{
                  borderColor: `${colors.textMuted}40`,
                  color: colors.textMain,
                }}
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-lg bg-transparent border resize-none focus:outline-none focus:ring-2"
                style={{
                  borderColor: `${colors.textMuted}40`,
                  color: colors.textMain,
                }}
              />

              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold transition-all hover:scale-[1.02]"
                style={{
                  backgroundColor: colors.accent,
                  color: colors.bgPrimary,
                }}
              >
                Send Message →
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
