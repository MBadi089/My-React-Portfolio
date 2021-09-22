import React from 'react'
import emailjs from 'emailjs-com';

export default function ContactMe() {
    
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'gmail_template', e.target, 'user_XsYqdvu1bqpaekVm805ua')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

    return (
        <div className="contact-container">
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="text" className="form-styling" placeholder="Name" name="name"/>
                <input type="text" className="form-styling" placeholder="Email Address" name="email"/>
                <input type="text" className="form-styling" placeholder="Subject" name="subject"/>
                <textarea className="form-styling" placeholder="Your Message" name="message"></textarea>
                <input type="submit" className="btn" value="Send Message"></input>
            </form>
        </div>
    )
}
