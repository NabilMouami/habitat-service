import React, { useRef,useEffect } from 'react';
import Footer from "../../componenets/Footer";
import {Link} from "react-router-dom";
import { toast } from "react-toastify";

import emailjs from '@emailjs/browser';

const Contact = () => {
  useEffect(() => {
    window.scroll(0,0)
 },[])


 const form = useRef();

 const sendEmail = (e) => {
   e.preventDefault();

   emailjs.sendForm('service_qo6fsrd', 'template_ipke0qd', form.current, 'YCNZjikz1l6oyS33h')
     .then((result) => {
         toast.success("Message Envoyes", {
          position: "top-left",
        });
  
     }, (error) => {
         console.log(error.text);
     });
 };

  return (
    
    <div>
      <section className="contact">
        <h1 className="heading">
          <span>Contactez-</span>Nous
        </h1>
        <div className="row">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13064.468532335823!2d-2.950499!3d35.0538105!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf8ce78b091a27ab8!2sHabitat%20et%20service!5e0!3m2!1sfr!2sma!4v1660669549635!5m2!1sfr!2sma"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <form ref={form} onSubmit={sendEmail}>
            <h3>contactez-nous</h3>
            <input type="text" placeholder="name" className="box" name="from_name"/>
            <input type="email" placeholder="email" className="box"  name="from_email"/>
            <textarea
            name="message"
              placeholder="message"
              className="box"
              cols="30"
              rows="10"
            ></textarea>
            <input type="submit" className="btn" value="send message" />
          </form>
        </div>
      </section>
      <Link to="/reclamation">Reclamation</Link>
      <Footer />
    </div>
  );
};

export default Contact;
