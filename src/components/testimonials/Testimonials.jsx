import React from 'react';
import "./testimonials.css"
import Image2 from "../../assets/photo_202348.jpg";
import Image3 from "../../assets/photo_202.jpg"
import  {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
    {
    id:1,
    image:Image2,
    title:"Oksana Voloshyn",
    subtitle:'Product designer at Dribble',
    comment:"Great work as always!"
    },
    {
        id:2,
        image:Image3,
        title:"Christina",
        subtitle:'Product designer at Dribble',
        comment:"Well,hope to see you again in the future! Working with you was complete joy and great experience!"
    }
]

const Testimonials = () => {
  return (
<section className="testimonials container section">
    <h2 className="section__title">Clients & Reviews</h2>

    <Swiper className="testimonials__container grid"
    modules={[Pagination]}
    spaceBetween={30}
    slidesPerView={1}
    loop={true}
    pagination={{clickable:true}}
    grabCursor={true}
    >
        {data.map(({id, image, title, subtitle, comment})=>{
            return (
                <SwiperSlide className="testimonials__item" key={id}>
                    <div className="thumb">
                        <img src={image} alt="" />
                    </div>
                    <h3 className="testimonials__title">{title}</h3>
                    <span className="subtitle">{subtitle}</span>
                    <div className="comment">{comment}</div>
                </SwiperSlide>
            )
        })}
    </Swiper>
</section>
  )
}

export default Testimonials
