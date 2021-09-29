import React from 'react'
import emailjs from 'emailjs-com';

export default function ContactMe() {
    
    function sendEmail(e) {
        alert("Your message was sent!")
        e.preventDefault();

        emailjs.sendForm('service_gi1yvcz', 'gmail_template', e.target, 'user_XsYqdvu1bqpaekVm805ua')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
    }

    return (
        <div className="contact-container">
            <h1 className="contactMe">Contact Me</h1>
            <form onSubmit={sendEmail}>
                <label for="userName">Your Name</label>
                <input type="text" className="form-styling" placeholder="Your Name Here..." name="name"/>

                <label for="userEmail">Your Email</label>
                <input type="text" className="form-styling" placeholder="Email Address" name="email"/>

                <label for="userSubject">Subject</label>
                <input type="text" className="form-styling" placeholder="Subject" name="subject"/>
                <textarea className="form-styling messageBox" placeholder="Your Message Here" name="message"></textarea>

                <input type="submit" className="btn" value="Send Message"></input>
            </form>
        </div>
    )
}
