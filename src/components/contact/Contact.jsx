import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m97b788', 'template_n4xqdto', form.current, 'rTj9xg8CzUpRJviMw')
     e.target.reset()
  };
  return (
<section className="contact container section"id='contact'>
  <h2 className="section__title">Get In Touch</h2>

  <div className="contact__container grid">
    <div className="contact__info">
      <h3 className="contact__title">Let's talk about everything!</h3>
      <p className="contact__details">Don't like forms? Send me an email!</p>
    </div>

    <form  ref={form} onSubmit={sendEmail} action="" className="contact__form">
      <div className="contact__form-group">
      <div className="contact__form-div">
        <input type="text" name ="name" className="contact__form-input" placeholder='Insert your name' />
      </div>

      <div className="contact__form-div">
        <input type="email" name ="email" className="contact__form-input" placeholder='Insert your email' />
      </div>
      </div>

      <div className="contact__form-div">
        <input type="text"name ="subject"  className="contact__form-input" placeholder='Insert your subject' />
      </div>

      <div className="contact__form-div contact__form-area">
        <textarea name='' id=""cols="30" rows="10"
     className="contact__form-input" placeholder='Write your message'></textarea>
      </div>

      <button className='btn'>Send Message</button>
    </form>
  </div>
</section>
  )
}

export default Contact
