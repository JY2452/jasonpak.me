import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import ProjectItems from './ProjectItems';

const Projects = () => {
  return (
    <section data-index="4" id="projects">
      <h2>Projects</h2>

      <Fade bottom>
        {ProjectItems.map((item) => {
          return (

            <div className="projectItem" key={item.project}>
              <Fade bottom>
                <div className="projectText">

                  <p className="projectTitle">{item.project}</p>

                  <div className="projectLanguage">
                    {item.languages.map((language) => {
                      return (
                        <p key={language.name}
                          style={{ background: language.bg, color: language.color }}
                        >
                          {language.name}
                        </p>
                      );
                    })}
                  </div>

                  <p className="projectDescr">{item.description}</p>

                  <div className="projectIcons">
                    {item.icons.map((icon) => {
                      return (
                        <a href={icon.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={item.name}
                          key={icon.name}
                        >
                          <i className={icon.name}><p>{icon.text}</p></i>
                        </a>
                      );
                    })}
                  </div>

                </div>
              </Fade>

              <Slide right>
                <img className="projectImage" src={item.img.src} style={item.img.style} alt="ProjectImage" />
              </Slide>
            </div>

          );
        })}
      </Fade>

    </section>

  );
};

export default Projects;
