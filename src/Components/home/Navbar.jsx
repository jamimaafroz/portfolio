import React, { useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";

const colors = {
  cream: "#E8D6CB",
  softRose: "#D0ADA7",
  dustyRed: "#AD6A6C",
  deepPlum: "#5D2E46",
  lavender: "#B58DB6",
};

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const navLinks = [
    { name: "About", id: "about", type: "scroll" },
    { name: "Projects", id: "project-section", type: "scroll" },
    { name: "Skills", id: "skills", type: "scroll" },
    { name: "Socials", id: "social", type: "scroll" },
    { name: "Contact", id: "contact", type: "scroll" },
  ];

  const handleScrollOrNavigate = (id, type) => {
    setNavOpen(false);
    if (type === "scroll") {
      if (isHome) {
        const element = document.getElementById(id);
        if (element)
          element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        navigate("/", { state: { scrollTo: id } });
      }
    } else if (type === "route") {
      navigate(id);
    }
  };

  // Helper for inline underline style for active nav items
  const underlineStyle = {
    content: "''",
    position: "absolute",
    bottom: "-8px",
    left: 0,
    width: "100%",
    height: "3px",
    backgroundColor: colors.dustyRed,
    borderRadius: "2px",
  };

  return (
    <nav
      className="fixed w-full z-50 shadow-md transition-colors duration-500"
      style={{ backgroundColor: colors.cream }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <RouterLink
          to="/"
          onClick={() => setNavOpen(false)}
          className="flex items-center"
        >
          <h1
            className="text-3xl font-bold cursor-pointer transition-colors duration-500"
            style={{
              fontFamily: "'Mozilla Headline', sans-serif",
              color: colors.deepPlum,
            }}
          >
            Usha
            <span
              style={{
                color: colors.dustyRed,
                fontFamily: "'Urbanist', sans-serif",
              }}
              className="ml-1"
            >
              Dev
            </span>
          </h1>
        </RouterLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 relative">
          <li style={{ position: "relative" }}>
            <RouterLink
              to="/"
              onClick={() => setNavOpen(false)}
              style={{
                fontWeight: "600",
                cursor: "pointer",
                color: isHome ? colors.dustyRed : colors.deepPlum,
                position: "relative",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = colors.dustyRed)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = isHome
                  ? colors.dustyRed
                  : colors.deepPlum)
              }
            >
              Home
              {isHome && <span style={underlineStyle} />}
            </RouterLink>
          </li>

          {navLinks.map(({ name, id, to, type }) => {
            const isActive =
              (type === "route" && location.pathname === to) ||
              (type === "scroll" && isHome && location.state?.scrollTo === id);

            return (
              <li key={id || to} style={{ position: "relative" }}>
                {type === "scroll" ? (
                  <button
                    onClick={() => handleScrollOrNavigate(id, type)}
                    style={{
                      fontWeight: "600",
                      cursor: "pointer",
                      background: "transparent",
                      border: "none",
                      fontFamily: "'Urbanist', sans-serif",
                      color: isActive ? colors.dustyRed : colors.deepPlum,
                      position: "relative",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = colors.dustyRed)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = isActive
                        ? colors.dustyRed
                        : colors.deepPlum)
                    }
                  >
                    {name}
                    {isActive && <span style={underlineStyle} />}
                  </button>
                ) : (
                  <RouterLink
                    to={to}
                    onClick={() => setNavOpen(false)}
                    style={{
                      fontWeight: "600",
                      cursor: "pointer",
                      fontFamily: "'Urbanist', sans-serif",
                      color: isActive ? colors.dustyRed : colors.deepPlum,
                      position: "relative",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = colors.dustyRed)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = isActive
                        ? colors.dustyRed
                        : colors.deepPlum)
                    }
                  >
                    {name}
                    {isActive && <span style={underlineStyle} />}
                  </RouterLink>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer transition-colors duration-500"
          style={{ color: colors.deepPlum }}
        >
          {navOpen ? (
            <FaTimes size={28} onClick={() => setNavOpen(false)} />
          ) : (
            <FaBars size={28} onClick={() => setNavOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul
          className="md:hidden flex flex-col items-center py-8 space-y-6 shadow-lg transition-colors duration-500"
          style={{ backgroundColor: colors.cream }}
        >
          <li>
            <RouterLink
              to="/"
              onClick={() => setNavOpen(false)}
              style={{
                fontWeight: "600",
                color: colors.deepPlum,
                fontFamily: "'Urbanist', sans-serif",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = colors.dustyRed)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = colors.deepPlum)
              }
            >
              Home
            </RouterLink>
          </li>

          {navLinks.map(({ name, id, to, type }) =>
            type === "scroll" ? (
              <li key={id}>
                <button
                  onClick={() => handleScrollOrNavigate(id, type)}
                  style={{
                    fontWeight: "600",
                    color: colors.deepPlum,
                    fontFamily: "'Urbanist', sans-serif",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = colors.dustyRed)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = colors.deepPlum)
                  }
                >
                  {name}
                </button>
              </li>
            ) : (
              <li key={to}>
                <RouterLink
                  to={to}
                  onClick={() => setNavOpen(false)}
                  style={{
                    fontWeight: "600",
                    color: colors.deepPlum,
                    fontFamily: "'Urbanist', sans-serif",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = colors.dustyRed)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = colors.deepPlum)
                  }
                >
                  {name}
                </RouterLink>
              </li>
            )
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
