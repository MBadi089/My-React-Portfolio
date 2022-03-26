import React from 'react';
import emailjs from 'emailjs-com';
import video from '../../components/video/RetroSciFi.mp4';

export default function ContactMe() {

    function sendEmail(e){
      e.preventDefault();

      emailjs.sendForm('gmail', 'gmail_template', e.target, 'user_XsYqdvu1bqpaekVm805ua')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    };

    return (
        <div className="contact-container">
          <video
             autoPlay
            loop
            muted
            style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1"
        }}
        >
            <source src={video} type="video/mp4" />
          </video>
        
          <h2 className="contactMe">Contact Me</h2>
            <form onSubmit={sendEmail} id="contact-me-form">
                <label for="userName">Your Name</label>
                <input type="text" className="form-styling" placeholder="Your Name Here" name="name"/>

                <label for="userEmail">Your Email</label>
                <input type="email" className="form-styling" placeholder="Email Address" name="email"/>

                <label for="subject">Subject</label>
                <input type="subject" className="form-styling" placeholder="Subject" name="subject"/>

                <label for="messageMe">Message Me</label>
                <textarea className="form-styling messageBox" placeholder="Leave A Message Here" name="message"/>

                <input type="submit" className="btn" value="Send Message"></input>
            </form>
        </div>
    )
  }
