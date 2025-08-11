import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const colors = {
  cream: "#E8D6CB",
  softRose: "#D0ADA7",
  dustyRed: "#AD6A6C",
  deepPlum: "#5D2E46",
  lavender: "#B58DB6",
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16"
      style={{ backgroundColor: colors.cream, color: colors.deepPlum }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center mb-12"
          style={{ fontFamily: "'Mozilla Headline', sans-serif" }}
        >
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className="space-y-6"
            style={{ fontFamily: "'Urbanist', sans-serif" }}
          >
            <h3
              className="text-2xl font-semibold mb-6"
              style={{ color: colors.dustyRed }}
            >
              Get in Touch
            </h3>
            <ul className="space-y-5">
              <li className="flex items-center space-x-4">
                <FaPhoneAlt size={22} color={colors.dustyRed} />
                <span className="text-lg">{"+880 1234 567 890"}</span>
              </li>
              <li className="flex items-center space-x-4">
                <FaEnvelope size={22} color={colors.dustyRed} />
                <span className="text-lg">jamimaafroz123@gmail.com</span>
              </li>
              <li className="flex items-center space-x-4">
                <FaWhatsapp size={22} color="#25D366" />
                <a
                  href="https://wa.me/8801234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg underline hover:text-dustyRed transition-colors"
                  style={{ color: colors.deepPlum }}
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div
            style={{ fontFamily: "'Urbanist', sans-serif" }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3
              className="text-2xl font-semibold mb-6"
              style={{ color: colors.dustyRed }}
            >
              Send Me a Message
            </h3>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                style={{ borderColor: colors.softRose }}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                style={{ borderColor: colors.softRose }}
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 resize-none"
                style={{ borderColor: colors.softRose }}
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold transition-colors"
                style={{
                  backgroundColor: colors.dustyRed,
                  color: colors.cream,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = colors.softRose)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = colors.dustyRed)
                }
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
