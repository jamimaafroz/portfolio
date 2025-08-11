import React, { useEffect } from "react";
import { useLocation } from "react-router";
import DesignationIntro from "./DesignationIntro";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import ResumeButton from "./ResumeButton";
import Education from "./Education";
import Experience from "./Experience";
import ProjectList from "../../Project/ProjectList";
import Contact from "./Contact";
import SocialLinks from "./SocialLinks";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div>
      <DesignationIntro />
      <div id="about">
        <AboutMe />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <ResumeButton />
      <Education />
      <Experience />
      <div id="project-section">
        <ProjectList />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="social">
        <SocialLinks />
      </div>
    </div>
  );
};

export default Home;
