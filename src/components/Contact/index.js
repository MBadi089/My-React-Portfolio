import React ,{useState} from 'react';
import emailjs from 'emailjs-com';
import video from '../../components/video/RetroSciFi.mp4';

export default function ContactMe() {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userSubject, setUserSubject] = useState("");
    const [userMessage, setUserMessage] = useState("");
    
    const [userNameErr, setUserNameErr] = useState({});
    const [userEmailErr, setUserEmailErr] = useState({});
    const [userSubjectErr, setUserSubjectErr] = useState({});
    const [userMessageErr, setUserMessageErr] = useState({});

    function sendEmail(e){

      e.preventDefault();
      const isValid = formValidation();
      if(isValid){
         setUserName("");
         setUserEmail("");
         setUserSubject("");
         setUserMessage("");
         
         alert("Your Message Was Sent!");
      }

      emailjs.sendForm('service_gi1yvcz', 'gmail_template', e.target, 'user_XsYqdvu1bqpaekVm805ua')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    }

    const formValidation = () => {
        const userNameErr = {};
        const userEmailErr = {};
        const userSubjectErr = {};
        const userMessageErr = {};
        let isValid = true;

        const emailRegex = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';

        //this targets the userName (Your Name field) input and validates the user to USE MORE than 5 characters
        if(userName.trim().length < 5) {
            userNameErr.userNameShort = "Please enter your full name";
            isValid = false;
        }

        //this targets the userEmail (Enter Your Email field) input and validates the user to use their email address
        // if(emailRegex.test(userEmail)){
        //     userEmailErr.userEmailIsNotValid = "Please enter a valid email address";
        //     isValid = false;
        // }

        //this targets the userSubject (Subject field) input and validates the user to USE MORE than 3 characters
        if(userSubject.trim().length < 3) {
            userSubjectErr.userSubjectShort = "Please enter more than 3 characters";
            isValid = false;
        }

        //this targets the userSubject (Subject field) input and validates the user to USE LESS than 20 characters
        if(userSubject.trim().length > 20) {
            userSubjectErr.userSubjectLong = "Please keep the characters under 20";
            isValid = false;
        }

        //this targets the userMessage (Message Me field) input and validates the user to USE MORE than 4 characters
        if(userMessage.trim().length < 4) {
            userMessageErr.userMessageShort = "Please enter more than 4 characters";
            isValid = false;
        }

        //this targets the userMessage (Message Me field) input and validates the user to USE LESS than 300 characters
        if(userMessage.trim().length > 250) {
            userMessageErr.userMessageLong = "Please enter less than 250 characters";
            isValid = false;
        }

        setUserNameErr(userNameErr);
        setUserEmailErr(userEmail);
        setUserSubjectErr(userSubject);
        setUserMessageErr(userMessage);
        return isValid;
        
    }

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
                <input type="text" className="form-styling" placeholder="Your Name Here" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
                {Object.keys(userNameErr).map((key)=>{
                    return <div style={{color : "red"}}>{userNameErr[key]}</div>})}

                <label for="userEmail">Your Email</label>
                <input type="email" className="form-styling" placeholder="Email Address" value={userEmail} onChange={(e)=>{setUserEmail(e.target.value)}}/>
                {Object.keys(userEmailErr).map((key)=>{
                    return <div style={{color : "red"}}>{userEmailErr[key]}</div>})}

                <label for="subject">Subject</label>
                <input type="subject" className="form-styling" placeholder="Subject" value={userSubject} onChange={(e)=>{setUserSubject(e.target.value)}}/>
                {Object.keys(userSubjectErr).map((key)=>{
                    return <div style={{color : "red"}}>{userSubjectErr[key]}</div>})}

                <label for="messageMe">Message Me</label>
                <textarea className="form-styling messageBox" placeholder="Leave A Message Here" value={userMessage} onChange={(e)=>{setUserMessage(e.target.value)}}/>
                {Object.keys(userMessageErr).map((key)=>{
                    return <div style={{color : "red"}}>{userMessageErr[key]}</div>})}

                <input type="submit" className="btn" value="Send Message"></input>
            </form>
        </div>
    )
  }
