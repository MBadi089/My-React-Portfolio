import React from 'react'
import emailjs from 'emailjs-com';
import video from '../../components/video/RetroSciFi.mp4';

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

    // document.getElementById("contact-me-form").onsubmit = function () {
    //     var x = document.forms["contact-me-form"]["name"].value;
    //     var y = document.forms["contact-me-form"]["email"].value;
    //     var z = document.forms["contact-me-form"]["message"].value;
    
    //     var submit = true;
    
    //     if (x == null || x == "") {
    //         nameError = "Please enter your name";
    //         document.getElementById("name_error").innerHTML = nameError;
    //         submit = false;
    //     }
    
    //     if (y == null || y == "") {
    //         emailError = "Please enter your email";
    //         document.getElementById("email_error").innerHTML = emailError;
    //         submit = false;
    //     }
    
    //     if (z == null || z == "") {
    //         messageError = "Please leave a message";
    //         document.getElementById("message_error").innerHTML = messageError;
    //         submit = false;
    //     }
    
    //     return submit;
    // }
    
    // function removeWarning() {
    //     document.getElementById(this.id + "_error").innerHTML = "";
    // }
    
    // document.getElementById("name").onkeyup = removeWarning;
    // document.getElementById("email").onkeyup = removeWarning;
    // document.getElementById("message").onkeyup = removeWarning;

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
            <h1 className="contactMe">Contact Me</h1>
            <form  name="contact-me-form" id="contact-me-form" onSubmit={sendEmail}>
                <label for="userName">Your Name</label>
                <input type="text" className="form-styling" placeholder="Your Name Here" id="name" name="name"/>
                {/* <span class="error"><p id="name_error"></p></span> */}

                <label for="userEmail">Your Email</label>
                <input type="text" className="form-styling" placeholder="Email Address" id="email" name="email"/>
                {/* <span class="error"><p id="email_error"></p></span> */}

                <label for="userSubject">Subject</label>
                <input type="text" className="form-styling" placeholder="Subject" name="subject"/>
                <textarea className="form-styling messageBox" placeholder="Your Message Here" id="message" name="message"/>
                {/* <span class="error"><p id="message_error"></p></span> */}

                <input type="submit" className="btn" value="Send Message"></input>
            </form>
        </div>
    )
}
