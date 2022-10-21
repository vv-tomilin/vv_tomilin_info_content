import React from 'react';

import data from '../projects-info.json';

function Portfolio() {
  const projectsList = data.projects;

  const [imagesSrc, setImagesSrc] = React.useState();
  const [showModal, setShowModal] = React.useState(false);

  const openModalAndSetSrcImages = (images) => {
    console.log(images, imagesSrc, showModal);
    setImagesSrc(images);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="portfolio">
        {projectsList &&
          projectsList.map((project) => {
            const name = project.name;
            const desk = project.images.desk;
            const mob = project.images.mob;
            const projectLink = project.links.workProject;
            const gitHubLink = project.links.gitHub;

            return (
              <div className="portfolio__project" key={name}>
                <div className="portfolio__images">
                  <img
                    className="portfolio__image"
                    src={desk}
                    onClick={() => openModalAndSetSrcImages([desk, mob])}></img>
                  <img
                    className="portfolio__image"
                    src={mob}
                    onClick={() => openModalAndSetSrcImages([desk, mob])}></img>
                </div>
                <div className="portfolio__info">
                  <div className="portfolio__title">Ссылки для просмотра проекта:</div>
                  <div>
                    <a target="blink" href={projectLink} className="link">
                      Работа проекта
                    </a>
                  </div>
                  <div>
                    <a target="blink" href={gitHubLink} className="link">
                      Репозиторий на GitHub
                    </a>
                  </div>
                  <div className="portfolio__title">Описание проекта:</div>
                  <ul>
                    {project.stackInfo &&
                      project.stackInfo.map((item, index) => {
                        return (
                          <li className="portfolio__description-item" key={index}>
                            &rsaquo; {item};
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            );
          })}
      </div>
      {showModal && (
        <div onClick={closeModal} className="portfolio__images-popup">
          <div className="portfolio__images-popup-close" onClick={closeModal}></div>
          <div className="portfolio__popup-images">
            <img src={imagesSrc[0]}></img>
            <img src={imagesSrc[1]}></img>
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;
