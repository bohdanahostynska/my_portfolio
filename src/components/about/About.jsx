import React from "react";
import "./about.css";
import Image from "../../assets/photo_my.jpg"
import AboutBox from "./AboutBox";
import resume from "../../assets/My_CV.pdf"

function About() {
  return(
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />
        
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am Bohdana Hostynska, a web developer from Ukraine.I have experience in web site design and building customization.</p>
            <a href={resume} download='resume' className="btn">Download my CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                  <span className="skills__number ">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Languages</h3>
                  <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                  <span className="skills__number">30%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox/>
    </section>
    )
}

export default About;
