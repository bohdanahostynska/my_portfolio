import React from 'react';
import "./testimonials.css"
import Image2 from "../../assets/avatar-2.svg";
import Image3 from "../../assets/avatar-3.svg"

const data=[
    {
    id:1,
    image:Image2,
    title:"Oksana Voloshyn",
    subtitle:'Product designer at Dribble',
    comment:"I've learned so much from you guys! Great work as always!"
    },
    {
        id:2,
        image:Image3,
        title:"Maria Fenyk",
        subtitle:'Product designer at Dribble',
        comment:"Well,hope to see you again in the future! Working with you was complete joy and great experience!"
    }
]

const Testimonials = () => {
  return (
<section className="testimonials container section">
    <h2 className="section__title">Clients & Reviews</h2>

    <div className="testimonials__container grid">
        {data.map(({id, image, title, subtitle, comment})=>{
            return (
                <div className="testimonials__item" key={id}>
                    <div className="thumb">
                        <img src={image} alt="" />
                    </div>
                    <h3 className="testimonials__title">{title}</h3>
                    <span className="subtitle">{subtitle}</span>
                    <div className="comment">{comment}</div>
                </div>
            )
        })}
    </div>
</section>
  )
}

export default Testimonials
