import { render } from '@testing-library/react';
import React from 'react';
import video from '../../components/video/RetroSciFi.mp4';

export default function ContactMe() {
    state = {
        name: '',
        email: '',
        message: '',
        emailStatus: ''
    }

    handleChange = input => e => {
      this.setState({
          [input]: e.target.value
      });
    }

    render(){
      const {
          name,
          email,
          message
      } = this.state;

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
            <form id="contact-me-form">
                <label for="userName">Your Name</label>
                <input type="text" className="form-styling" placeholder="Your Name Here" value={name} onChange={this.handleChange('name')}/>

                <label for="userEmail">Your Email</label>
                <input type="email" className="form-styling" placeholder="Email Address" value={email} onChange={this.handleChange('email')}/>

                <label for="messageMe">Message Me</label>
                <textarea className="form-styling messageBox" placeholder="Leave A Message Here" value={message} onChange={this.handleChange('message')}/>

                <input type="submit" className="btn" value="Send Message"></input>
            </form>
        </div>
    );
  }
}
