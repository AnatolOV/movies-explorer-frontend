import React from "react"
import Foto from "../../images/Avatar.jpg"
import "./AboutMe.css"

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__info">
        <div className="about-me__info-text">
          <h3 className="about-me__name">Анатолий</h3>
          <h4 className="about-me__job">Фронтенд-разработчик, 37 лет</h4>
          <p className="about-me__text">
            Я родился в Саранске, живу в Москве. Я люблю слушать музыку, читать
            художественную литературу.
          </p>
          <a
            href="https://github.com/AnatolOV"
            className="about-me__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={Foto} alt="Мое фото" className="about-me__foto" />
      </div>
    </section>
  );
}

export default AboutMe