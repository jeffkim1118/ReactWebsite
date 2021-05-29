import React from 'react';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import './Contact.css';
init("user_1a6BFnXaEAIp7PioybbeH");


export default function ContactUs(){

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_mnuy2cq', e.target, 'user_1a6BFnXaEAIp7PioybbeH')
          .then((result) => {
              console.log(result.text);
              alert('Your mail is sent!');
          }, (error) => {
              console.log(error.text);
              alert('Error: unable to send mail!');
          });
          e.target.reset()
      }
    return(
        <div className="form-container">
            <div className="box"><br/><br/>
                <form className="contact-form" onSubmit={sendEmail}>
                    <h1>Contact</h1>
                    <label>Name</label><br/>
                    <input type="text" name="name" placeholder="Your name"/><br/>
                    <label>Email</label><br/>
                    <input type="email" name="email" placeholder="example@email.com"/><br/>
                    <label>Subject</label><br/>
                    <input type="text" name="subject" placeholder="Subject"/><br/>
                    <label>Message</label><br/>
                    <textarea className="message-content" name="message" placeholder="Write something..."/><br/>
                    <input className="sendBtn" type="submit" value="Send"/>
                </form>
            </div>
        </div>
        
    );
}