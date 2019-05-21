import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./about.css"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="about-container">
      <div
        className="about-header"
        style={
          typeof window !== "undefined"
            ? window.innerWidth < 950
              ? { fontSize: "30px", paddingTop: "0px" }
              : null
            : null
        }
      >
        HEY I'M TY
      </div>

      <div className="about-section-container">
        <div className="about-section-content">
          <div
            className="about-section-header-container"
            style={
              typeof window !== "undefined"
                ? window.innerWidth < 950
                  ? null
                  : { width: "170px" }
                : null
            }
          >
            <div
              style={
                typeof window !== "undefined"
                  ? window.innerWidth < 950
                    ? { float: "left", marginBottom: "5px" }
                    : { float: "right" }
                  : null
              }
            >
              BACKGROUND
            </div>
          </div>
          <div
            className="about-section-text"
            style={
              typeof window !== "undefined"
                ? window.innerWidth < 950
                  ? { width: "100%", fontSize: "16px" }
                  : {}
                : null
            }
          >
            <span>
              Iâ€™m a frontend software developer and 4th year student at UC
              Santa Barbara set to graduate from the College of Engineering in
              2019 with a B.S. in Computer Science.
              <br />
              <br />
              As a frontend developer, I straddle the border between engineering
              and design, combining the latest technologies with modern design
              standards to build sleek web apps. To ensure my work delivers a
              solid user experience, I focus on developing engaging, responsive
              interfaces with an emphasis on simplicity.
              <br />
              <br />
              Iâ€™m currently available for work and am actively seeking an
              internship that will put my JavaScript abilities to the test and
              help me become a better software engineer. If your team needs an
              open-minded problem solver with a strong background in JavaScript,
              I'm your guy.
            </span>
          </div>
        </div>
      </div>

      <div className="about-section-container">
        <div className="about-section-content">
          <div
            className="about-section-header-container"
            style={
              typeof window !== "undefined"
                ? window.innerWidth < 950
                  ? null
                  : { width: "170px" }
                : null
            }
          >
            <div
              style={
                typeof window !== "undefined"
                  ? window.innerWidth < 950
                    ? { float: "left", marginBottom: "5px" }
                    : { float: "right" }
                  : null
              }
            >
              SKILLS
            </div>
          </div>
          <div
            className="about-section-text"
            style={
              typeof window !== "undefined"
                ? window.innerWidth < 950
                  ? {
                      width: "100%",
                      fontSize: "16px",
                      justifyContent: "center",
                    }
                  : null
                : null
            }
          >
            <ul className="skills-content">
              <li className="skills-column">
                <div className="skills-header">LANGUAGES</div>
                <div className="skills-list">
                  <span>
                    JavaScript (ES6)
                    <br />
                    Ruby
                    <br />
                    Java
                    <br />
                    HTML
                    <br />
                    CSS
                  </span>
                </div>
              </li>

              <li className="skills-column">
                <div className="skills-header">FRAMEWORKS</div>
                <div className="skills-list">
                  <span>
                    Node.js
                    <br />
                    React.js
                    <br />
                    Express.js
                    <br />
                    Leaflet.js
                    <br />
                    Ruby on Rails
                  </span>
                </div>
              </li>

              <li
                className="skills-column"
                style={
                  typeof window !== "undefined"
                    ? window.innerWidth < 530
                      ? { marginTop: "10px" }
                      : null
                    : null
                }
              >
                <div className="skills-header">TOOLS</div>
                <div className="skills-list">
                  <span>
                    Git & GitHub
                    <br />
                    Google Maps API
                    <br />
                    Bash
                    <br />
                    Webpack
                    <br />
                    Chrome DevTools
                  </span>
                </div>
              </li>

              <li
                className="skills-column"
                style={
                  typeof window !== "undefined"
                    ? window.innerWidth < 646
                      ? { marginTop: "10px" }
                      : {}
                    : null
                }
              >
                <div className="skills-header">Miscellaneous</div>
                <div className="skills-list">
                  <span>
                    GIS
                    <br />
                    Sketch
                    <br />
                    Mapbox Studio
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default SecondPage
