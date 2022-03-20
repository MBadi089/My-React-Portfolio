import React from 'react'
import video from '../../components/video/RetroSciFi.mp4';

export default function ContactMe() {

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
            <form  name="contact-me-form" id="contact-me-form">
                <label for="userName">Your Name</label>
                <input type="text" className="form-styling" placeholder="Your Name Here" id="name"/>

                <label for="userEmail">Your Email</label>
                <input type="text" className="form-styling" placeholder="Email Address" id="email"/>

                <label for="userSubject">Subject</label>
                <input type="text" className="form-styling" placeholder="Subject" id="subject"/>
                <textarea className="form-styling messageBox" placeholder="Your Message Here" id="message"/>

                <input type="submit" className="btn" value="Send Message"></input>
            </form>
        </div>
    )
}
