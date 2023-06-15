import React from "react";
import "./skills.css";
import git from "../../assets/git.svg";
import javascript from "../../assets/javascript.svg";
import github from "../../assets/github2.svg";
import react from "../../assets/react.svg";
import redux from "../../assets/redux.svg";
import css from "../../assets/css-144.png";
import html from "../../assets/html-144.png";
import formik from "../../assets/formik.svg"

const data = [
  {
    id: 1,
    image: git,
  },
  {
    id: 2,
    image: javascript,
  },
  {
    id: 3,
    image: github,
  },
  {
    id: 4,
    image: react ,
  },
  {
    id: 5,
    image: redux,
  },
  {
    id: 6,
    image:css,
  },
  {
    id: 7,
    image:html,
  },
  {
    id: 8,
    image:formik,
  },
];
function Skills() {
  return <section className="skills container section" id="skills">
    <h2 className="section__title">Skills</h2>

    <div className="skills__container grid">
      {data.map(({id, image})=>{
        return (
          <div className="skills__card" key={id}>
            <img src={image} alt="" className="skills__img" />
          </div>
        )
      })}
    </div>
  </section>
}

export default Skills;
