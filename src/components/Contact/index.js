import React from 'react'
import emailjs from 'emailjs-com';

export default function ContactMe() {
    
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'gmail_template', form.current, 'user_XsYqdvu1bqpaekVm805ua')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

    return (
        <div className="contact-container">
            <form onSubmit={sendEmail}>

            </form>
        </div>
    )
}
